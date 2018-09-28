---
layout: post
title: Volunteer Robot
<<<<<<< HEAD
=======
description: Overview of Implemented Features
>>>>>>> 559b194fd53caab99701e6523b717fca9398da53
date: 2018-09-12
---

Over the course of summer 2018, I forked and developed a volunteer scheduling database application. The [README ](https://github.com/iamkahvi/volunteers) I created builds on the [forked repositories README](https://github.com/playasoft/volunteers) and describes usage, features and installation of the application.

This post exists to specify which features I developed alone.

<<<<<<< HEAD
# Volunteer Robot Developed Features

=======
>>>>>>> 559b194fd53caab99701e6523b717fca9398da53
## Table of Content
- [UI Design](#ui-design)
	- Dashboard
	- Event Page
<<<<<<< HEAD
	- Notification email
=======
>>>>>>> 559b194fd53caab99701e6523b717fca9398da53
- [Backend Features](#backend-features)
	- Email Notifications
	- Hide Empty Days Feature
	- Change to Reminder timing through .ENV laravel doc
	- Filter by week
	- CSV export for users
	- Registering users

<<<<<<< HEAD
## UI Design
### Event Page

![Event Comparison](/assets/EventCompare.png)

### Dashboard

{% include dashboard.html %}

### Notification email

## Backend Features
- Email Notifications
=======
<hr>

## UI Design

### Event Page

I added a legend to the Event page. I changed the text formatting to make the page more legible.
I changed the date format to make the page more legible.

![Compare Event](/assets/EventCompare.png)

### Dashboard

Using bootstrap list items element, I made the dashboard more legible.

![Compare Dashboard](/assets/DashboardCompare.png)

<hr>

## Backend Features

### Email Notifications

On the advice of the original developer, my plan for developing the email notification feature was:

1. Create a console command which loops through the a table for any shifts starting within the next "hour"
2. If a volunteer has signed up for that slot, send them a notification
3. Add value to SQL table to prevent further notifications
4. Add the command to the Laravel cron so it runs periodically (every 5 minutes? 15 minutes?)

This approach was somewhat inefficient given the Laravel cron would be running continuously when it wouldn't need to. Scheduling a task immediately when a user signs up instead of iterating through the table continuously would be a better approach. Ultimately I chose to implement the feature as a simple solution using the existing schema as opposed to changing the schema and the controller logic.

To work through the logic of when to send reminders, I create variables for when the shift starts and when to remind the user for that specific
shift. I do this by creating two [Carbon](https://carbon.nesbot.com/docs/) dates and add a user-designated amount of hours to the second variable.
>>>>>>> 559b194fd53caab99701e6523b717fca9398da53

```php
<?php

// Cycle through all the slots
foreach($shifts as $shift)
{
	$startDate = new Carbon(date('Y-m-d H:i:s', strtotime("$shift->start_date $shift->start_time")));

	$remindDate = new Carbon(date('Y-m-d H:i:s', strtotime("$shift->start_date $shift->start_time")));

	$now = Carbon::now();

	$remindDate->subHours(env('REMIND_HOURS'));

<<<<<<< HEAD
	//echo date('Y-m-d H:i:s', strtotime($shift->start_time) - 84600).' is less than or equal to '.date('Y-m-d H:i:s').PHP_EOL;

	// Find all the shifts that start within the next day
	if($remindDate <= $now and $startDate > $now)
	{

		echo $remindDate.' is less than or equal to '.$now.PHP_EOL;

		// Find all the shifts that are empty
		if(empty($shift->user_id))
		{
				echo 'No one has signed up for it, so you should send reminders to the admins'.PHP_EOL;

				// Find all admin users
				$admins = UserRole::get()->where('role_id', 1);

				if($shift->isNotified == 'No')
				{

						// Find all admin users
						foreach ($admins as $admin)
						{
							//$user = User::get()->where('id', $admin->user_id)->first();

							//$user->notify(new shiftStarting($shift, $user));
						}

				} else
				{
					echo "You already did lol".PHP_EOL;
				}

				// Updating Database isNotified value
				DB::table('slots')
					->where('id', $shift->id)
					->update(['isNotified' => 'Yes']);

		}

		// Find all the shifts that are full
		else
		{
			echo $shift->getDepartmentAttribute()->description.PHP_EOL;

			$users = User::get();

			// Cycle through users
			foreach ($users as $user)
			{

				// Find user that is registered for this shift
				if ($user->id == $shift->user_id) {

					echo 'You should remind '.$user->email.' that they have a shift starting soon'.PHP_EOL;

					// Updating Database isNotified value
					DB::table('slots')
						->where('id', $shift->id)
						->update(['isNotified' => 'Yes']);

					// Notify user of upcoming shift
					if($shift->isNotified == 'No')
					{
						$user->notify(new shiftStarting($shift, $user));
					} else
					{
						echo "You already did lol".PHP_EOL;
					}

				}
			}

		}
	}
	else
	{
		echo 'Shift does not start within the designated period'.PHP_EOL;
	}

}

```
- Hide Empty Days Feature
- Change to Reminder timing through .ENV laravel doc
- Filter by week
- CSV export for users
- Registering users
=======
```
I find the shift starting within the given reminder period using the variables.

```php
<?php
if($remindDate <= $now and $startDate > $now)
```

Then, I cycle through all users to find who is registered for the shift in question.

```php
<?php
foreach ($users as $user)
	{
		// Find user that is registered for this shift
		if ($user->id == $shift->user_id) {
```
Then I notify the user of the shift. I used the [MailGun api](https://www.mailgun.com/email-api) with [Laravel](https://laravel.com/docs/5.2/mail) to send the emails.

```php
<?php			
// Notify user of upcoming shift
if($shift->isNotified == 'No')
{
	$user->notify(new shiftStarting($shift, $user));
} else
```

In order to prevent the user from getting continuously notified, I created a column in the shifts table to track notification status.

```php
<?php

// Update isNotified value in SQL database
DB::table('slots')
	->where('id', $shift->id)
	->update(['isNotified' => 'Yes']);

```
<br>

### Hide Empty Days Feature

My strategy was to cycle through each day that would be displayed on the event page and check if the day had a shift.
Fortunately, this check was relatively simple after looking into different SQL queries.

```php
<?php
// Pluck all of the shift IDs for this event and check the if any in the schedule start today
if(Schedule::whereIn('shift_id', $shifts)->where('dates', 'LIKE', "%".$date->format('Y-m-d')."%")->get()->isEmpty())
{
// Continue onto the next day
$date->addDay();
continue;
```
<br>

### Filter by week

Fortunately, I've had previous experience with Javascript in University so working out the logic for this feature was trivial.

```javascript
// Hide all the days
$('.days .day').addClass('hidden');

// Convert date to Moment format
let m = moment();

m = moment(date.toString());

// Show this one

// Loop through seven days
for(var i = 0; i < 7; i++)
{
    $('.days .day[data-date="' + m.format('Y-MM-DD') + '"]').removeClass('hidden');
    $(window).trigger('resize');
    m.add(1, 'days');
}
```
Instead of the logic, the most challenging part of implementing this feature was installing the Moment package on the active server. Without this package, I wasn't able to manipulate date strings easily.
Since the server ran Ubuntu, the package wouldn't install. After some Googling, one line of code in the header.blade.php solved all my problems.

```html
 <script src="https://cdn.jsdelivr.net/npm/moment@2.22.2/moment.min.js"></script>
```
<br>

### Change to Reminder timing through .ENV laravel doc
### CSV export for users
### Registering users
>>>>>>> 559b194fd53caab99701e6523b717fca9398da53
