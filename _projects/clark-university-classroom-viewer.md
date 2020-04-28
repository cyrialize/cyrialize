---
layout: post
date: 2017-05-11
---
I had been working as an Academic Technical Assistant at [Clark University's Academic Technology Services](https://www.clarku.edu/offices/its/about-its/?open-accordion=ats) since freshman year. From freshman year to junior year my job consisted of creating written and video documentation on software we provided support for, as well as assisting students and professors with that software. 

__Starting my senior year I took on a programming role where I completely refactored and rewrote the Clark University Classroom Viewer using Ruby on Rails__. You can view the application [here](https://apps.clarku.edu/classrooms/), and you can view the about page [here](https://apps.clarku.edu/classrooms/pages/about_application). 

*I performed the reimplementation in 2017. The application was reworked again in 2019. The screenshots within this post reflect the previous version of the application.*

## Application Description
The application is intended to be used by faculty and students who need to find a room that fits their needs. When you go to the application you'll be provided with a list of buildings. 

Here is the front facing page.

{% include img-modal.html 
   img_id="classrooms_screenshot"
   modal_id="classrooms_screenshot_modal"
   src="../../assets/img/projects/classrooms_screenshot.png"
   alt="This is the front facing page"
%}

Each building has several rooms and each room has a section for tools, functionalities, software, and resources (i.e. metadata). Example tools include "DVD Player" or "Wifi", example functionalities include "Show DVD Content" or "Show VHS Content", example software include "Windows 7" or "7-Zip", and example resources include either PDFs that instruct the user on how to use something in the room, like the projector, or links that provide more information.

And here is a screenshot of a single classroom, BP 326.
{% include img-modal.html
   img_id="classrooms_single_page"
   modal_id="classrooms_single_page_modal"
   src="../../assets/img/projects/classrooms_single_page.png"
   alt="This is a view of a single classroom"
%}


# My Improvements 
__I completely rewrote and refactored the application from ColdFusion to Ruby on Rails.__

I improved upon the application by:
- Providing an administrative interface for the metadata of rooms
- Making the application fully response
- Updating the look and feel to match the updated Clark University website

It was made with:
- <a href="http://rubyonrails.org/"> Ruby on Rails </a>
- Clark University Gem
  - This is a custom made gem for all Clark University web applications, it provides styles 
    and helper classes for university web apps.
- <a href="http://lesscss.org/"> LESS </a>
- <a href="https://github.com/carrierwaveuploader/carrierwave"> Carrierwave </a>
	- For image and file upload 
- <a href="https://github.com/nathanvda/cocoon"> Cocoon </a> 
  - For nested forms on the administrative side, it allowed multiple images to be uploaded at once 
- <a href="https://github.com/activerecord-hackery/ransack"> Ransack </a> 
  - For searching rooms based upon name, tools, functionality, software, or resources

# Why the Reimplementation? 
The old application worked well. An administrator was able to create a new building or a new room, and assign
metadata to that room. That being said, the old application had two major problems that required a rework.

## A Flawed Admin Interface
As mentioned above, an administrator could create a building and a room - but an administrator could not 
create a new metadata through an interface. Instead members of the Academic Technology Services team had to go into the database and manually add rows to the metadata tables.

I created an interface to make adding metadata easier, and to prevent mistakes that come with entering data in manually.

## Moving from ColdFusion to Rails 
The old application and the old Clark University website was made in Cold Fusion.

Clark University began moving away from ColdFusion by updating their website and making all new web applications in Ruby on Rails. They then began transitioning all of their web applications to Ruby on Rails and it was then they reached out to the ATS team to work on the Classroom Viewer Application.