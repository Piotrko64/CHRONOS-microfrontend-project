# <p align="center">CHRONOS - MicroFrontend project </p>

<p align="center">This Event Tracker application utilizes Single SPA to seamlessly integrate Angular 16, Angular 17, Vue, and React. It enables efficient event tracking with detailed management features and a visually appealing countdown timer for upcoming events. This project was built primarily to demonstrate how Microfrontend (single SPA) can be used when you want to use several frameworks while showing the advantages, disadvantages as well as challenges. This app isn't so complicated.
</p>
<div align="center">



<img src="https://github.com/user-attachments/assets/272b515f-27d5-4344-a659-0942e52fff7a" alt="SINGLE SPA" height="50" align="center" title="Single SPA"/>
<img src="https://user-images.githubusercontent.com/77500425/161312230-36d37ac5-8801-4313-a68c-c5695c429b70.png" alt="javascript" height="50" align="center" title="JS"/>
<img src="https://user-images.githubusercontent.com/77500425/161311954-e03613e7-54b2-4d1b-ac2e-559f8c1e9f2d.png" alt="typescript" height="50"  align="center" title="TS"/>
<img src="https://user-images.githubusercontent.com/77500425/161312615-f3961568-28bb-48fa-9d95-93ecd61337b3.png" alt="react"  height="50" align="center"/>
<img src="https://github.com/user-attachments/assets/8455e19e-1cfc-44c3-aa89-5ee670f4819f" alt="Angular-17"  height="50" align="center"/>
<img src="https://github.com/user-attachments/assets/fadb3c25-3df6-4d49-93fa-f65775d99a19" alt="Vue"  height="50" align="center"/>

<img src="https://github.com/user-attachments/assets/42b021a8-4bde-4b99-890d-8f1efdb5ef72" alt="Angular"  height="50" align="center"/>
</div>

![obraz](https://github.com/user-attachments/assets/ea64a54b-39f9-496d-ac08-887bbffd32ec)


## Installation
- Download files by **git clone _repository-name_**
- You need to install packages for every folder ( for example "cd countdown-screen" and next "npm i")
- Use **npm run start** for every project

## Screens and technologies

<p> <img src="https://github.com/user-attachments/assets/fadb3c25-3df6-4d49-93fa-f65775d99a19" alt="Vue"  height="50" align="center"/> Homepage - VueJS </p>
<p><img src="https://github.com/user-attachments/assets/42b021a8-4bde-4b99-890d-8f1efdb5ef72" alt="Angular"  height="50" align="center"/> Countdown screen (digital clock) - Angular 16</p>
<p> <img src="https://user-images.githubusercontent.com/77500425/161312615-f3961568-28bb-48fa-9d95-93ecd61337b3.png" alt="react"  height="50" align="center"/> Event List - React</p>
<p><img src="https://github.com/user-attachments/assets/8455e19e-1cfc-44c3-aa89-5ee670f4819f" alt="Angular-17"  height="50" align="center"/> Add Event - Angular 17</p>



## Some education content about Microfrontend!

### What is Microfrontend?
Microfrontend is an architectural approach where a user interface is decomposed into smaller, independently developed parts called microfrontends. Each microfrontend is typically developed by a separate team and may utilize different technologies. Single SPA, on the other hand, is a framework that facilitates the integration of these microfrontends into a single application, managing their lifecycle and enabling seamless transitions between them without page reloads.

### States in Microfrontend
You can read more about this on single-spa site: 
[https://single-spa.js.org/docs/faq/](https://single-spa.js.org/docs/faq/#how-can-i-share-application-state-between-applications)

Okay! But I also would like tell about this from me and my approach.
State managment in Microfrontend Architecture is... HARD! We are dealing with several different technologies! For my application I use Local Storage - this is enough in this case! Why? Because global state is needed mainly when we switches between screens. Hovewer, If we would like communicate between apps when several is in on screen on this same time We can use also JavaScript Event and dispatch Event. I once wrote about it on my profile on Polish linkedin (https://www.linkedin.com/posts/piotr-ko%C5%82odziejczyk_javascript-coding-webdev-activity-7162534812040343552-U4U9?utm_source=share&utm_medium=member_desktop)

![obraz](https://github.com/user-attachments/assets/a6039405-cc41-4575-9d5a-b2d39334f532)


### Routing and navigation

We can use anchor and function form singleSPA to navigation
![obraz](https://github.com/user-attachments/assets/a37b63b2-9110-4db7-9846-f8eab70acc28)

or navigate a little bit better programmatic
![obraz](https://github.com/user-attachments/assets/828e8596-000d-46a6-ba05-9a097f680a67)


#### Example routing via single SPA
![obraz](https://github.com/user-attachments/assets/f4495e21-6df0-4e05-b02b-98cfb9194cec)

## Why Use Microfrontends?

Microfrontends increase flexibility and scalability for large frontend applications. They enable independent team work, faster development, and easier maintenance by isolating changes to specific modules without affecting the entire application.
Teams can use different technologies for different microfrontends, allowing them to choose the best tools for their needs. Each microfrontend can be developed, tested, and deployed independently, simplifying maintenance and updates.

## Challenges and Disadvantages of Microfrontends

- **Complex Integration** Integrating multiple microfrontends can be complex, especially in managing state, navigation, and communication between components.
- **UI/UX Consistency** Maintaining a consistent user interface and experience can be challenging with different teams developing separate parts of the application.
- **Performance Issues** Each microfrontend may bring its dependencies and resources, potentially leading to performance issues like longer load times.



## More Screenshots
### Adding event
![obraz](https://github.com/user-attachments/assets/88233a46-e9a1-47f7-be22-0816ef8de94e)

### Countdown screen
![obraz](https://github.com/user-attachments/assets/4c109b88-ca7b-4559-ad28-e3d0afbc46f6)





## Special thanks for my friends:

- Kuba Kuśmierczyk (https://github.com/bBravee) - creator of homepage (vueJS) from my design in Figma;
- Kuba Wrona (https://github.com/Wronqa) - creator of add event screen (angular 17);
- Bartłomie Wydrzycki (https://github.com/Wydreq) - creator of event list (REACT)


