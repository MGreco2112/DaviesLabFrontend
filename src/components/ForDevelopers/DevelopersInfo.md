
# Davies Lab Developer Routes

HTTP Routes and JSON Response formatting to expect from your calls

### Returned Datatypes

Strings, Integers, Doubles, Date, LocalDateTime

Date Format: {YYYY}-{MM}-{DD}
LocalDateTime Format: {YYYY}-{MM}-{DD}T{HH}:{MM}:{SS}

These types return as String format despite being formatted as Date/LocalDateTime Objects on the Server

## Get Basic Lander By Name

Return Lander JSON without any Sensor Information

```HTTP
https://desmophyllum.marecotec.com:8444/api/developers/basic_lander/id/${asdb_lander_id}
```

Response: Lander

```JSON
{
    "deploymentDateAndTime": "2023-09-14T00:00:00",
    "recoveryDateAndTime": "2024-09-07T18:34:00",
    "asdblanderID": "NF2306_20230914_03",
    "landerPlatform": "URILND01",
    "asdbrovdiveID": "NF2306_20230914_02"
}
```

## Get CTD Info VIA Lander ID 
Return Header and Data Set from CTD of specified Lander

```HTTP
https://desmophyllum.marecotec.com:8444/api/developers/lander/id/${asdb_lander_id}/ctd
```

Response: CTD Header -> CTD Data Set

```JSON
{
    "data": [
        {
            "date": "2024-05-30T01:00:00",
            "id": 124062,
            "headID": 1,
            "battV": 2.99,
            "ec25UsCm": 61406.373,
            "tempDegC": 4.333,
            "sal": 35.75,
            "condMsCm": 33.486
        }
    ],
    "channel": 4,
    "startTime": "2023-09-14T14:00:00",
    "headID": 1,
    "sondeName": "A7CT-USB",
    "sondeNo": "0723",
    "sensorType": "T1C1C2B0",
    "delayTime": 0,
    "measMode": 1,
    "preHeat": 1000,
    "burstTime": 30,
    "coefDate": "3922-05-21",
    "eca": 0,
    "endTime": "2024-09-07T20:00:00",
    "buzzerEN": 0,
    "landerID": "NF2306_20230914_03",
    "depAdiRho": 1.025,
    "ecb": 1,
    "ch4": 0.0,
    "condDepB": 0,
    "sampleCnt": 172450,
    "ch2": 0.08532813,
    "sensorType2": "03030002",
    "ch3": 0.0,
    "burstCnt": 10,
    "ecdeg": 25,
    "intervalData": 1000,
    "buzzerInterval": 1,
    "buzzerNumber": 3,
    "depM": 0,
    "eccoef": 0.022,
    "ch1": -5.513932,
    "comment": "DC1000 Long Term Deployment NF2306_20230914_02"
}
```

## Get DO Info VIA Lander ID 

Return Header and Data Set from DO of specified Lander

```HTTP
https://desmophyllum.marecotec.com:8444/api/developers/lander/id/${asdb_lander_id}/do
```

Response: DO Header -> DO Data Set

```JSON
{
    "data": [
        {
            "id": 84975,
            "date": "2024-09-02T15:00:00",
            "headID": 1,
            "battV": 2.99,
            "tempDegC": 4.352,
            "weissDoMgL": 7.863,
            "bkdomgL": 7.874,
            "do": 60.63,
            "ggdomgL": 7.873
        }
    ],
    "channel": 3,
    "startTime": "2023-09-14T14:00:00",
    "headID": 1,
    "sondeName": "ARO-USB",
    "sondeNo": "0193",
    "sensorType": "T0O0B0",
    "delayTime": 0,
    "preHeat": 5000,
    "burstTime": 30,
    "coefDate": "3922-06-18",
    "endTime": "2024-09-07T20:30:00",
    "buzzerEN": 0,
    "landerID": "NF2306_20230914_03",
    "depAdiRho": 1.025,
    "sampleCnt": 86230,
    "ch2": -46.02888,
    "sensorType2": "030202",
    "ch3": 0.0,
    "burstCnt": 5,
    "intervalData": 1000,
    "buzzerInterval": 1,
    "buzzerNumber": 3,
    "depM": 0,
    "ch1": -12.50806,
    "comment": "DC1000 Long Term Deployment NF2306_20230914_03",
    "measModel": 1,
    "setSal": 0,
    "filmNo": "211043BA"
}
```

