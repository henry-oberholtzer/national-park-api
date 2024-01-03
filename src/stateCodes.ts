import { StateCode } from "./types";

export const stateCodes: StateCode = {
    AL: "Alabama",
    AK: "Alaska",
    AZ: "Arizona",
    AR: "Arkansas",
    CA: "California",
    CO: "Colorado",
    CT: "Connecticut",
    DE: "Delaware",
    DC: "District of Columbia",
    FL: "Florida",
    GA: "Georgia",
    HI: "Hawaii",
    ID: "Idaho",
    IL: "Illinois",
    IN: "Indiana",
    IA: "Iowa",
    KS: "Kansas",
    KY: "Kentucky",
    LA: "Louisiana",
    ME: "Maine",
    MD: "Maryland",
    MA: "Massachusetts",
    MI: "Michigan",
    MN: "Minnesota",
    MS: "Mississippi",
    MO: "Missouri",
    MT: "Montana",
    NE: "Nebraska",
    NV: "Nevada",
    NH: "New Hampshire",
    NJ: "New Jersey",
    NM: "New Mexico",
    NY: "New York",
    NC: "North Carolina",
    ND: "North Dakota",
    OH: "Ohio",
    OK: "Oklahoma",
    OR: "Oregon",
    PA: "Pennsylvania",
    PR: "Puerto Rico",
    RI: "Rhode Island",
    SC: "South Carolina",
    SD: "South Dakota",
    TN: "Tennessee",
    TX: "Texas",
    UT: "Utah",
    VT: "Vermont",
    VA: "Virginia",
    VI: "Virgin Islands",
    WA: "Washington",
    WV: "West Virginia",
    WI: "Wisconsin",
    WY: "Wyoming"
};

