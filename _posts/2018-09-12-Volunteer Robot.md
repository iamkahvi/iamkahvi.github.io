---
layout: post
title: Volunteer Robot
date: 2018-09-12
---

Over the course of summer 2018, I forked and developed a volunteer scheduling database application. The [README ](https://github.com/iamkahvi/volunteers) I created builds on the [forked repositories README](https://github.com/playasoft/volunteers) and describes usage, features and installation of the application.

This post exists to specify which features I developed alone.

# Volunteer Robot Developed Features

## Table of Content
- [UI Design](#ui-design)
	- Dashboard
	- Event Page
	- Notification email
- [Backend Features](#backend-features)
	- Email Notifications
	- Hide Empty Days Feature
	- Change to Reminder timing through .ENV laravel doc
	- Filter by week
	- CSV export for users
	- Registering users

## UI Design
### Event Page

![Event Comparison](/assets/EventCompare.png)

### Dashboard

{% include dashboard.html %}

### Notification email

## Backend Features
- Email Notifications

```php
<?php

// Cycle through all the slots
foreach($shifts as $shift)
{
	$startDate = new Carbon(date('Y-m-d H:i:s', strtotime("$shift->start_date $shift->start_time")));

	$remindDate = new Carbon(date('Y-m-d H:i:s', strtotime("$shift->start_date $shift->start_time")));

	$now = Carbon::now();

	$remindDate->subHours(env('REMIND_HOURS'));

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
