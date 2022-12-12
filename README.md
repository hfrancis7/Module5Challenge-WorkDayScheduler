# Module5Challenge-WorkDayScheduler
This is a Workday Scheduler that allows a user to write and save events that are happening throughout the current day. <br>

This challenge involved added functionality to existing code so that this scheduler could save and load information for each hour of the scheduler to and from local storage. <br>

## Description
The user can enter text in any of the text boxes to indicate an event at a time of day. <br>

The gray boxes represent the past, the red box represents the present, and the green boxes represent the future. This is dependent on the current hour of the day. <br>

The events are saved in local storage and will displayed in their respective text boxes even when the page refreshes. <br>



## Link
https://hfrancis7.github.io/Module5Challenge-WorkDayScheduler/

## Installation
N/A

## Usage
The user can enter in corresponding text and then click the save button so that it remains saved even upon website refresh.
[Screenshot Here]


## User Story
```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria
```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