## Get FLNTU Info VIA Lander ID 

Return Header and Data Set from FLNTU of specified Lander

```HTTP
https://desmophyllum.marecotec.com:8444/api/developers/lander/id/${asdb_lander_id}/flntu
```

Response: FLNTU Header -> FLNTU Data Set

```JSON
{
    "data": [
        {
            "id": 92823,
            "date": "2023-10-12T01:00:00",
            "headID": 2,
            "battV": 2.96,
            "tempDegC": 4.382,
            "chlFluPPB": 0.03,
            "chlAUgL": 0.03,
            "turbMFTU": -0.07
        }
    ],
    "channel": 4,
    "comment": "DC1000 NF2306_20230914_02",
    "startTime": "2023-09-14T14:00:00",
    "headID": 2,
    "sensorType": "T0K0U3B0",
    "delayTime": 0,
    "preHeat": 10000,
    "burstTime": 30,
    "burstCnt": 5,
    "measMode": 1,
    "intervalData": 1000,
    "sampleCnt": 86230,
    "sondeNo": "0002",
    "sondeName": "ACLD-USB",
    "buzzerEN": 0,
    "coefDate": "3920-11-01",
    "ch4": 0.0,
    "ch3": -9.49318,
    "endTime": "2024-09-07T20:30:00",
    "landerID": "NF2306_20230914_03",
    "buzzerInterval": 1,
    "sensorType2": "03020202",
    "ch1": -6.422369,
    "ch2": -4.943954,
    "buzzerNumber": 3,
    "wiperInterval": 0,
    "chla": 0,
    "chlb": 1
}
```

## Get ALBEX CTD Info VIA Lander ID

Return Header and Data Set from ALBEX CTD of specified Lander

```HTTP
https://desmophyllum.marecotec.com:8444/api/developers/lander/id/${asdb_lander_id}/albex_ctd
```

Response: ALBEX CTD Header -> ALBEX CTD Data Set

```JSON
{
    "data": [
        {
            "date": "2024-09-24T22:45:00",
            "id": 4127,
            "flag": 0,
            "headID": 5,
            "salinity": 34.9796,
            "temperature": 4.3501,
            "oxygen_ml_l": 4.627,
            "oxygenSat_percent": 64.4,
            "turbidity_ntu": 0.0516,
            "chla_ug_ml": -0.0018,
            "pressure_db": 1390.285
        }
        ],
    "headID": 5,
    "landerID": "Test_Lander"
}
```

## Get ADCP Info VIA Lander ID

Return Header and Data Set from ADCP of specified Lander

```HTTP
https://desmophyllum.marecotec.com:8444/api/developers/lander/id/${asdb_lander_id}/adcp
```

Response: ADCP Header -> ADCP Data Set

```JSON
{
    "data": [
        {
            "id": 24,
            "date": "2022-08-27T15:55:00",
            "headID": 1,
            "speed7_4_0m": 0.146,
            "speed8_4_5m": 0.178,
            "pitch": 5.1,
            "temperature": 4.35,
            "analogIn2": 0.0,
            "speed1_1_0m": 0.117,
            "speed3_2_0m": 0.129,
            "speed2_1_5m": 0.134,
            "battery": 13.4,
            "pressure": 1395.817,
            "speed5_3_0m": 0.147,
            "speed9_5_0m": 0.225,
            "speed10_5_5m": 0.175,
            "speed11_6_0m": 0.207,
            "speed4_2_5m": 0.139,
            "heading": 66.5,
            "roll": 0.5,
            "analogIn1": 0.0,
            "speed6_3_5m": 0.152,
            "dir15_8_0m": 182.98,
            "dir3_2_0m": 117.76,
            "speed12_6_5m": 0.227,
            "dir2_1_5m": 117.52,
            "dir6_3_5m": 118.76,
            "dir9_5_0m": 116.11,
            "speed18_9_5m": 0.145,
            "speed14_7_5m": 0.081,
            "dir14_7_5m": 109.56,
            "speed17_9_0m": 0.317,
            "dir19_10_0m": 297.78,
            "dir12_6_5m": 85.45,
            "dir7_4_0m": 113.76,
            "speed20_10_5m": 0.157,
            "dir1_1_0m": 122.47,
            "speed13_7_0m": 0.259,
            "dir4_2_5m": 117.85,
            "dir10_5_5m": 113.2,
            "dir11_6_0m": 111.85,
            "dir8_4_5m": 116.28,
            "dir13_7_0m": 141.58,
            "dir16_8_5m": 117.28,
            "dir5_3_0m": 120.76,
            "speed19_10_0m": 0.105,
            "speed15_8_0m": 0.211,
            "speed16_8_5m": 0.107,
            "dir17_9_0m": 105.0,
            "dir18_9_5m": 57.95
        }
    ],
    "headID": 1,
    "landerID": "NF2306_20230914_03"
}
```

