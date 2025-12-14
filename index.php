<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Web Page</title>
        <link rel="stylesheet" href="index.css" />
        <script src="index.js?v=2" defer></script> 
        <!-- really annoying cache bug so website still updates from server on reload
            Could also hit Ctrl+Shift+R for a hard reload of the browser to fix caching issue -->
    </head>
    <body>

        <?php
            
        
        
        ?>

        <div class="calendar">
            <div id="calendarHeader">
                <button id="prevMonth" onclick="prevMonth()">&#8249;</button>
                <h1 class="monthOfYear">HI</h1>
                <button id="nextMonth" onclick="nextMonth()">&#8250;</button>
            </div>
            <div class="weekdayRowDiv">
                <p class="weekday">Sunday</p>
                <p class="weekday">Monday</p>
                <p class="weekday">Tuesday</p>
                <p class="weekday">Wednesday</p>
                <p class="weekday">Thursday</p>
                <p class="weekday">Friday</p>
                <p class="weekday">Saturday</p>
            </div>
            <div class="tileGroup">
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
                <div class="tile">
                    <div class="tileItems">
                    </div>
                </div>
            </div>
        </div>



        <div id="sidePanel">
            <h1 id="sidePanelTitle">HI</h1>
            <button id="addEvent" onclick="showForm()">+</button>
            <button id="closePanel" onclick="closeSidePanel()">x</button>
        </div>


        <div id="eventFormWrapper">
            <label for="addEventType" id="eventTypeLabel"></label>
            <select id="addEventType" name="addEventType">
                <option value="task" id="selectTask">Task</option>
                <option value="alarm" id="selectAlarm">Alarm</option>
            </select>

            <div class="taskForm">
                <h2 id="addEventTitle">Add Task</h2>
                <input type="text" id="eventName" name="eventName" placeholder="Event Name"><br><br>
                <div><p>Event start time</p><input type="time" id="eventStartTime" name="eventStartTime"></div><br><br>
                <div><p>Event end time</p><input type="time" id="eventEndTime" name="eventEndTime"></div><br><br>
            </div>

            <div class="taskForm">
                <h2 id="addEventTitle">Add Alarm</h2>
                <input type="text" id="alarmName" name="alarmName" placeholder="Alarm Name"><br><br>
                <div><p>Alarm start time</p><input type="time" id="alarmStartTime" name="alarmStartTime"></div><br><br>
                <div><p>Alarm end time</p><input type="time" id="alarmEndTime" name="alarmEndTime"></div><br><br>
            </div>

            <div id="formButtons">
                <button id="saveEvent">Save Event</button>
                <button id="saveAlarm">Save Alarm</button>
                <button id="closeForm">Close</button>
            </div>
        </div>




        
    </body>
</html>