This was either the most fun I've had so far or...

The beginning was hard. Had no idea where to start, first day I did almost nothing. Just some basic UI.
Eventually I started to figure it out and when I finally got my array, book constructor and form to work, it was
smooth sailing for a while. Little problems here and there and googling about forms and taking their value in JavaScript but nothing too cryptic.

Noticed that EventListeners, DOM elements (and rest of UI things) are coming fairly naturally at this point. At least compared to before. That's nice.
Added a small fade in -animation to the cards!
I think the UI is simple and elegant.

First major obstacle was the delete button (and later again). I just had hard time wrapping my head around data-attributes, even after hours of
googling. It always removed the first card. Eventually I accidentally saw in Discord how someone else had used it and it immediately clicked in my head. So thank you stranger.
I had originally checkbox on the book cards, but I just couldn't get it work. Maybe it's for the better because I had to improvise a toggle button
for the job, and I really like how it turned out. Brings a little color.

Minor issues with updating new read status to the object. Ended up using IF and toggling between to different CSS classes.

LocalStorage was hard, as to be expected. I got it to work (without functions mind you), but it raised problems with toggling read status and especially with
the delete buttons. Two features that earlier worked. Lot of tweaking and somehow in the end I got it all together. It was purely trial and error.
Looking forward to actually learning about JSON and stuff.

Tried to clean the code a little bit in the end and wrap some of the features in proper functions. I should probably break my projects down to functions more
but it just feels unnatural sometimes.

I had a lot more to say but I can't remember anymore. This project took about 4-5 days (to be honest, first two I didn't accomplish much due to stress and
other obligations) and it seems I should start writing README before the whole thing is ready.

...EDIT: Getting this work when localStorage is still empty was a struggle..

...EDIT2: added class to replace Book constructor. It was simple but couldn't do it for other functions. Not quite sure if I'm even supposed to.
Went to see other people's projects and seems most of them did it only for the Book constructor.

---

As I progressed further in the Odin Project, I came back to this project. As an exercise, I'll be implementing Firebase to this project.
I will probably also use Firebase hosting.
This is gonna be hard.

---

Hosting was fairly simple step.
Implementing firebase and firestore itself wasn't. It's probably because this project is old (hence the code is a mess!). But I had to resort to
using CDN way of importing.

Following tutorials I managed to change the localStorage into Firestore and render books based on that. I had little problems along the way (everything rendered
initially twice and fixed itself immediately when refreshing page) but I overcame those. After figuring out that, updating the delete buttons to work with Firestore
was a breeze.
Updating read status was also as easy as the delete function.

Overall once I got past the initial problems, Firebase turned out to be fairly simple and definetly seems to be useful!
Looking forward to use it in the future. Hopefully implementing it will be easier when it's done right from the start.