## Get Complete Lander By Name

Return complete Lander JSON by Lander Name Query 

```HTTP
https://desmophyllum.marecotec.com:8444/api/developers/full_lander/id/${asdb_lander_id}
```

Response: Lander -> Sensor Header -> Sensor Data
```JSON
{
    "deploymentDateAndTime": "2023-09-14T00:00:00",
    "recoveryDateAndTime": "2024-09-07T18:34:00",
    "asdblanderID": "NF2306_20230914_03",
    "asdbrovdiveID": "NF2306_20230914_02",
    "landerPlatform": "URILND01",
    "CTDHead": {
        "channel": 4,
        "startTime": "2023-09-14T14:00:00",
        "headID": 1,
        "delayTime": 0,
        "sondeName": "A7CT-USB",
        "sondeNo": "0723",
        "sensorType": "T1C1C2B0",
        "ecb": 1,
        "sensorType2": "03030002",
        "condDepB": 0,
        "intervalData": 1000,
        "buzzerEN": 0,
        "sampleCnt": 172450,
        "ch3": 0.0,
        "comment": "DC1000 Long Term Deployment NF2306_20230914_02",
        "burstCnt": 10,
        "measMode": 1,
        "depAdiRho": 1.025,
        "eccoef": 0.022,
        "eca": 0,
        "ch4": 0.0,
        "ch2": 0.08532813,
        "depM": 0,
        "landerID": "NF2306_20230914_03",
        "burstTime": 30,
        "preHeat": 1000,
        "endTime": "2024-09-07T20:00:00",
        "ecdeg": 25,
        "ch1": -5.513932,
        "buzzerNumber": 3,
        "buzzerInterval": 1,
        "coefDate": "3922-05-21",
        "data": [
            {
                "date": "2024-08-05T15:00:00",
                "id": 156509,
                "battV": 2.99,
                "ec25UsCm": 61393.049,
                "sal": 35.749,
                "condMsCm": 33.498,
                "tempDegC": 4.347,
                "headID": 1
            }
        ]
    },
    "DOHead": {
        "channel": 3,
        "startTime": "2023-09-14T14:00:00",
        "setSal": 0,
        "measModel": 1,
        "filmNo": "211043BA",
        "headID": 1,
        "delayTime": 0,
        "sondeName": "ARO-USB",
        "sondeNo": "0193",
        "sensorType": "T0O0B0",
        "sensorType2": "030202",
        "intervalData": 1000,
        "buzzerEN": 0,
        "sampleCnt": 86230,
        "ch3": 0.0,
        "comment": "DC1000 Long Term Deployment NF2306_20230914_03",
        "burstCnt": 5,
        "depAdiRho": 1.025,
        "ch2": -46.02888,
        "depM": 0,
        "landerID": "NF2306_20230914_03",
        "burstTime": 30,
        "preHeat": 5000,
        "endTime": "2024-09-07T20:30:00",
        "ch1": -12.50806,
        "buzzerNumber": 3,
        "buzzerInterval": 1,
        "coefDate": "3922-06-18",
        "data": [
            {
                "id": 38968,
                "date": "2024-02-23T22:30:00",
                "weissDoMgL": 7.919,
                "ggdomgL": 7.93,
                "do": 61.04,
                "bkdomgL": 7.93,
                "battV": 2.99,
                "tempDegC": 4.34,
                "headID": 1
            }
        ]
    },
    "FLNTUHead": {
        "channel": 4,
        "comment": "DC1000 NF2306_20230914_02",
        "startTime": "2023-09-14T14:00:00",
        "sondeName": "ACLD-USB",
        "sensorType": "T0K0U3B0",
        "preHeat": 10000,
        "sondeNo": "0002",
        "sampleCnt": 86230,
        "endTime": "2024-09-07T20:30:00",
        "ch2": -4.943954,
        "burstTime": 30,
        "intervalData": 1000,
        "coefDate": "3920-11-01",
        "ch1": -6.422369,
        "measMode": 1,
        "delayTime": 0,
        "burstCnt": 5,
        "ch3": -9.49318,
        "ch4": 0.0,
        "buzzerInterval": 1,
        "landerID": "NF2306_20230914_03",
        "sensorType2": "03020202",
        "buzzerEN": 0,
        "buzzerNumber": 3,
        "chlb": 1,
        "wiperInterval": 0,
        "chla": 0,
        "headID": 2,
        "data": [
            {
                "id": 103560,
                "date": "2023-11-25T18:30:00",
                "tempDegC": 4.447,
                "battV": 2.97,
                "chlFluPPB": 0.02,
                "turbMFTU": -0.09,
                "chlAUgL": 0.02,
                "headID": 2
            }
        ]
    },
    "albexHead": {
        "headID": 5,
        "landerID": "NF2306_20230914_03",
        "data": [
            {
                "date": "2025-04-01T00:45:00",
                "id": 8641,
                "flag": 0,
                "headID": 5,
                "salinity": 34.9803,
                "temperature": 4.3527,
                "oxygen_ml_l": 4.613,
                "oxygenSat_percent": 64.21,
                "turbidity_ntu": 0.369,
                "chla_ug_ml": 0.0014,
                "pressure_db": 1390.327
            }
        ]
    },
    "adcphead": {
        "data": [
            {
                "id": 49,
                "date": "2022-08-27T18:00:00",
                "headID": 1,
                "speed7_4_0m": 0.165,
                "speed8_4_5m": 0.157,
                "pitch": 5.1,
                "temperature": 4.34,
                "analogIn2": 0.0,
                "speed1_1_0m": 0.12,
                "speed3_2_0m": 0.144,
                "speed2_1_5m": 0.124,
                "battery": 13.3,
                "pressure": 1395.712,
                "speed5_3_0m": 0.145,
                "speed9_5_0m": 0.207,
                "speed10_5_5m": 0.145,
                "speed11_6_0m": 0.131,
                "speed4_2_5m": 0.145,
                "heading": 66.8,
                "roll": 0.5,
                "analogIn1": 0.0,
                "speed6_3_5m": 0.14,
                "dir15_8_0m": 162.88,
                "dir3_2_0m": 109.95,
                "speed12_6_5m": 0.204,
                "dir2_1_5m": 107.85,
                "dir6_3_5m": 115.29,
                "dir9_5_0m": 119.92,
                "speed18_9_5m": 0.089,
                "speed14_7_5m": 0.205,
                "dir14_7_5m": 108.17,
                "speed17_9_0m": 0.115,
                "dir19_10_0m": 172.92,
                "dir12_6_5m": 176.07,
                "dir7_4_0m": 114.7,
                "speed20_10_5m": 0.314,
                "dir1_1_0m": 111.0,
                "speed13_7_0m": 0.282,
                "dir4_2_5m": 113.2,
                "dir10_5_5m": 106.43,
                "dir11_6_0m": 149.34,
                "dir8_4_5m": 116.89,
                "dir13_7_0m": 91.62,
                "dir16_8_5m": 100.99,
                "dir5_3_0m": 114.8,
                "speed19_10_0m": 0.162,
                "speed15_8_0m": 0.207,
                "speed16_8_5m": 0.173,
                "dir17_9_0m": 102.09,
                "dir18_9_5m": 165.03
            }
        ],
        "headID": 1,
        "landerID": "NF2306_20230914_03"
    }
}
```