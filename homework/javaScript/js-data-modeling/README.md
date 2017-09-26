[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Data Modeling with JavaScript

Every computer program deals with managing data. How you choose to represent
these data within your program can have far-reaching implications on every other
part of your application; consequently, reversing those decision becomes more
and more costly over time, as the program becomes more complex. For this reason,
thinking carefully in advance about how you want to model your data within your
application can pay very big dividends.

## Choosing Entities/Abstractions

One of the first challenges in modeling data is deciding what data to model.
Let's consider an app we want to make, called Senior Paws. Senior Paws is an app for dog sitters taking care of old dogs, where you can track the dog's information, like its name, favorite treat, medication, and its owners. What attributes are most important to include in our data model?

![image](data_modeling.png)


### Directions

Data Modeling Round 2! Take a look at each of the app descriptions below. For each description:
  1. Create a data model for the app by listing at least two relevant
entities/abstractions (e.g. Senior Paws app, above) that the app might use, and list properties that make sense for that use case. You *don't* have to list all of them.
  1. Create Javascript objects of those entities and assign what data type the _value_ of those properties should be
  1. Give an example of a relationship of the model. Keep in mind, not _everything_ has to be connected to _everything_.

### 1. Ultra E-mail App

This app provides easy access to all your e-mail service providers in one app. The app will let you select one of your email addresses and view your e-mails for that address.

```
//Write your answer here or in a separate js file.
email service
  has
    name
    email address
    pop/imap setting


User
  has 
    name
    acount email adresss
    user
      .name
      .password
_________________________
  var emailService  = {
    id: Int,
    name: String,
    email: String,
    pop: {
      server: String,
      username: String
    },
    imap: {
      server: String,
      username: String
    },
    emails: []

  }

  var user = {
    id: int,
    name String
    email: String,
    user: {
      name: String,
      password: String
    }
    emailService: []
  }
_________________________
  var office365 = {
    id: 123
    name: 'office365',
    email: 'somebusinessguy@owa.com'
    pop : {
      server: 'outlook.office365.com'
      username: 'somebusinessguy@owa.com'
    },
    email: [{email0},{email2},{email3},ect...]

  }

    var steve = {
    id: 1234,
    name: Steve
    email: stv@smrglrgy.com,
    user: {
      name: stvwndrfl,
      password: ""awdvgyuioo85dbu"
    }
    emailsService: [
      emailService : {},
      emailService: {}
    ]
  }

  
```

### 2. Radio on the Internet app

This app hosts a ton of radio stations, each featuring their own playlists of songs. The radio stations can be listed by genre or popularity.


```
//Write your answer here or in a separate js file.

station has
  -name
  -playlists
  -genere
  -popularty

playlist has
  -name
  -songs

_________________________
var station = {
  id: Int,
  name: String,
  genre: String,
  popularity: Int,
  playlists: []
}

var playlist = {
  name: String,
  songs: []
  songCount: Int
}
_________________________
var top200 = {
  id: 1234,
  name: "the top 200",
  genre: "Pop",
  popularity: .94,
  playlists: [
    'playlist1','playlist2'
  ]

}

var top20 = {
  name: top20,
  songs: [song1,song2,etc],
  songCount: 4
}
```

### 3. Rock Concert App

This app will be a tool for managing all of your favorite bands' concerts; it will keep track of their tour dates, ticket purchasing, and next recommended show.

```
Write your answer here or in a separate js file.
Band
  has
    -tourdate
    -locations

userAccount
  has 
    -recommended show
    -purchased tickets
tickets
  has
    -band
    -date location
    -ticketid
_________________________
const Band = {
  tourdates: [],
  locations: [],
  
}
const userAccount = {
    recommendedShow:  [], 
    purchasedTickets: []
}
const tickets = {
  band: String
  date: Int
  location: String
  ticketid: Int
}

_________________________
const SilverStein = {
  tourdates: [20071108072200,20071208072200,200801042200,etc],
  locations: ["SomeCity,Provence,Country",[...]]
  
}
const userAccount = {
    recommendedShow:  ["recShow1","recShow2",...], 
    purchasedTickets: [[ticket1],[ticket2],...]
}
const tickets = {
  band: Silverstein
  date: 20071208072200,
  location: "SomeCity,Provence,Country"
  ticketid: 200001
}
``` 

### 4. Coffee To-Go App

This app will allow customers to browse a list of coffeeshops nearby, order drinks off of their menu, add those drinks to a shopping cart, and save that cart as a past order once the purchase is complete.



### 5. Team Tracker App

This app shows you all the latest stats from your favorite sports teams. You can view individual player stats and full team stats.

```
Write your answer here or in a separate js file.
```


### Final Thoughts:

Q. When you were creating relationships between the models, what were some thoughts or questions you had to help guide a connection between them?

```
Write your answer here or in a separate js file.
```

### Reading and Videos for Tomorrow
Now that you've had some practice really thinking about the data design of an app, we're going to learn about MongoDB, a no-SQL database. Starting tomorrow, our Express apps will be talking to the Mongo database through Mongoose. Since we're covering a LOT of ground tomorrow, take some time to introduce yourself to concepts and lingo surrounding MongoDB and Mongoose. You will _not_ have to memorize the technical details here.

- [MongoDB's Ridiculously Cheery Promo video: 2mins video](https://www.youtube.com/watch?v=CvIr-2lMLsk)
- [The Good and Bad of MongoDB: 30mins video](https://www.youtube.com/watch?v=hWxnRi_WXtg)
- [What is Mongoose? 2 min Video](https://www.youtube.com/watch?v=swWRUvluSkE)
- [Official Mongoose Website](http://mongoosejs.com/index.html)
- [Official Mongoose Docs](http://mongoosejs.com/docs/index.html)

## Submitting Your Work

  When you're ready to submit your work,

  1. Add, commit, and push your code.
  2. Add your Github link to Schoology along with your name and you comfort level with the homework.
