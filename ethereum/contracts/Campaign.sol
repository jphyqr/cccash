pragma solidity ^0.4.17;

contract CampaignFactory {
    address[] public deployedCampaigns;

    function createCampaign(uint managerRate, uint startUpNeeded) public {
        address newCampaign = new Campaign(managerRate, startUpNeeded, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }
}

contract Campaign {
    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint votingCount;
        mapping(address=>uint) votes;

    }

    
    
    

    
        struct PrivateCapIncreaseRequest {
        string description;
        uint cap;
        uint contributions;
        uint capSpace;
        bool complete;
        uint value; //store value before its approved
        uint votingCount;
        mapping(address=>uint) votes;
        address privateAddress;
        

    }
    
   struct Quote{
       uint quote;
       address owner;
       bool complete;
       uint actual;
       string description;
       uint price;
       bool purchased;
   }
    
  
    Quote[] public costEstimatesPending;
    Request[] public requests;
    Request[] public offers;
    Request[] public tasks;
    Request[] public publicCapIncreaseRequests;
    PrivateCapIncreaseRequest[] public privateCapIncreaseRequests;
   // mapping(address=> PrivateCapIncreaseRequest) public privateCapIncreaseRequests;
    mapping(address => uint) public shares;
    address public manager;
    mapping(address => bool) public taskApprovers;
    uint public approversCount;
    uint public totalShares;
    uint public cap;
    uint public contributions;
    uint public capSpace;
    uint public managerRate;
    bool public isOpen;
    bool public closeCampaignRequested;
    mapping(address=>uint) public closeCampaignVotes;
    uint public totalCloseCampaignVotes;
    bool public forSale;
    bool public forSaleRequested;
    mapping(address=>uint) public forSaleVotes;
    uint public totalForSaleVotes;
    bool public isSold;
    address public buyer;
    uint public purchasePrice;
    bool public canCashOut;
    uint public profit;
    bool public isFundraising;
    uint public startUpNeeded;
    Quote public costEstimate;
    
    
 
    

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }
    
    modifier open(){
        require(isOpen==true);
        _;
    }
    
        modifier fundraising(){
        require(isFundraising==true);
        _;
    }

    modifier selling(){
        require(forSale==true);
        _;
    }

    modifier sold(){
        require(isSold==true);
        _;
    }
    
        modifier cashout(){
        require(canCashOut==true);
        _;
    }

    

    function Campaign(uint mangRate, uint fundsRequired, address creator) public {
        require(mangRate>=0 && mangRate <=100);
        managerRate = mangRate;
        manager = creator;
        shares[creator]+=1;
        totalShares+=1;
        taskApprovers[creator] = true; //make manager able to approve tasks
        isFundraising=true;
        startUpNeeded = fundsRequired;
    }
    
    
    

  
    function purchaseCostEstimate(uint index) public restricted{
         Quote storage quote = costEstimatesPending[index];

        require(address(this).balance >= quote.price);
        require(!quote.purchased);
        quote.purchased = true;
         quote.owner.transfer(quote.price);
         costEstimate = quote;
        
        
    }
        
    function createCostEstimate(string desc, uint amt, uint cost) public {
        Quote memory newEstimate = Quote({
           description: desc,
           quote: amt,
           owner: msg.sender,
           complete: false,
           purchased: false,
           actual: 0,
           price: cost
        });

        costEstimatesPending.push(newEstimate);
    }
  
      function createOffer(uint offer) public selling{
        Request memory newOffer = Request({
           description: "",
           value: offer,
           recipient: msg.sender,
           complete: false,
           votingCount: 0
        });

        offers.push(newOffer);
    }
    
        function approveOffer(uint index) public selling{
        Request storage offer = offers[index];
        
        require(shares[msg.sender]>0); //has equity
        require(offer.votes[msg.sender]==0); //hasnt voted on this task already
        
        offer.votes[msg.sender]+=shares[msg.sender];
        offer.votingCount+=shares[msg.sender];

    }
        
    function finalizeOffer(uint index) public restricted selling{
        Request storage offer = offers[index];

        require(offer.votingCount > (totalShares*2/3));
        require(!offer.complete);

        
        offer.complete = true;
        isSold=true;
        forSale=false;
        forSaleRequested=false;
        buyer = offer.recipient;
        purchasePrice = offer.value;
        
    }
     
        function requestToSell() public restricted open{
        forSaleRequested = true;
    }
    
    function cashOut() public payable cashout{
        require(shares[msg.sender]>0); 

        uint value = address(this).balance;
        uint total = (value*shares[msg.sender])/totalShares;
         
        msg.sender.transfer(total);
        totalShares-=shares[msg.sender];
        shares[msg.sender]=0;
        
        
    }
    
    
    function getBalance() public view returns (uint) {
        return address(this).balance;
    }
    
    
    function buy() public payable sold{
        require(msg.sender==buyer);
        require(msg.value>=purchasePrice);
        
       
        
        canCashOut=true;
        if(purchasePrice>totalShares){
        
        profit=purchasePrice-totalShares;
        uint managerFee = profit*managerRate/100;
        manager.transfer(managerFee);
        profit-=managerFee;
        
            
        }else{
            profit=0;
        }
        
    }
    
    function voteToSell() public open { 
        require(forSaleRequested ==true);
        require(shares[msg.sender]>0); //make sure has equity in project
        require(forSaleVotes[msg.sender]==0); //make sure has not voted yet
        forSaleVotes[msg.sender] = shares[msg.sender];
        totalForSaleVotes+=shares[msg.sender];
        
        if(totalForSaleVotes>totalShares*2/3)
        {
            forSale=true;
            isOpen=false;
            isFundraising=false;
            forSaleRequested=false;
        }
    } 
  
  
  
    
    
        function requestToCloseCampaign() public restricted open{
        closeCampaignRequested = true;
    }
    
    function voteToCloseCampaign() public open{ 
        require(closeCampaignRequested==true);
        require(shares[msg.sender]>0); //make sure has equity in project
        require(closeCampaignVotes[msg.sender]==0); //make sure has not voted yet
        closeCampaignVotes[msg.sender] = shares[msg.sender];
        totalCloseCampaignVotes+=shares[msg.sender];
        
        if(totalCloseCampaignVotes>totalShares*2/3)
        {
            isOpen=false;
            isFundraising=false;
            canCashOut=true;
        }
    }

    function contributePublic() public fundraising payable {
        require(msg.value <= capSpace);
        
        shares[msg.sender]+= msg.value;
        totalShares+= msg.value;
        contributions+=msg.value;
        capSpace=cap-contributions;
     
        if(isOpen==false){
            if(totalShares>=startUpNeeded)
             isOpen=true;
        }

        
        
    }
    
        function contributePrivate(uint index) public fundraising payable {
        PrivateCapIncreaseRequest storage lookupRequest = privateCapIncreaseRequests[index];
        require(msg.value <= lookupRequest.capSpace );
        require(lookupRequest.privateAddress==msg.sender);    
        shares[msg.sender]+= msg.value;
        totalShares+= msg.value;
        contributions+=msg.value;
       lookupRequest.contributions+=msg.value;
        lookupRequest.capSpace=lookupRequest.cap-lookupRequest.contributions;
        
            if(isOpen==false){
            if(totalShares>=startUpNeeded)
             isOpen=true;
        }
        
    }
    
 

    function createPrivateCapIncreaseRequest(string description, uint value, address investor) public restricted fundraising{
        PrivateCapIncreaseRequest memory newRequest = PrivateCapIncreaseRequest({
           description: description,
           complete: false,
           votingCount: 0,
           privateAddress: investor,
           value: value,
           cap:0,
           capSpace: 0,
           contributions: 0
        });

        privateCapIncreaseRequests.push(newRequest);
    }
    
          function approvePrivateCapIncreaseRequest(uint index) public fundraising {
        PrivateCapIncreaseRequest storage request = privateCapIncreaseRequests[index];

        require(request.votes[msg.sender]==0); //mmake sure hasnt voted yet 
        require(shares[msg.sender]>0); //make sure has equity in project

      
      
        request.votes[msg.sender] = shares[msg.sender];
        request.votingCount+= shares[msg.sender];
    }


    function finalizePrivateCapIncreaseRequest(uint index) public restricted fundraising {
        PrivateCapIncreaseRequest storage request = privateCapIncreaseRequests[index];

        require(request.votingCount > (totalShares / 2));
        require(!request.complete);
        request.complete = true;
    
        request.cap+=request.value;
        
        request.capSpace = request.cap-request.contributions;
        
        
    } 

    
    





    function createPublicCapIncreaseRequest(string description, uint value) public restricted fundraising {
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient:0,
           complete: false,
           votingCount: 0
        });

        publicCapIncreaseRequests.push(newRequest);
    }

    function createTask(string description, uint value, address recipient) public restricted open{
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           votingCount: 0
        });
        
        


        tasks.push(newRequest);
    }

    function createRequest(string description, uint value, address recipient) public restricted open{
        Request memory newRequest = Request({
           description: description,
           value: value,
           recipient: recipient,
           complete: false,
           votingCount: 0
        });

        requests.push(newRequest);
    }
    
      function approvePublicCapIncreaseRequest(uint index) public fundraising {
        Request storage request = publicCapIncreaseRequests[index];

        require(request.votes[msg.sender]==0); //mmake sure hasnt voted yet 
        require(shares[msg.sender]>0); //make sure has equity in project

      
      
        request.votes[msg.sender] = shares[msg.sender];
        request.votingCount+= shares[msg.sender];
    }

    function finalizePublicCapIncreaseRequest(uint index) public restricted fundraising {
        Request storage request = publicCapIncreaseRequests[index];

        require(request.votingCount > (totalShares / 2));
        require(!request.complete);
        cap+=request.value;
        
        capSpace = cap-contributions;
        request.complete = true;
    }  
    
    
    
    
    

    function approveRequest(uint index) public open{
        Request storage request = requests[index];
        
        require(request.votes[msg.sender]==0); //mmake sure hasnt voted yet 
        require(shares[msg.sender]>0); //make sure has equity in project

        request.votes[msg.sender] = shares[msg.sender];
        request.votingCount+= shares[msg.sender];
    }
    
        function approveTask(uint index) public open{
        Request storage request = tasks[index];
        
        require(request.votes[msg.sender]==0); //mmake sure hasnt voted yet 
        require(shares[msg.sender]>0); //make sure has equity in project
        
        
        request.votes[msg.sender] = shares[msg.sender];
        request.votingCount+= shares[msg.sender];

    }
        
    function finalizeTask(uint index) public restricted open{
        Request storage request = tasks[index];

        require(request.votingCount > (totalShares / 2));
        require(!request.complete);

        shares[request.recipient] += request.value;
        
        request.complete = true;
        totalShares+= request.value;
        
    }

    
    

    function finalizeRequest(uint index) public restricted open{
        Request storage request = requests[index];
               require(request.votingCount > (totalShares / 2));
        require(!request.complete);
        request.complete = true;  
        request.recipient.transfer(request.value);

    }
    




    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
        function getTasksCount() public view returns (uint) {
        return tasks.length;
    }
        function getPublicCapIncreaseCount() public view returns (uint) {
        return publicCapIncreaseRequests.length;
    }
          function getPrivateCapIncreaseCount() public view returns (uint) {
        return privateCapIncreaseRequests.length;
    }
    
            function getEstimatePendingCount() public view returns (uint) {
        return costEstimatesPending.length;
    }

       function getEquity() public view returns (uint) {
           
           
           uint remainingValue = 100-managerRate;
           uint equity = (shares[msg.sender]*remainingValue)/totalShares;
            
       
          
           if(msg.sender == manager)
           {
              equity+=managerRate;
           }
           
           return equity;

        
    }


    

           function getSummary() public view returns (
       uint, address, uint, uint, uint, bool, bool, bool, bool, bool, uint, uint, uint
      ) {
        return (
          address(this).balance,
          manager,
          totalShares,
          cap,
          capSpace,
           isOpen, 
           isFundraising, 
           isSold,
            canCashOut, 
            forSale,
             managerRate,
             contributions,
             startUpNeeded
        );
    } 
    
    
}