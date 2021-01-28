# Daily_Planner

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```


## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```
## Resources Used
momentjs.com

##
When Opened: 
-Displays today's date at top
-Presents time slots for user's work day

When slot is clicked:
-User can input text data & save to local storage

When save button is clicked:
-Data is saved to local storage for the day until/unlsess deleted or altered by user.

When page is refreshed: 
-Content user input remains in time slot (saved event persists)

## Still having issues with:
-Color Coordination: past hours are the only ones that correspond w the color given (gray).Loc