export const parkData =
{
    "activities": [
        {
            "id": "B33DC9B6-0B7D-4322-BAD7-A13A34C584A3",
            "name": "Guided Tours"
        }
    ],
    "addresses": [
        {
            "line1": "2 Officers Row",
            "line2": "Yellowstone National Park Headquarters",
            "line3": "",
            "city": "Yellowstone National Park",
            "stateCode": "WY",
            "countryCode": "US",
            "provinceTerritoryCode": "",
            "postalCode": "82190",
            "type": "Physical"
        },
        {
            "line1": "P.O. Box 168",
            "line2": "",
            "line3": "",
            "city": "Yellowstone National Park",
            "stateCode": "WY",
            "countryCode": "US",
            "provinceTerritoryCode": "",
            "postalCode": "82190-0168",
            "type": "Mailing"
        }
    ],
    "contacts": [
        {
            "phoneNumbers": [
                {
                    "phoneNumber": "3073447381",
                    "description": "",
                    "extension": "",
                    "type": "Voice"
                },
                {
                    "phoneNumber": "3073442014",
                    "description": "",
                    "extension": "",
                    "type": "Fax"
                },
                {
                    "phoneNumber": "3073442386",
                    "description": "",
                    "extension": "",
                    "type": "TTY"
                }
            ],
            "emailAddresses": [
                {
                    "emailAddress": "yell_visitor_services@nps.gov",
                    "description": ""
                }
            ]
        }
    ],
    "description": "Visit Yellowstone and experience the world's first national park. Marvel at a volcano's hidden power rising up in colorful hot springs, mudpots, and geysers. Explore mountains, forests, and lakes to watch wildlife and witness the drama of the natural world unfold. Discover the history that led to the conservation of our national treasures 'for the benefit and enjoyment of the people.'",
    "designation": "National Park",
    "directionsInfo": "Yellowstone National Park covers nearly 3,500 square miles in the northwest corner of Wyoming (3% of the park is in Montana and 1% is in Idaho). Yellowstone has five entrance stations, and several are closed to regular vehicles during winter. It takes many hours to drive between these entrances, so be sure to check the status of roads at the entrance you intend to use while planning your trip and before you arrive.",
    "directionsUrl": "https://www.nps.gov/yell/planyourvisit/directions.htm",
    "entranceFees": [
        {
            "cost": 30,
            "description": "7-day pass for Yellowstone National Park",
            "title": "Yellowstone (private, non-commercial vehicle)"
        },
        {
            "cost": 25,
            "description": "7-day pass for Yellowstone National Park. Snowmobile entry limited to guided tours or permit holders.",
            "title": "Yellowstone (motorcycle or snowmobile)"
        }
    ],
    "entrancePasses": [
        {
            "cost": 60,
            "description": "Annual pass providing free entrance to Yellowstone National Park for one year; valid through the month of purchase. Winter use: On a snowmobile, admits the signers and children (residing in the same household under the age of 21). In a snowcoach or shuttle, it admits the signers and up to three additional persons (16 and older) for a total of four people.",
            "title": "Yellowstone National Park Annual Pass"
        }
    ],
    "fullName": "Yellowstone National Park",
    "id": "F58C6D24-8D10-4573-9826-65D42B8B83AD",
    "images": [
        {
            "credit": "NPS/Jim Peaco",
            "altText": "Crowd watching Aurum Geyser erupt",
            "title": "Aurum Geyser",
            "id": 1789,
            "caption": "Aurum Geyser Erupting",
            "url": "https://www.nps.gov/common/uploads/structured_data/3C7D2FBB-1DD8-B71B-0BED99731011CFCE.jpg"
        },
        {
            "credit": "NPS/Neal Herbert",
            "altText": "Photo of bison in Lamar Valley",
            "title": "Bison in Lamar Valley",
            "id": 1792,
            "caption": "Bison in Lamar Valley",
            "url": "https://www.nps.gov/common/uploads/structured_data/3C7D34E6-1DD8-B71B-0BBB1C0F478318E2.jpg"
        }
    ],
    "latLong": "lat:44.59824417, long:-110.5471695",
    "name": "Yellowstone",
    "operatingHours": [
        {
            "name": "All Park Hours",
            "description": "Yellowstone is open daily, year-round, although activities and services are limited at night and certain times of year. The park has five entrance stations, but not all entrance stations are open year-round. Make sure to carefully read about access at each station at different times of year. And remember, all dates are weather dependent!\n\nPlease note that camping is possible only in designated campgrounds.",
            "standardHours": [
                {
                    "sunday": "All Day",
                    "monday": "All Day",
                    "tuesday": "All Day",
                    "wednesday": "All Day",
                    "thursday": "All Day",
                    "friday": "All Day",
                    "saturday": "All Day"
                }
            ],
            "exceptions": [
                {
                    "name": "Thanksgiving Day",
                    "startDate": "{ts '2015-11-26 00:00:00'}",
                    "endDate": "{ts '2015-11-26 00:00:00'}",
                    "exceptionHours": [
                        {
                            "sunday": "Closed",
                            "monday": "Closed",
                            "tuesday": "Closed",
                            "wednesday": "Closed",
                            "thursday": "Closed",
                            "friday": "Closed",
                            "saturday": "Closed"
                        }
                    ]
                },
                {
                    "name": "Christmas Day",
                    "startDate": "{ts '2015-12-25 00:00:00'}",
                    "endDate": "{ts '2015-12-25 00:00:00'}",
                    "exceptionHours": [
                        {
                            "sunday": "Closed",
                            "monday": "Closed",
                            "tuesday": "Closed",
                            "wednesday": "Closed",
                            "thursday": "Closed",
                            "friday": "Closed",
                            "saturday": "Closed"
                        }
                    ]
                }
            ]
        },
        {
            "name": "West Entrance",
            "description": "Adjacent to the town of West Yellowstone, MT, the West Entrance is usually open (weather dependent) to wheeled vehicles from the third Friday in April through early November, and to tracked-oversnow (snowmobiles and snowcoaches) vehicles from December 15 to March 15.",
            "standardHours": [
                {
                    "sunday": "Closed",
                    "monday": "Closed",
                    "tuesday": "Closed",
                    "wednesday": "Closed",
                    "thursday": "Closed",
                    "friday": "Closed",
                    "saturday": "Closed"
                }
            ],
            "exceptions": null
        }
    ],
    "parkCode": "yell",
    "relevanceScore": 1,
    "states": "ID,MT,WY",
    "topics": [
        {
            "id": "B912363F-771C-4098-BA3A-938DF38A9D7E",
            "name": "Aviation"
        }
    ],
    "url": "https://www.nps.gov/yell/index.htm",
    "weatherInfo": "Yellowstone's weather can vary quite a bit, even in a single day. In the summer, daytime highs can exceed 70F (25C), only to drop 20 or more degrees when a thunderstorm rolls through. It can snow during any month of the year, and winter lows frequently drop below zero, especially at night. Bring a range of clothing options, including a warm jacket and rain gear, even in the summer."
}

