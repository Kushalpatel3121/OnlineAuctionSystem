# System Requirement Specification (`Online Auction System`)
<br />

## <b>System Users</b>

- Administrator (Admin)
- Users (Auctioneers and Bidders)

<br />

## <b>High Level Requirement</b>
<br/>

### `Module 0 (General Module)`
<br/>

- Registration of new Users : 
	- New users can register themselves on the platform.

<br/>

- Authentication of user based on role : 
    - The users will have to authenticate themselves based on their respective roles to           access the system.

<br/>

- Post Auction proceedings : 
    - The system will help the auctioneers and bidders to go on with general proceedings ,       once the deal is closed.

<br/>

### `Module 1 (Admin Module)`
<br />

- View Users' Details
    - The Admin can view the details of the users registered in the system.

<br/>

- Suspend users
    - The Admin can suspend any user account if he/she suspects some unacceptable activity.

<br/>

- View System Statistics
    - The Admin can view the system details and statistics of the system.

<br/>

### `Module 2 (Acutioneer Module)`
<br/>

- Create Auction
    - The Auctioneer can create an auction of any given mode and should list an item to be       auctioned.

<br/>

- View Auction Details
    - The Auctioneer can view his ongoing , upcoming and past created auctions and its           status.

<br/>

- View Auction Statistics
    - The Auctioneer can view and analyze the auctions created by him using the respective       auction statistics.

<br/>

- Report Bidder
    - The Auctioneer can report or prevent any bidder from participating in the auctions         that he/she created.

<br/>

- View current participation
    - The bidder can view the auctions and its updates in which he/she has participated.

<br/>

- View Ongoing Auction
    - The bidder can view the auctions in their feed in which he/she can likely                   participate.

<br/>

- Register for an auction
    - The bidder can register for upcoming auctions listed in the system.

<br/>

- Reminders for users: 
    - The system will give reminders to auctioneers and bidders before the auction starts.

<br/>
		
- Update notifications to users : 
    - The system will notify the auctioneers and bidders about important updates happening       in the auction.

<br/>

- Get Suggestions for base price  -- `Optional`
    - The auctioneer can opt to get a base price suggestion for his/her listed product.

<br/>

- Suggestions to participate -- `Optional`
    - The bidder can get suggestions on the auctions in which he/she can participate.

<br/>

## <b>Functional Requirements</b>
---
<br/>

### Module-0 : General — 

<br/>

- R1. User Registration : 

    - Description :  New users can register themselves on the platform.
    - Input : User details.
    - Output :  users will be registered successfully.

<br/>

- R2. Authenticate Users (Login) : 

    - Description : The users will be able to authenticate themselves based on their role.
    - Input : email/username and password.
    - Output :  The users will be redirected to the home screen or admin panel based on their role.
	
<br/>

- R3. Post Auction proceedings :

	- R3.1. Payment process : 

        - Description : The highest bidder will have to pay the auctioneer if he chooses the online payment option.
        - Input :  The bidder will interact with the Payment gateway.
        - Output :  Bidder will be notified on the successful completion of payment / error.


    - R3.2. Share Details :

        - Description :  The auctioneer and the highest bidder will then have the contact information of each other       for them to interact.
        - Input :  -
        - Output :  The contact details of both parties will be made available to one another.

<br/>

### Module-1 : Administrator (Admin) —

<br/>

- R1. View users’ Details :

    - Description :  The Admin can view the users’ data.
    - Input :  User selection.
    - Output :  List of Users.

<br/>

- R2. Suspend users :

    - Description :  The Admin can suspend any user if multiple other users have reported that profile.
    - Input :  Confirmation for account suspension.
    - Output : The selected user will be suspended and won’t be allowed to participate in any auctions or             create it.

<br/>

- R3. View System Statistics :

    - Description :  The Admin can see the system statistics like the number of auctions created etc. and much       more to analyze the performance of the platform.
    - Input :  Selection of criterion of data and time period.
    - Output :  The chosen System Statistics will be displayed to the Admin.

<br/>

### Module-2 : Users —

<br/>

- R1. Create Auction : 

    - Description :  The users can create new Auctions.
    - Input :  Auction Details.
    - Output :  The Auction will be registered and will be launched on time.

<br/>

- R2. View Auction Details : 

    - Description :  Users can view the details of the auctions they’ve created.
    - Input :  User selection
    - Output :  Details of the Auction will be displayed to the user.

<br/>

- R3. View Auction Statistics : 

    - Description :   Users can view the auction statistics to analyze various performance parameters..
    - Input :  User Selection and parameters.
    - Output :  Statistics for particular auction will be displayed to the user.

<br/>

- R4. Report Bidder : 

    - Description :  The User (Auctioneer) can report any bidder if he wishes so.
    - Input :  User Selection and Confirmation.
    - Output :  Selected bidders will be reported and can be viewed by the Admin.

<br/>

- R5. View Current Participation : 

    - Description :  The User(Bidder) can view those Auctions in which he is a current participant and view           updates on those Auctions.
    - Input :  User Selection.
    - Output :  The Participation table will be displayed to the User.

<br/>

- R6. View Ongoing Auctions : 

    - Description :  The User(Bidder) can view the ongoing / upcoming Auctions that are registered on the             platform , so that he/she could plan to participate in those.
    - Input :  User Selection.
    - Output :  The current auctions registered will be displayed.

<br/>

- R7. Register for Auctions : 

    - Description :  The User(Bidder) will have to register themselves for an auction beforehand to participate       in it.
    - Input : User Details and confirmation.
    - Output :  The User will be registered for that particular Auction and he/she can participate in it. The         Auctioneers will be able to see the registered users.

<br/>

- R8. Reminder for Users : 

    - Description :  The Users will be reminded about the Auction before it is about to begin to make them           aware of it.
    - Input :  -
    - Output :  A reminder would be sent to all the Users for that Auction as well as the Auctioneer.

<br/>

- R9. Update Notification for Users : 

    - Description :  The participants and the Auctioneers will get regular updates of the Auction once it             begins.
    - Input :  - 
    - Output :  The updates will be sent to the participants and the Auctioneer.

<br/>

- R10. Suggestion for base price (optional): 

    - Description :  The Auctioneer will get suggestions about the base price for the item during creation of         auction.
    - Input :  - 
    - Output :  Suggestions would be provided.

<br/>

- R11. Suggestion to participate (optional): 

    - Description :  Users(Bidders) can get the suggestions to participate in auctions based on their interest.
    - Input : - 
    - Output :  Suggestions would be shown to the bidder.

<br/>
