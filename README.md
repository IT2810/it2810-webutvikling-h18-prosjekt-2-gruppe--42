The project is made in with node v8.11.3 and React v5.6.0. It might not work with previous versions.
```
 git clone repo
 cd it2810-webutvikling-h18-prosjekt-2-gruppe--42/gruppe42
 npm install
 npm start
```



# Documentation

## Javascript

### Structure
We decided to follow a normal React folder structure by having a our important CSS and javascript file, App.js and App.css, in the src folder. We also have a Components folder inside the src folder where we have folders for each of the different components. Inside these individual folders we have the component itself and a CSS file for component specific CSS. This allows us to easily navigate and find files in the project. We should perhaps have kept all of the components and css in the Components folder.
We complied the instructions in which we were instructed to use ajax for loading of the images and text. We decided to use the fetch function instead of a library as learning the basics and the limitations of of said basics is a good way of learning. This ended up with a lot of head scratching until we found out that we needed to put the resources in the Public folder such that they could be fetched.

### Callback and state
As we were not allowed to use any of the popular state management architectures such as Flux or Redux we decided to store all of the state in the central file, App.js. Here we have all of the internal state, such as the categories and its files, and the onChange functions which change the state of App.js. To fix the problem with state changing through the child components to App.js we used these onChange functions as callback functions. These functions are sent down to the child components and are can be called in these child components. This calls the function in App.js and allows us to change the state of App.js by calling functions supplied to its child components.


## CSS and files
### CSS-grid og Flexbox
Both CSS-grid and Flexbox were used as it is two solutions that complement each other well. The solution makes it easier to specify areas of the userinterface relative to each other. For example when using a computer we wished to place the image and text next to each other, categories on the left covering two rows, header on top and combinations under the header, but to the right of the categories. By using the grid, this was easy to make. Since Flexbox is used for one-dimensional layout (unlike the grid which is two-dimensional), it was used in the header to easy make a horizontal line with text. 
	
### Media queries
To make the website responsive, we used mediea queries. With the @media tag we made a max width of 480px to add specific css for mobile use. The biggest differenses here from desktop is that the grid now have two columns instead of three. The image and text is on top of each other, so that the user can scroll down instead to the sides. We also made the grid-items margin and gap smaller to utilize the entire screen. 

### Files and Resources
The files used in this project were all licensed for free use. Following resources were collected: 
* SVG-pictures in .svg handpicked from [https://svgsilh.com/](https://svgsilh.com/). See license in public/Resources/Images/License.txt.  
* Sound files in .mp3 from [https://freesound.org/](https://freesound.org/). See license in public/Resources/Sound/License.txt.  
* Text-files in .json from [https://www.poemsforfree.com/](https://www.poemsforfree.com/). See license in public/Resources/Text/License.txt.

## Work methodology
### Group work
In general we met as a group a few times each week so that we could get an overview of what had been done and what needed to be done on the project. Group meetings also allowed us to plan ahead what needed to be done before the next meeting so that we could be on track to finish the project within the specified time frame. 
The group meetings also gave us an opportunity to ask the other group members about any technical or programming problems that we needed help with. These meetings also allowed us to conduct pair programming, which is an effective software development practice, where one group member could code and the other group members could review the code and give input along the way.

Ultimately this methodology proved useful as it gave each group member a good starting point as to what had to be done individually before the next meeting, and any eventual problems were cleared up during the following group meeting. This allowed us to be well on track to deliver a project according to the requirements within the timeframe specified to us.
Workflow
We used Git as our version control system. Using GitHub was mandatory for the course, and was used to track code changes and feature branches as well as issues related to new features and code improvements.

### Git

On GitHub, issues were created to allow us to see what features still needed to be implemented or if there were any bugs or issues with existing code that needed to be fixed.
Overall this presented an effective method of allowing us to track progress throughout the project as we were able to get an overview of what had been done, and what needed to be done.

In addition commits were tagged with issues, so that it would be easier to go back and see what work had been done or what issue had been fixed with each commit.

In general branches were used as a way to facilitate group members working in different features at the same time. Comprehensive features were developed in their own branch, and then merged into the master branch when it was verified that everything was working according to the specification supplied at the beginning of the project. The use of pull requests allowed other members of the group to look at the code and verify that it was working correctly before it was merged into the master branch.

## Testing (@channel)
The goal of testing were making the website work on devices that the team had. These devices were primarly android phones by HUAWEI and SAMSUNG Galaxy 7 and 8. We also tested the website on Chrome and Edge. Since none of us had an iOS-running phone or computer, this was not prioritized in such a small project. By using inspection-mode we tested the webside on tablet-size. The main differences between desktop- and mobile-mode were number of columns in the grid. On the desktop there is three columns, to make the image and text on one line. On mobile there is only two columns to make the user scroll down to see image and text on top of each other. The following is what we found during testing: 

Computer
* Chrome/Edge: The body is too big, you have to scroll to the side.
Tablet
* Vertical: Buttons and div for categories is reaching to far to the right. 
* Horizontal: Found that gap between grid-items were a bit off on different items. This also applied to desktop-size.  
	
Mobile
* Had to zoom out to see the whole picture. Smaller gaps and margin is required. Category-buttons are way to big in width. 
	
Summary of testing: All functions worked well. The only things to fix were small css-changes. This was mostly aligning images and buttons better on the screen and make text more readable. We think the responsive design is working well for the website to be used on the tested devices.


* At du i dokumentasjonen skal kunne beskrive hvordan grensesnittet er planlagt å oppføre seg /se ut på forskjellige skjermstørrelser/enheter og beskriver hvordan du har testet for å avdekke mulig feil eller avvikende oppførsel. 
* Skriv det inn i README.md fila sammen med resten av dokumentasjonen. Beskriv målsettingen for testing, hvordan det ble utført og omfang (typer enheter etc).  Dette er en litt uformell brukertesting og målet er jo at dere skal bli kjent med responsiv design. Hvis de som evaluerer oppdager feil så er det jo greit hvis dere f.eks. kan dokumentere at dere ikke har testet for denne enheten.