export const thingsData =
{
    "location": "Northeast Area",
    "seasonDescription": "",
    "accessibilityInformation": "<p>This skier-tracked easy trail follows a fairly flat old road after crossing a narrow bridge over Soda Butte Creek at the trailhead. The trail elevation gain/loss is 132 feet. Service dogs allowed with backcountry access permit.</p>",
    "longitude": "",
    "geometryPoiId": "8793be28-0d54-493f-8556-877e7ecbe937",
    "relatedParks": [
        {
            "states": "ID,MT,WY",
            "fullName": "Yellowstone National Park",
            "url": "https://www.nps.gov/yell/index.htm",
            "parkCode": "yell",
            "designation": "National Park",
            "name": "Yellowstone"
        }
    ],
    "isReservationRequired": "false",
    "ageDescription": "",
    "url": "https://www.nps.gov/thingstodo/yell-bannock-ski-trail.htm",
    "petsDescription": "Qualified service animals are welcome throughout the park and in all park facilities. However, they must be leashed and under your control at all times. This trail requires a backcountry access pass for service animals.<br />\n<br />\n<br />\n ",
    "timeOfDayDescription": "",
    "images": [
        {
            "credit": "",
            "crops": [
                {
                    "aspectratio": "3",
                    "url": "https://www.nps.gov/common/uploads/cropped_image/primary/20970C88-BB81-37F7-5FB606A6D4A87D9B.jpeg"
                },
                {
                    "aspectratio": "1",
                    "url": "https://www.nps.gov/common/uploads/cropped_image/secondary/20970C88-BB81-37F7-5FB606A6D4A87D9B.jpeg"
                }
            ],
            "altText": "The Bannock Trail is a mostly flat through mature forest.",
            "title": "",
            "caption": "",
            "url": "https://www.nps.gov/common/uploads/cropped_image/20970C88-BB81-37F7-5FB606A6D4A87D9B.jpeg"
        }
    ],
    "feeDescription": "",
    "id": "8B175753-D37B-4DD5-BF96-00383F7BB46C",
    "age": "",
    "relatedOrganizations": [],
    "arePetsPermittedWithRestrictions": "false",
    "activities": [
        {
            "id": "F9B1D433-6B86-4804-AED7-B50A519A3B7C",
            "name": "Skiing"
        }
    ],
    "activityDescription": "Easiest",
    "locationDescription": "The trail begins at Warm Creek picnic area and ends in Silver Gate, Montana.",
    "doFeesApply": "false",
    "longDescription": "<p>The Bannock Ski Trail is a 2 mile (3.2 km) easy ski that follows the old road bed that once used to supply the mining town of Cooke City, Montana. Begin at Warm Creek picnic area, one mile west of the Northeast Entrance. This trail takes its name from the Bannock band of the Shoshone, who used this route to reach the buffalo grounds of the Great Plains. After crossing Soda Butte Creek, the terrain is mostly flat and the trail traverses open meadows and mixed conifer forests. You will reach the North Absaroka Wilderness approximately one mile (1.6 km) from the trailhead. At two miles (3.2 km) you come to Silver Gate, Montana. From here the road bed is used as a snowmobile route and is good skiing to Cooke City, 3 miles (4.8 km) to the east.</p>\n\n<p><b>Notes:</b> Bison and elk frequent this trail. Federal regulations require you to stay at least 100 yards (91 m) away from bears and wolves, and at least 25 yards (23 m) away from bison and all other wild animals.</p>\n\n<p>Check out the<a href=\"/thingstodo/yell-bannock-ski-trail.htm#Details\" id=\"CP___PAGEID=5744528,yell-bannock-ski-trail.htm#Details,30639|\"> ski trail details and accessibility information</a> at the bottom of this page.</p>",
    "reservationDescription": "",
    "season": [
        "Winter"
    ],
    "topics": [
        {
            "id": "5BE55D7F-BDB6-4E3D-AC35-2D8EBB974417",
            "name": "Trails"
        }
    ],
    "durationDescription": "The duration will vary depending on fitness level, snow conditions, and length of time spent along the trail.",
    "arePetsPermitted": "false",
    "timeOfDay": [
        "Day"
    ],
    "title": "Bannock Ski Trail",
    "latitude": "",
    "shortDescription": "The Bannock Ski Trail is a 2 mile (3.2 km) easy ski that follows the old road bed that once used to supply the mining town of Cooke City, Montana.",
    "duration": "1-2 Hours",
    "relevanceScore": 1,
    "tags": [
        "Yellowstone National Park",
        "Yellowstone National Park ski trail",
        "ski trail",
        "snowshoe trail",
        "snowshoeing",
        "cross country skiing",
        "Northeast Area",
        "easy ski",
        "forested trail",
        "mountains",
        "recreation",
        "winter recreation"
    ]
}