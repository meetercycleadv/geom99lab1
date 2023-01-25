# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below

## Directions URL

```
https://maps.googleapis.com/maps/api/directions/json?fields=name&departure_time=now&destination=place_id:ChIJSdRbuoqEXjkRFmVPYRHdzk8&mode=driving&origin=place_id:ChIJYxUdQVlO4DsRQrA4CSlYRf4&waypoints=place_id:ChIJq92jkavIXzkRuD9H4b_TOaw|via:place_id:ChIJD98cx4rJWTkRO62Tvs8V3XY&avoid=tolls|highways&region=in&key=%20AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

```JSON
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJYxUdQVlO4DsRQrA4CSlYRf4",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJq92jkavIXzkRuD9H4b_TOaw",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJD98cx4rJWTkRO62Tvs8V3XY",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJSdRbuoqEXjkRFmVPYRHdzk8",
         "types" : [ "locality", "political" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 23.0225716,
               "lng" : 73.2031715
            },
            "southwest" : {
               "lat" : 21.1702777,
               "lng" : 70.8021158
            }
         },
         "copyrights" : "Map data ©2023",
         "legs" : [
            {
               "distance" : {
                  "text" : "152 km",
                  "value" : 151618
               },
               "duration" : {
                  "text" : "3 hours 30 mins",
                  "value" : 12581
               },
               "end_address" : "Vadodara, Gujarat, India",
               "end_location" : {
                  "lat" : 22.3072849,
                  "lng" : 73.1813973
               },
               "start_address" : "Surat, Gujarat, India",
               "start_location" : {
                  "lat" : 21.1702777,
                  "lng" : 72.83122899999999
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 123
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 28
                     },
                     "end_location" : {
                        "lat" : 21.169187,
                        "lng" : 72.8314431
                     },
                     "html_instructions" : "Head \u003cb\u003esouth\u003c/b\u003e on \u003cb\u003eHotel Fountain Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "gye`Cezo{LxEi@"
                     },
                     "start_location" : {
                        "lat" : 21.1702777,
                        "lng" : 72.83122899999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "30 m",
                        "value" : 30
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 21.1692604,
                        "lng" : 72.83171919999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eRajendera Prasad Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "mre`Co{o{LMw@"
                     },
                     "start_location" : {
                        "lat" : 21.169187,
                        "lng" : 72.8314431
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 193
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 21.1709687,
                        "lng" : 72.8313891
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at the 1st cross street onto \u003cb\u003eRajendera Prasad Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{re`Cg}o{LyDb@g@Jg@HkAF"
                     },
                     "start_location" : {
                        "lat" : 21.1692604,
                        "lng" : 72.83171919999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 513
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 68
                     },
                     "end_location" : {
                        "lat" : 21.1755703,
                        "lng" : 72.831031
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eS Zone Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "q}e`Ce{o{LO@{HVkDN_L\\"
                     },
                     "start_location" : {
                        "lat" : 21.1709687,
                        "lng" : 72.8313891
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 422
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 58
                     },
                     "end_location" : {
                        "lat" : 21.1777717,
                        "lng" : 72.8340743
                     },
                     "html_instructions" : "At \u003cb\u003eShree Chosath Joganiyo Mata Mandir Cir\u003c/b\u003e, take the \u003cb\u003e3rd\u003c/b\u003e exit onto \u003cb\u003eUdhana - Magdalla Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Mahindra President Motors (on the right)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "izf`C}xo{LA@?@A@A@A@A??@A?A??@A?A?A?A?A?A?A?A?A??AA?A??AA?AAAAAA?AAA?AAA?A?A?A?A?A?A?A?A?A@??A?A@A?Ag@w@gBaDmBuDMYYk@]g@Y[MMCC[U"
                     },
                     "start_location" : {
                        "lat" : 21.1755703,
                        "lng" : 72.831031
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "62 m",
                        "value" : 62
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 12
                     },
                     "end_location" : {
                        "lat" : 21.1782567,
                        "lng" : 72.8337739
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at \u003cb\u003eUdhana CNG Cir\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ahg`C}kp{Lm@^IDi@T"
                     },
                     "start_location" : {
                        "lat" : 21.1777717,
                        "lng" : 72.8340743
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "7.6 km",
                        "value" : 7581
                     },
                     "duration" : {
                        "text" : "15 mins",
                        "value" : 922
                     },
                     "end_location" : {
                        "lat" : 21.2106799,
                        "lng" : 72.8971123
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eVesu Canal Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by SAMRAT INTERNATIONAL SCHOOL (on the left in 2.7 km)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ckg`Cajp{LEe@Gg@So@}AqEeAcBo@eBoAqDwA}D_BkFg@cBi@aBk@eBa@gAGK_AuCmAwDsBmGGUGSw@uBw@sBCIk@}A]w@]y@So@Iq@Eg@C[CQ?EEyA_@cKEm@Ie@AAIa@e@kBu@qC}@sDq@eCq@cCk@aC_@{Aq@aDMc@YgAYgASm@Sg@MYQ_@e@_A_AaBsAyB[o@m@kAYi@{@{AA?AAA?AAAAA??AAAAA?AAA?AAA?A?A?A?C?A?A?A?A?A@A?A@A?AQUIKuDuG_@o@i@{@CECCIESEKEAACAMEIEGCA?MGN{@sA}BmE}H{AkCWe@wEkIg@_A}@_BS_@S][k@OYIOcBaDe@_A[m@y@aBq@sAc@{@[q@KUQ_@Qa@c@kAk@sA_A_Cs@eBUk@[u@M[s@eBeAiCu@mBaAeCUm@GQ_@q@Yy@Ws@aF{MGQsBoF{EmNsAyD]s@[o@a@q@uCqEq@iAiEcH}BsDOYU]q@iAwHgMwAcCW]yBaD_BsCkAsBa@q@EICGCKCI"
                     },
                     "start_location" : {
                        "lat" : 21.1782567,
                        "lng" : 72.8337739
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.3 km",
                        "value" : 1349
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 166
                     },
                     "end_location" : {
                        "lat" : 21.2226662,
                        "lng" : 72.8955636
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eBRTS Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wum`C}u|{LWBcAH{ALkE^{@HgCTmF`@_@DyD\\aGz@wG~@o@LSDI@M@U@]@Y?_FB{C@s@BoA@m@Bo@Ak@Q"
                     },
                     "start_location" : {
                        "lat" : 21.2106799,
                        "lng" : 72.8971123
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 585
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 90
                     },
                     "end_location" : {
                        "lat" : 21.2278194,
                        "lng" : 72.89492559999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eBRTS Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "u`p`Cgl|{L[IkB[mGHkAHmANwGtAMB_@De@FiBV"
                     },
                     "start_location" : {
                        "lat" : 21.2226662,
                        "lng" : 72.8955636
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 359
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 61
                     },
                     "end_location" : {
                        "lat" : 21.23085,
                        "lng" : 72.8937335
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eGJ SH 602\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eGujarat State Highway 167\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "{`q`Cih|{LoAb@g@Rw@Z{Af@kAX{@TiEbA"
                     },
                     "start_location" : {
                        "lat" : 21.2278194,
                        "lng" : 72.89492559999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1738
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 208
                     },
                     "end_location" : {
                        "lat" : 21.2449201,
                        "lng" : 72.8867707
                     },
                     "html_instructions" : "Continue straight to stay on \u003cb\u003eGJ SH 602\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eGujarat State Highway 167\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eGo through 1 roundabout\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by River Palace (on the left)\u003c/div\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "ysq`Cy`|{LQDIDUHULu@`@YPA@i@VaFjCe@VSDKDIBe@V{DrBgCrA}CbBgB|@}Az@QHIHOL_@Tw@`@aAh@UL}BtA?@A??@?@A??@A@A??@C@C?E?C?m@TkAZi@LsBd@}Cr@iE~@KBSDiDx@q@LcBVmDl@w@b@"
                     },
                     "start_location" : {
                        "lat" : 21.23085,
                        "lng" : 72.8937335
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.9 km",
                        "value" : 1856
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 227
                     },
                     "end_location" : {
                        "lat" : 21.2549155,
                        "lng" : 72.90068599999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eAbrama Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wkt`Ciuz{LOLSw@Mc@IWSm@ACUk@UYa@y@a@_A?A[q@kAiCk@kAu@y@[c@y@_AaBiBq@y@{AwB]e@QSeC{CW]eC{CSUkCcDY]a@k@c@}@ACa@sAOc@Oa@IYCIAM@S@W_@y@e@_AMYOYg@s@KQ]c@wAsB[g@g@{@]g@OS_@m@UWSW[YYU]S[S_@S"
                     },
                     "start_location" : {
                        "lat" : 21.2449201,
                        "lng" : 72.8867707
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "3.3 km",
                        "value" : 3349
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 379
                     },
                     "end_location" : {
                        "lat" : 21.2797593,
                        "lng" : 72.91403799999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eAbrama Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "gjv`Cil}{L]Sc@]UOs@m@WO[Ou@Ye@Ok@Om@Oi@QuBu@w@Us@UgA]}Ag@OCM?OBWDo@JY?QCQGOIsAwAQQKIMGSI[M[OcA]_@IOCOAYCWCSCQGc@M[IK?MAUAO@Q?]@_@AWC]Ec@Gu@KWGQEOIIEKGk@WEAYOSKIGMKIGMMSUYU}A{@u@a@k@Qa@MUGe@MUCK?G@OBQDQHMHQN[PSLk@Rs@XIDC@QFKBI?E?M?EASEICQMa@g@SWU]ACUk@IYe@}@g@gAWe@OY[k@_@k@Q[S[_@a@o@e@aAi@mAi@qA{@WOm@_@eAm@sA_AgA{@USi@q@CCk@{@Wk@W}@YoASeAMg@Qm@IMEGw@_AGIACGGUY[_@IGWMKGg@KQCEA[CK?O@YF_@NODM@A?]?u@G}@EEAM?_AAw@EqCQi@GWGICYKi@W{@e@c@Y"
                     },
                     "start_location" : {
                        "lat" : 21.2549155,
                        "lng" : 72.90068599999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.6 km",
                        "value" : 2589
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 334
                     },
                     "end_location" : {
                        "lat" : 21.3022595,
                        "lng" : 72.9160541
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at Velanja Abrama Rd onto \u003cb\u003eVelanja - Abrama Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Crystal Ceramic Glass (on the left in 1.5 km)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "oe{`Cw_`|L_@NI@KBK@M?A?QAa@Go@Iq@Em@C_AE_AIwASu@K}@CQAa@?e@Ac@C_@E{@Io@Ms@QA?u@]q@[y@a@m@Ug@QEAc@Gm@EWAaCEWAUC_DYs@G]E[CSCgASQEICKCEACGAEACKi@AACKCGEEECIAW@aETM@G@M@GBG@GDGD]PIFoD]oDo@QAuBQmBIuAKA?mAEg@?K?iC?s@CsA?}@BgCTG@G@SBuARaARYFoAh@mAXI@aAD}AE_CK_BGaAEmBMQC"
                     },
                     "start_location" : {
                        "lat" : 21.2797593,
                        "lng" : 72.91403799999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 132
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 29
                     },
                     "end_location" : {
                        "lat" : 21.3032271,
                        "lng" : 72.9167695
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e at KISHAN BIOCARE onto \u003cb\u003eVelanja - Gothan Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Aai Shree Khodiyar Manja Vala (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "cr_aCil`|Lc@G}CgC"
                     },
                     "start_location" : {
                        "lat" : 21.3022595,
                        "lng" : 72.9160541
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "5.8 km",
                        "value" : 5776
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 510
                     },
                     "end_location" : {
                        "lat" : 21.3306183,
                        "lng" : 72.9624439
                     },
                     "html_instructions" : "At the roundabout, continue straight onto \u003cb\u003eVelanja-Pardi Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Cafe bite (on the right)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "ex_aCyp`|LA?A?A?A?A??AA?A??ACC?CAEq@o@eCsBkDsCUSmBcBGE_BsA_Ay@g@g@yEoEgA}@w@g@EEiEcDeDgCgEkDwDkDuBiCY[c@k@U]_@k@OQIOQYa@w@Ug@Yk@y@wAs@{AaCcEk@aAcBeD{@wA]g@cA{A[e@]a@yBiCeB}B{@kAOSOU_@i@g@s@AAo@aAg@y@W_@QYqAsBKQOSmC{DwAmBo@w@iAsASUS[QWQ]Sc@Qa@]}@{@uBo@}AQe@cAaCe@gA{@uBa@eAMa@CMy@{D?AIQQy@CSG[u@mDUgAK]Qw@a@kBQ}@K_@Q}@a@mBoAkGCKCQa@sBI_@Q}@EUq@aDaBwHm@uC[}AS_AQy@Mo@[yAo@wCgAoFScAI_@y@eE_AiEG]c@kBg@wBCMUiA{@yDGW"
                     },
                     "start_location" : {
                        "lat" : 21.3032271,
                        "lng" : 72.9167695
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "13.7 km",
                        "value" : 13722
                     },
                     "duration" : {
                        "text" : "16 mins",
                        "value" : 934
                     },
                     "end_location" : {
                        "lat" : 21.4481572,
                        "lng" : 72.9807893
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at Oppjoynjoynhnavipardi onto \u003cb\u003eNH 48\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Surat (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kceaCgni|Lq@LaB\\iEx@}GpAq@LsGnAsCh@A?qCp@}ElAm@J}E|@eDl@QDe@Fs@LmCd@aC`@sJ`Bu@H_@Be@Bk@?_BEuRuA_DUgYsBk@AsACuAAqEEgPQq@Ao@?qGGiB?_ABcIh@[BUB_QrA}Kx@yJ|@yPpB{Eh@e@Fm@Dk@Bu@D{LJcUT_A@sB@yAAg@Ay@Eu@E_BQw@KmCg@gAW{@SMEeEcAeEcAuAYmAY_B]sAWaImBME]I}G}A_IcBs@OUEcScEgFiAu@QyA]yBk@k@MwBk@kDw@q@MWG]Ec@Gu@Ks@E}EYwEUoKq@cHc@iCM_@Ck@EmGe@{@GkCQ}Fa@oEa@k@GkCQyJs@QAeBM{BQyDY[CwDYeF_@iGa@SAcDUwAKqDUu@CA?aDGaAAgACgAGuCUaAKkE[{BOwAMUAaCSeAIiAOiAWkAYg@OUG{CmAaAe@k@_@UQqIoGeBuAo@i@[U}@u@WSgGcFqIuG_XySmKsI{N{K"
                     },
                     "start_location" : {
                        "lat" : 21.3306183,
                        "lng" : 72.9624439
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "19.6 km",
                        "value" : 19590
                     },
                     "duration" : {
                        "text" : "21 mins",
                        "value" : 1257
                     },
                     "end_location" : {
                        "lat" : 21.6159738,
                        "lng" : 73.00054279999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eNH 48\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Anjali Infracrete Private Limited (on the left in 5.8 km)\u003c/div\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "_b|aC}`m|LmRkOWSm@e@oHyFoHyFeL_JuAgAgFyD}LyJiFcEu@k@}AiAWQOMi@a@aDaCSOqCyBEEcCkBWUKIKGaBmAcGuEaAk@WMMIa@Uw@]cAYgB_@}AUaBQkBOGAyQwAePkA}BQa@Cw@GeTuAmJi@}CUeF]yGa@}CSgCQUAYCaGYqCQiIo@sOaAgJm@wKq@yBUeAGmBM_EUOA_COgF_@qBM_Mw@qBMqIi@gJi@sJk@IAiHc@iCOiUsAuSmAg@CwKo@eTgAo@EwDSoCM}CQiDQy@EsCQsAIYA]CwCOuAIuXmBiQcAcFYi@Ca@?gCCeC@K?[@m@?o@CkAKo@IYGgDm@_@Ga@Ga@GYEaCOiAIuDWA?OAy@G}@EcIc@g@Cg@Ay@?u@Bc@@c@Bg@Fi@F_AL_ATgCl@oO`EoQvEiD`AeAXiQtEeAVg@L]Hi@NA?SF_AXyVvGgUbGOBm@PiD~@wCt@mBh@sBh@iFzAwMhDuKvCiYtHcAVaARi@Jk@Do@Be@B_A?{@AgBKwPaB_AIi@CqCGsBAuAGy@GsAQ_@Ge@KqDw@}AUoAOcHq@cD[sCYE?kFi@cSaB_MoAaQeBoDWqDSoAEm@Cs@AcAAcA@uAH_ABeBDW?wCFm@?o@Ci@Gq@Kq@Q}@_@iCwAQIQKkAq@mEsB"
                     },
                     "start_location" : {
                        "lat" : 21.4481572,
                        "lng" : 72.9807893
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 169
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 16
                     },
                     "end_location" : {
                        "lat" : 21.6173047,
                        "lng" : 73.00132119999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Azad Diesel Centre (on the left)\u003c/div\u003e",
                     "maneuver" : "keep-left",
                     "polyline" : {
                        "points" : "yz|bCk|p|LgAYg@WiC}AOK"
                     },
                     "start_location" : {
                        "lat" : 21.6159738,
                        "lng" : 73.00054279999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "68 m",
                        "value" : 68
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 21.6178994,
                        "lng" : 73.0014553
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e at Vahan Tyre Shoppe toward \u003cb\u003eGJ SH 6\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "cc}bCgaq|LwAO_@K"
                     },
                     "start_location" : {
                        "lat" : 21.6173047,
                        "lng" : 73.00132119999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.3 km",
                        "value" : 2258
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 322
                     },
                     "end_location" : {
                        "lat" : 21.6376929,
                        "lng" : 73.0054756
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eGJ SH 6\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Sahil Sea Fish Center (on the left)\u003c/div\u003e",
                     "polyline" : {
                        "points" : "{f}bCcbq|LMCA?C@C?SCc@GgEq@]Em@IkCa@cC]mKmBa@GEAuASA?gCa@cBYkB[eFs@qGcAkBYgEw@mIqAIAmCe@k@Ga@Ca@@K@Q@q@Hm@JaC^o@HQBQ?Q?QAC?UCWEcAQWEA?AAc@G]IwB]_AMQEw@KwAUy@Om@IKC"
                     },
                     "start_location" : {
                        "lat" : 21.6178994,
                        "lng" : 73.0014553
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 473
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 39
                     },
                     "end_location" : {
                        "lat" : 21.6418135,
                        "lng" : 73.00662679999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "qbacCg{q|L}@S_I}A{Ey@mEu@OC"
                     },
                     "start_location" : {
                        "lat" : 21.6376929,
                        "lng" : 73.0054756
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 530
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 43
                     },
                     "end_location" : {
                        "lat" : 21.6464478,
                        "lng" : 73.00778149999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eNH64\u003c/b\u003e",
                     "polyline" : {
                        "points" : "i|acCmbr|LI?IAiC_@{Ds@[EYG_@GcBYWEUGMCsCc@{@QeAUWAM?S?"
                     },
                     "start_location" : {
                        "lat" : 21.6418135,
                        "lng" : 73.00662679999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "9.3 km",
                        "value" : 9346
                     },
                     "duration" : {
                        "text" : "11 mins",
                        "value" : 688
                     },
                     "end_location" : {
                        "lat" : 21.7257297,
                        "lng" : 73.0065773
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eNH64\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Jay Jalaram Ubadiyu center (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "iybcCsir|L_Bc@mCa@kB[wHiAGAgJyAoK_BqYgEkLiBuF{@gEo@qCa@cEo@u@MuF}@qEq@eAOkCc@_JuAaDe@aBS{AMyEa@iAGgCGm@AiB?}C@{D@wB?]?a@Be@Bg@Di@F{@Lk@Hc@HUD[J[HYHYJ[Pi@Vk@\\YPk@`@a@Zo@j@}@|@mAlAk@h@i@^i@Xo@ZEB}DhBqB`AwAn@uB`AwAn@}An@gBx@sAd@A?gAXiCl@}Cx@a@L_C|@yBbAkEpB}Ar@eAb@sDbBoB|@uB~@yFhC}@^aChAmChAeDxAiF~ByDfBqEpBe@Vg@TaBn@e@To@Vg@Pg@La@HYFUBSD]DC@YD]Fe@DQBQ@wDf@YBQ@U@{@@qAGaAEkBO{AMuAMiAIoAIwAM{CSqBSaCQeBMgBOkBM}AM_BMSGc@Ik@Mo@S]Ku@UaAYoAa@s@Wi@KoFiBKCWKy@Ug@OCA_@Kq@Sa@Kc@Og@Qi@Os@W_@K}Bs@KEk@OsEyAgA]sDgAeHyBYKmA_@qBo@a@M}DoAoBi@"
                     },
                     "start_location" : {
                        "lat" : 21.6464478,
                        "lng" : 73.00778149999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.4 km",
                        "value" : 2403
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 278
                     },
                     "end_location" : {
                        "lat" : 21.7311517,
                        "lng" : 73.02883709999999
                     },
                     "html_instructions" : "At \u003cb\u003eABC Cir\u003c/b\u003e, take the \u003cb\u003e3rd\u003c/b\u003e exit and stay on \u003cb\u003eNH64\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by ABC Cir (on the right)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "yhrcCcbr|L?@A?A@A?CBC@E?C?CAA?AAA?A?AAAAA?AA?AA??AAA?AAA?A?A?AAA?A@A?A?A?A?A?A@??A@A?A@A?A@?@AoDsWAEy@mGu@aFU_BACsAgJo@uEU_BQsAa@uCu@kFEUCWKi@g@gDa@gCmBmMmCyPW_Cg@oDUaAEMI]Sg@"
                     },
                     "start_location" : {
                        "lat" : 21.7257297,
                        "lng" : 73.0065773
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 199
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 37
                     },
                     "end_location" : {
                        "lat" : 21.7325198,
                        "lng" : 73.0276006
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at Narmada Chokdi to stay on \u003cb\u003eNH64\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by GNFC Bharuch Bus Stand (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ujscCgmv|L_@Zq@j@mAdA{@v@u@p@"
                     },
                     "start_location" : {
                        "lat" : 21.7311517,
                        "lng" : 73.02883709999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.7 km",
                        "value" : 2663
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 175
                     },
                     "end_location" : {
                        "lat" : 21.7547339,
                        "lng" : 73.01868
                     },
                     "html_instructions" : "Take the ramp onto \u003cb\u003eNH 48\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNH64\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Sukhadia Khambhatwala (on the left in 1.3 km)\u003c/div\u003e",
                     "polyline" : {
                        "points" : "gsscCoev|LqBjB{AtAoAjAo@d@g@^yAv@e@FiCfAkGbBgEdAcEbA}@VsCv@qIvB}G`BgBh@aCn@w@T}@VODu@RuI`CaCp@ODsKzC}C|@kD`A_D|@iBd@sARyAL}@Fy@?cBA"
                     },
                     "start_location" : {
                        "lat" : 21.7325198,
                        "lng" : 73.0276006
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "27.8 km",
                        "value" : 27811
                     },
                     "duration" : {
                        "text" : "25 mins",
                        "value" : 1518
                     },
                     "end_location" : {
                        "lat" : 21.9902645,
                        "lng" : 73.10730319999999
                     },
                     "html_instructions" : "Continue straight to stay on \u003cb\u003eNH 48\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNH64\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Shree Valkeshwar Petroleum Adhoc (on the left)\u003c/div\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "a~wcCwmt|L]C{AKo@IoAUsA]wC_AiEmAmA]sCy@iA[aEkA}@WiCu@kBk@w@UaEkAaBg@wIgCuK}CwDkA[Ig@S{@SqXyG{@S[GaHcBYIuA]{Bi@mBg@gEeAYGiMaDiD{@GAqGcBuHkBeCw@qAa@{@WaD_AoEaB[KmAa@}Bu@{Bw@oL}DoToHmIqCiC}@aDcAsa@cN}KqD}DmAoBs@aLuDwE_BcBm@aCw@UKUIcHoBgIeCwFkBaFeB{CgAgG{BuRcHyHoCc@MuFuB}Ae@gDmAwAg@wCgAgAY{@U}DuAOGgGwBm@Sk@SaCy@uAe@oKyDiE}AiGqB]KcBi@c@OyBs@OGAA_A[_A]oDmAa@OeBm@sVcIyDoAaA[cMeEi@Mo@KCAw@MqBUgGaAc@Gw@M_JwAaAOoDi@yC_@EAyCe@_Gy@gFy@sT_DA?wCc@_Fo@eEk@yDk@KAiIwAsDi@}Ca@mIkA}Dg@uCa@sEq@qASa@IaFs@u@K{HmAkGaAsEs@{@KkBg@sD}@aG_BiHuBmIwBcKsCiHmBqF_BuOcEuBk@QG_T_GSGwRkFsGkBkHmBqCu@oL_DeR_FwAc@iBg@MEOEOEOEKA{Bi@kL}CqBi@uBi@wGgBMEYGqBg@qA[IA{NcEyLgD{@S{Bm@_Ba@cAW[IyHsB_MeDaD{@eFuAiL{CuCk@IC_D{@OEmBg@a@K}W_Hcf@aMea@kKsDeAqMiDuA_@gJyBaOaEwD_AsDcAaJmCyGkBaEkAqF_BmDaAoMyDqAa@gNoDmFyAUGQEA?UGUGaGwAsGeBiEgAkCo@cJ_CMCk]{Iy@UUISGYMg@U]Qa@WYQe@]g@c@_@_@mCqCoAmAi@e@k@c@k@_@u@c@y@_@oAe@e@Ok@S}@Y[K{Bq@k@Mq@MA?m@Km@EYA]A"
                     },
                     "start_location" : {
                        "lat" : 21.7547339,
                        "lng" : 73.01868
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.9 km",
                        "value" : 2871
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 364
                     },
                     "end_location" : {
                        "lat" : 21.9870818,
                        "lng" : 73.13462969999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003ePalej Sadhli\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Oslam Bus Stop (on the right)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "c~eeCswe}L?]?U@I@K\\gB?A\\qBtD_SFYf@{CBWr@oIDi@@_@?cIAwD?iB@k@Fm@@Av@{EdAiELi@`AwCX_ARgAFe@BqA@cDCyG@}C?cC?U?iL@wN?QBwDAu@AoBAc@?q@BcE"
                     },
                     "start_location" : {
                        "lat" : 21.9902645,
                        "lng" : 73.10730319999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 268
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 47
                     },
                     "end_location" : {
                        "lat" : 21.9893121,
                        "lng" : 73.1354563
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at જય ગિરનારી ડેટા સેન્ટર to stay on \u003cb\u003ePalej Sadhli\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by ઓસલામ વિવિધ કાર્યકારી સહકારી મંડળી લી. (on the right)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "gjeeCmbk}L[@O@QAq@EkASWGc@IICWIIGMGkC}A"
                     },
                     "start_location" : {
                        "lat" : 21.9870818,
                        "lng" : 73.13462969999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.8 km",
                        "value" : 2804
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 404
                     },
                     "end_location" : {
                        "lat" : 22.0116661,
                        "lng" : 73.1281563
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "exeeCsgk}L_@r@EFU`@CDCDC@E@E@GASE_B_@wAW}@QAAa@CUAsA@iEF[@a@@gBPWDQBiDd@iC^qC^ODOFYPa@VA?MF_APaC^e@FM@kCJM@_ANiEn@ODeA`@C@iDrAMFiBl@KD}A`@wCj@aBXwARmCd@]Fa@F[BgDTyCXcBPe@HiBb@[LSLON}@fAk@`Ay@dAIJEFEFCFA@WbAAB?@?D?B@D\\rADVBL?ZS\\GFIDuBp@c@JQ@Y@SAqAEmAGu@K"
                     },
                     "start_location" : {
                        "lat" : 21.9893121,
                        "lng" : 73.1354563
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1775
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 249
                     },
                     "end_location" : {
                        "lat" : 22.022894,
                        "lng" : 73.11797229999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by CAR SERVICE &amp; CAR AC (on the right in 1.7 km)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}cjeC_zi}L?LAN_@lBIHGBA@G@OBK?Q@c@@aADo@BiAB_DHqDNQDIBGDIFGHA@CHEL_@pBGPGLCDGD{@b@qGxCIDiBfAgAp@mBdAKLILINADu@nCEPINGHuAfBGLINETUjBCLENCJy@dB}@hBk@vAA@sAdCIJYX{AnAQJyAt@s@f@SX"
                     },
                     "start_location" : {
                        "lat" : 22.0116661,
                        "lng" : 73.1281563
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "26.3 km",
                        "value" : 26284
                     },
                     "duration" : {
                        "text" : "26 mins",
                        "value" : 1534
                     },
                     "end_location" : {
                        "lat" : 22.2214734,
                        "lng" : 73.18693759999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at Bharthana Bus Stop onto \u003cb\u003eNH 48\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNH64\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Honest Restaurant (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ajleCizg}LST}A[uHmB_@SSGoCu@aCm@iR}E]I}Bm@yMkDa@KiNuD_EeAk@Ok@OiIwB}SoFe@Ma@Ka@KqI_C{GeByGeBwAa@oAYeCq@eCo@WGWG]K]I]K_@K{PoESEiGcBwBi@aE}@]K]IwCy@cDaAa@O]Q_@Ue@]_@Wk@g@kAqAaCqCyJuKgAmAs@s@IKw@}@aFsFq@u@oAuAwDeEqB_Cq@w@]k@]s@_BiDaBuDGMYo@{@kBUi@gAcCuAuCa@s@[i@e@q@i@i@gAy@aCuAoBaAmE{BkAk@QIkG}CoE{BOEECk@]g@[cAu@wAuAs@}@q@iASi@w@}Ag@oB]mAMc@y@oDeAoESy@YoA}Hw[[kAYy@]w@a@w@e@u@g@o@q@m@y@s@aAw@{D{CcBsAgAu@AAu@e@s@]AAu@[q@Us@SqA_@iA[eA[eAa@w@_@o@c@k@g@i@i@U[QWg@}@a@_Ae@yAgDyLmH}Xc@wAkCcKg@kB}AaGqFoSKg@Qk@WeAQ}@Im@CMKmAIeAGkA_@iKAi@GiAGu@Iq@Mo@Mu@EMGWMc@Yy@[s@Ue@Yc@Ya@OOKO_@c@k@k@a@[g@][Se@W]QMGOGe@Qg@Qw@O}@QyBYSCWAgGu@mEg@cBS{@M{@Sq@QSKyG_Bc@M_ASw@K}@I_AE_A@}@BeAHW@yBNaKr@yGf@mIl@gAD{Hf@YBsF\\{DV_FX{Jj@cF^g@Fe@DoANcMrAG@K@eGp@mALgD^iD\\]BmBNKB}@J_ANeARoIjB{ItBiOdDmOdDoBf@w@Vy@ZwCtAgAh@w@ZgA^ODm@J[Fy@N{@PWBQBYDwIjAoAPu@H_AHeA?aAE{@G}@Q{A]c@Sm@]cAm@q@g@k@e@IIoByAWQk@_@_Ac@GEq@Wi@SYIg@Om@Oq@MSEqDk@sEu@_BUu@G_AE{@?{@By@Fw@Ly@Po@N_AT_FpAmEfAiAXiBd@iBd@u@RWFqGbBo@NUDsEjA}A^m@Jq@Ju@HeAH}AFiI^oLn@kDPgAF}ADgABk@AWAy@GaC_@sB_@oGkAmIyAmDo@gF_AyA[eAQs@MqHsAyBa@uAYQCmDm@YCE?cAGcI_@e@CoBIqCKaFQ_ESw@Ei@Ek@E{@I_@I}@QcAW_Cy@uAs@ECo@a@eG{EgEeD}EyD_BmAe@[e@[UKQKi@Wc@SC?[Me@Og@OA?i@Ki@MgBW}Gu@mBSqBSoFi@o@Gm@Ek@Ac@@_@?a@@e@BgGj@aOvA_F^yFb@uCTC@K@_Jz@kJx@mANcDXiGj@{@Lo@Ho@Nq@Pe@La@LYJg@Rm@VcDzA_@PwAr@u@Zg@RyDnAeD|@mC`@_Cb@"
                     },
                     "start_location" : {
                        "lat" : 22.022894,
                        "lng" : 73.11797229999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 386
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 47
                     },
                     "end_location" : {
                        "lat" : 22.2248267,
                        "lng" : 73.1872231
                     },
                     "html_instructions" : "Take the exit toward \u003cb\u003eMakarpura Rd\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "ecsfCkiu}LSRkBTeADI?m@@o@Aq@Eo@Em@Gk@Kg@O{@QmAc@CA"
                     },
                     "start_location" : {
                        "lat" : 22.2214734,
                        "lng" : 73.18693759999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.1 km",
                        "value" : 4077
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 468
                     },
                     "end_location" : {
                        "lat" : 22.2571563,
                        "lng" : 73.1989191
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eMakarpura Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by vishwanath tyre service (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "exsfCcku}LMAOA[?WDYFUF[LSBq@GiAGkAIuBQyF_@e@E{Hk@}D[q@CmBGKAKA_CSgD]gCQmBMc@Eo@EwJy@i@GMAaDM_AIo@AG?[?qADs@H[DG@UBk@Ju@Lu@Jw@Fa@@c@AY?MAOCSEmAe@mBw@iBcAKGWOw@o@i@k@[a@S]a@iAQg@Kc@ESU_BIe@AGE[Kk@EYCQu@gFEWG_@g@wA[m@MQGKIMOMOKUSUQm@a@_@YQKUIeAWGCw@QiCg@m@Mg@IsBi@ICqDy@CAqD}@oCm@_E}@YG_Dy@uD{@mDy@u@QkImB"
                     },
                     "start_location" : {
                        "lat" : 22.2248267,
                        "lng" : 73.1872231
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.5 km",
                        "value" : 1530
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 200
                     },
                     "end_location" : {
                        "lat" : 22.2701837,
                        "lng" : 73.2031841
                     },
                     "html_instructions" : "At \u003cb\u003eSussen Cir\u003c/b\u003e, take the \u003cb\u003e2nd\u003c/b\u003e exit onto \u003cb\u003eIndulal Yagnik Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eMakarpura Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePratap Nagar - Makarpura Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Astral SteriTech Pvt. Ltd. (on the right)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "gbzfCgtw}LCDCBE@EBE?A?C?C?CAA?CACAAACAAAAAAA?AAAAC?A?AAC@CkHgBkDy@a@Ku@QeAYi@M}Cq@OEmBa@WEQECAIGGCk@Ki@K[Gi@MqCo@{@Ua@K}@U{@QICwEiAgBa@OCaB]sAWMCeA]iA]_AUCBC@E?C?CAs@Se@Mc@O[GUGKAG?I?UB"
                     },
                     "start_location" : {
                        "lat" : 22.2571563,
                        "lng" : 73.1989191
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.5 km",
                        "value" : 2472
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 290
                     },
                     "end_location" : {
                        "lat" : 22.2902457,
                        "lng" : 73.19436519999999
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e1st\u003c/b\u003e exit onto \u003cb\u003eLalbagh Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRajnikant Jani Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Sales Corner Baroda Pvt.Ltd (on the left in 1.1 km)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "ss|fC{nx}LA@A@A?A@A@A?A@A?A?A?A?A@qBdAwAv@eEpBwFzCWL}@b@?@A@A@C@C?sJbF_@NSJIBo@^UPKHMJMLU\\OVs@rAOXILGJKHMHUJk@LoAXu@Po@NuBl@o@Nk@PYHiDfAiA\\_ErAg@PC@E@IBM@K@M?M@KBOBYHUHYH[LODe@RGBIB}Af@cAXu@TyBn@wBr@e@NyC`As@VQ@K@O@Q?sBGwAEwIY"
                     },
                     "start_location" : {
                        "lat" : 22.2701837,
                        "lng" : 73.2031841
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 km",
                        "value" : 1210
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 175
                     },
                     "end_location" : {
                        "lat" : 22.3011078,
                        "lng" : 73.1949511
                     },
                     "html_instructions" : "At YOGESHWARI OMLET CENTER, continue onto \u003cb\u003eJawaharlal Nehru Marg\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Moti Baug (on the left)\u003c/div\u003e",
                     "polyline" : {
                        "points" : "aq`gCywv}LYAsBG_EImCGc@AgACoCMQ?iHQSCwECW?G?mCEmEGwEGo@AWAw@CgDK"
                     },
                     "start_location" : {
                        "lat" : 22.2902457,
                        "lng" : 73.19436519999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 802
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 89
                     },
                     "end_location" : {
                        "lat" : 22.3048415,
                        "lng" : 73.1892805
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at CENTRAL BANK OF INDIA - RAOPURA MACHHIPITH BARODA Branch onto \u003cb\u003eJail Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Narmada Bhavan (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}tbgCm{v}LAh@E~BExCAh@Af@?j@Aj@AVALAPCNANERMZQXYVu@r@mAdAIHe@b@cCxBYVEBOLOLEDWPYLSJ]LWJC?QDODSBYDUBe@D"
                     },
                     "start_location" : {
                        "lat" : 22.3011078,
                        "lng" : 73.1949511
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 592
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 78
                     },
                     "end_location" : {
                        "lat" : 22.3065805,
                        "lng" : 73.1839253
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at Yoga Girl Statue onto \u003cb\u003eJetalpur Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by A.G.Enterprise (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "glcgC_xu}LO\\oA`DEFg@jAENAJCREf@EdAEz@OnBEtAETIXK\\Yz@g@zAw@bCCN"
                     },
                     "start_location" : {
                        "lat" : 22.3048415,
                        "lng" : 73.1892805
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 262
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 65
                     },
                     "end_location" : {
                        "lat" : 22.3088867,
                        "lng" : 73.1844419
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Zivaya Spa in Vadodara, Grand Mercure Vadodara Surya Palace (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "cwcgCqvt}LIAMA}AUkAOcAOKAqBYiAO"
                     },
                     "start_location" : {
                        "lat" : 22.3065805,
                        "lng" : 73.1839253
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 357
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 94
                     },
                     "end_location" : {
                        "lat" : 22.3070078,
                        "lng" : 73.18162579999999
                     },
                     "html_instructions" : "Sharp \u003cb\u003eleft\u003c/b\u003e at WolfSoft Pvt. Ltd.\u003cdiv style=\"font-size:0.9em\"\u003ePass by Viha Stationary (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-sharp-left",
                     "polyline" : {
                        "points" : "qedgCwyt}LzBnDp@hAHPx@lABH~@dB`AfB"
                     },
                     "start_location" : {
                        "lat" : 22.3088867,
                        "lng" : 73.1844419
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "39 m",
                        "value" : 39
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 25
                     },
                     "end_location" : {
                        "lat" : 22.3072849,
                        "lng" : 73.1813973
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at J D The Business Luxury Hotel Surat\u003cdiv style=\"font-size:0.9em\"\u003ePass by Makka Madina Restaurant (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yycgCeht}Lu@l@"
                     },
                     "start_location" : {
                        "lat" : 22.3070078,
                        "lng" : 73.18162579999999
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "521 km",
                  "value" : 521058
               },
               "duration" : {
                  "text" : "10 hours 32 mins",
                  "value" : 37933
               },
               "end_address" : "Ahmedabad, Gujarat, India",
               "end_location" : {
                  "lat" : 23.0225716,
                  "lng" : 72.57130579999999
               },
               "start_address" : "Vadodara, Gujarat, India",
               "start_location" : {
                  "lat" : 22.3072849,
                  "lng" : 73.1813973
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "39 m",
                        "value" : 39
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 11
                     },
                     "end_location" : {
                        "lat" : 22.3070078,
                        "lng" : 73.18162579999999
                     },
                     "html_instructions" : "Head \u003cb\u003esoutheast\u003c/b\u003e",
                     "polyline" : {
                        "points" : "o{cgCwft}Lt@m@"
                     },
                     "start_location" : {
                        "lat" : 22.3072849,
                        "lng" : 73.1813973
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "41 m",
                        "value" : 41
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 20
                     },
                     "end_location" : {
                        "lat" : 22.3067552,
                        "lng" : 73.18133759999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at J D The Business Luxury Hotel Surat",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yycgCeht}Lp@x@"
                     },
                     "start_location" : {
                        "lat" : 22.3070078,
                        "lng" : 73.18162579999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 275
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 48
                     },
                     "end_location" : {
                        "lat" : 22.3066991,
                        "lng" : 73.18394809999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at Mahalaxmi Paper Mart\u003cdiv style=\"font-size:0.9em\"\u003ePass by Deepak Art (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "gxcgCkft}LVqB@GBU@A?GAMAKCIIYGQEQEQCU?E?YLuADy@@S?K?K?I"
                     },
                     "start_location" : {
                        "lat" : 22.3067552,
                        "lng" : 73.18133759999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 142
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 30
                     },
                     "end_location" : {
                        "lat" : 22.3079485,
                        "lng" : 73.18423439999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at AC mechanic Santosh kori\u003cdiv style=\"font-size:0.9em\"\u003ePass by Zivaya Spa in Vadodara, Grand Mercure Vadodara Surya Palace (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{wcgCuvt}L}AUkAOcAOKA"
                     },
                     "start_location" : {
                        "lat" : 22.3066991,
                        "lng" : 73.18394809999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 439
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 97
                     },
                     "end_location" : {
                        "lat" : 22.3087693,
                        "lng" : 73.187932
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at PRIYANSHU\u003cdiv style=\"font-size:0.9em\"\u003ePass by Karvy Stock Broking Limited (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "u_dgCmxt}LPsBB]JqABOHeA?CDc@Dm@Dm@@]ASEO?AISKSKKMMo@k@CCs@m@OOw@q@"
                     },
                     "start_location" : {
                        "lat" : 22.3079485,
                        "lng" : 73.18423439999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 km",
                        "value" : 1058
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 133
                     },
                     "end_location" : {
                        "lat" : 22.3181966,
                        "lng" : 73.1874296
                     },
                     "html_instructions" : "At \u003cb\u003eKala Ghoda Cir\u003c/b\u003e, take the \u003cb\u003e2nd\u003c/b\u003e exit onto \u003cb\u003eProfessor Chandravadan Mehta Marg\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eUniversity Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Mudra School of Finearts (on the left)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "yddgCqou}LA@A@?@A@A??@A@EBE@E@G?EAA?A?AAA?A?QBM@E?K?{AGk@Ca@AaA?g@Bi@D{APo@H}@Hc@Bk@B[?wA?u@AO?gCAw@?a@?m@@aABI?w@B}@Fq@Da@D{DXE?eAF_@@UA_@ASCe@GKA[G"
                     },
                     "start_location" : {
                        "lat" : 22.3087693,
                        "lng" : 73.187932
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 593
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 116
                     },
                     "end_location" : {
                        "lat" : 22.3232946,
                        "lng" : 73.18848679999999
                     },
                     "html_instructions" : "At \u003cb\u003eBull Cir\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eFatehgunj Cross Roads\u003c/b\u003e, continue straight onto \u003cb\u003eAbbas Tyabji Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Rangoli (on the left)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "w_fgCmlu}L?@A?A@A??@A?A?A?A@AAA?A?A?AAA??AA??AA?AA?AA??A?A?AAA?A?A?A?AYEQCGAqBm@gCi@oASKCeAQeAOMCw@IgAKQA_AIa@Em@GeAAW?O?C@KDQJ"
                     },
                     "start_location" : {
                        "lat" : 22.3181966,
                        "lng" : 73.1874296
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 448
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 61
                     },
                     "end_location" : {
                        "lat" : 22.3249205,
                        "lng" : 73.192111
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at .Net Xpert Web Solutions onto \u003cb\u003eHarshadrai Mehta Marg\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eVIP Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Times Square Bldg (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "q_ggCasu}Li@XIMKM?AOYEOEMCMWaBYsBOu@AGEUMe@CGOc@Uu@Sg@M]o@yAIOEQ?AAS"
                     },
                     "start_location" : {
                        "lat" : 22.3232946,
                        "lng" : 73.18848679999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 101
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 11
                     },
                     "end_location" : {
                        "lat" : 22.3253858,
                        "lng" : 73.19294669999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e at Gunjan Seva Usali to stay on \u003cb\u003eHarshadrai Mehta Marg\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eVIP Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Fatehgunj E.M.E. School (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "wiggCuiv}Lu@sAKUIUISGS"
                     },
                     "start_location" : {
                        "lat" : 22.3249205,
                        "lng" : 73.192111
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 422
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 45
                     },
                     "end_location" : {
                        "lat" : 22.3250742,
                        "lng" : 73.1969955
                     },
                     "html_instructions" : "At \u003cb\u003eEME Cir\u003c/b\u003e, take the \u003cb\u003e2nd\u003c/b\u003e exit onto \u003cb\u003eVIP Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Pregnancy For Super Child (on the left)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "ulggC}nv}LAAAA?AAA?AAA?A?A?A?A?A?A?C?A@A?A@A?A@A?A@?@AFu@De@NqDRyDBs@BkA?Y@c@BqA?EA_@"
                     },
                     "start_location" : {
                        "lat" : 22.3253858,
                        "lng" : 73.19294669999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.4 km",
                        "value" : 1442
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 158
                     },
                     "end_location" : {
                        "lat" : 22.3367206,
                        "lng" : 73.1925474
                     },
                     "html_instructions" : "At \u003cb\u003eL&amp;T Cir\u003c/b\u003e, take the \u003cb\u003e1st\u003c/b\u003e exit onto \u003cb\u003eMangal Pandey Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Ratri Bazaar (on the left)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "ujggCghw}LCAAAAAACAAAA?CAAk@GcAKy@IeD_@I?E@C@EDYV_@`@IHEBIBIDK@IBi@?iBGe@?M?eB@{@@]@SDSF]PUNg@VuBbAsAn@iB|@{BfA?@aD|A?@qAn@cBx@m@ZkB`AeAj@SN_At@m@d@g@^_@VMHOH_@NOFI@I?K@"
                     },
                     "start_location" : {
                        "lat" : 22.3250742,
                        "lng" : 73.1969955
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.5 km",
                        "value" : 1514
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 189
                     },
                     "end_location" : {
                        "lat" : 22.3443386,
                        "lng" : 73.2024507
                     },
                     "html_instructions" : "At \u003cb\u003eGIPCL Cir\u003c/b\u003e, take the \u003cb\u003e3rd\u003c/b\u003e exit onto \u003cb\u003eOld Jakatnaka Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSama Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Sama Rd\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Navrachana Sport Academy (on the left)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "osigCmlv}LCB?@A?A@A?A?A?A?AAA??AA??AA??A?AA??A?A?A?A@A?A?A@??A@??A@?EcAAq@?UASCWG]E_@CGQs@GS[uA[wAa@cBOm@?AGUK_@Y}@WsAiAeFSy@IWISGKKMEGMEMEKC_AQ}A_@gAYy@SuA]]IeAW}Aa@g@Oc@MQEeBc@cBe@KEs@QUG]KMEOEOIICIGIIEIGKEOAOAMAQCkAEoD"
                     },
                     "start_location" : {
                        "lat" : 22.3367206,
                        "lng" : 73.1925474
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.2 km",
                        "value" : 2169
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 272
                     },
                     "end_location" : {
                        "lat" : 22.3621503,
                        "lng" : 73.19449539999999
                     },
                     "html_instructions" : "At \u003cb\u003eTranspek- Silox Abacus Cir\u003c/b\u003e, take the \u003cb\u003e1st\u003c/b\u003e exit onto \u003cb\u003eSama-Savli Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Sama (on the left)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "cckgCijx}LAAAAA??A?Ao@NyAd@{Ab@e@JYFGBkF~@OBkCb@a@DqC^g@HoDd@oALu@LkAJOByDx@uBj@iA^QD_Cl@uAf@u@Z]LqDhBs@`@GDCBuAt@u@d@iAn@eBbAwChB_CtA_DhBcB~@uAx@YLsAx@sClAGBeAj@KDG@C?AA"
                     },
                     "start_location" : {
                        "lat" : 22.3443386,
                        "lng" : 73.2024507
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "63 m",
                        "value" : 63
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 17
                     },
                     "end_location" : {
                        "lat" : 22.3626592,
                        "lng" : 73.19473189999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e at Sainath Tea Stall to stay on \u003cb\u003eSama-Savli Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Dumad Chokdi (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "mrngCsxv}LE?I?UE_Ag@"
                     },
                     "start_location" : {
                        "lat" : 22.3621503,
                        "lng" : 73.19449539999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 99
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 30
                     },
                     "end_location" : {
                        "lat" : 22.3630997,
                        "lng" : 73.1939654
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at Dumad Chokdi onto \u003cb\u003eNH 48\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "sungCazv}LSDEBCBEDGFMPG^GZMl@"
                     },
                     "start_location" : {
                        "lat" : 22.3626592,
                        "lng" : 73.19473189999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 591
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 77
                     },
                     "end_location" : {
                        "lat" : 22.3658888,
                        "lng" : 73.18910649999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e at Maya Mahadev ri onto \u003cb\u003eGJ SH 188\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Meghna Auto Gereg (on the right)\u003c/div\u003e",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "kxngCiuv}LWf@_@v@s@pAgAfBsArBgAhBq@xAQ^Yn@o@~Bs@|BMZMN"
                     },
                     "start_location" : {
                        "lat" : 22.3630997,
                        "lng" : 73.1939654
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "6.9 km",
                        "value" : 6884
                     },
                     "duration" : {
                        "text" : "7 mins",
                        "value" : 431
                     },
                     "end_location" : {
                        "lat" : 22.4004513,
                        "lng" : 73.1383896
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNH64\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Star Auto Eng Works (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "yiogC}vu}LO|@W~AgAfGSlAsAdH_@pBs@zDG\\Sr@Sp@]dAM\\c@`AgDvHg@`BGTQr@sB`JcDlMK\\_BpGiAxFQh@c@zAQj@[~@u@zBy@rBy@nBaDxHM^Wz@Ol@Ur@Sh@]bAYdACJENUv@IZMp@WvAO`BC^UbCEnAAfB?NJ|CVnF?@DzBChAEd@S`BKj@GRCHIXCHKVGLGNUh@Ub@A@EHEFEHEJu@~@qCtCqKrJKJ{G|F}OhP]\\mG~GCDuDbFsAjBi@r@CDeBxBs@~@o@t@i@h@o@d@sAr@{@b@SJQJsB`AaA`@uAt@UJaCjAoAl@C@o@V_@P_FvBgDvAoJbEiBv@w@Z[L_@P{CxAiAj@_PlH]Nq@Z"
                     },
                     "start_location" : {
                        "lat" : 22.3658888,
                        "lng" : 73.18910649999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "9.9 km",
                        "value" : 9927
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 586
                     },
                     "end_location" : {
                        "lat" : 22.4510371,
                        "lng" : 73.06950669999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eNH64\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Paramount Cold Retreads (on the left)\u003c/div\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "yavgC}yk}LwAr@m@Zk@^}Az@i@^SLUPSRi@d@_@^k@j@m@v@u@~@Wb@_@f@oAjB{@nAcApAmCzD}@pA{@jAy@~@eA`A{M~LaA~@aAjA_C`DeCbDc@l@wDdF[\\]\\GF_@ZmBzAmCbC]ZkHtFo@`@o@^aGhD{Ax@iCtAe@V{GvDiBdAgBbAmBfAoBdAyCdBaJpFgBbAkCxAs@`@_Ad@}F|Cq@h@c@f@{@`AsBzCe@~@i@nASl@Ot@OdAYdCg@|EYzBCNWpBYdCOpBYpEWhCObAO|@WfAQn@S~@k@hCQlACPK~@MjAMz@Sx@Qn@eBtFQj@]nA_@fB]nBM~@]~CaAdLE^E\\cBdJYjBWdBS~Ba@pFm@hJAZCr@C`CAdAErDAx@C`GGrIAf@CfFAlDAr@C~@IbAAL?JCTMt@Mf@Up@A@[r@_@r@eA`B{@hAo@v@}@`AyA`BmH~I_@^WZ]\\aBhB_BdBEDq@v@MRMRy@lAIJY^SXA@mAxAUXYVe@f@i@d@c@V]Pc@RYJ]Ps@Vk@Pk@TKBwI~Cs@ToAVoAPqALiAFG?O?K?a@?u@?uAGw@Ik@GcAO_AS}@SQEICcD}@"
                     },
                     "start_location" : {
                        "lat" : 22.4004513,
                        "lng" : 73.1383896
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 843
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 198
                     },
                     "end_location" : {
                        "lat" : 22.4551346,
                        "lng" : 73.063166
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eHigh School Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by the park (on the right)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_~_hCmk~|LI`@e@lB?@Mn@Id@IXAJC@MP?@CVCn@A\\ATERADCFEJQ\\EJKZEREFS\\[`AUhAO|@EHQj@Sp@ININURMJ]PkEnBqAz@MP[^UVSRWN[F"
                     },
                     "start_location" : {
                        "lat" : 22.4510371,
                        "lng" : 73.06950669999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 402
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 76
                     },
                     "end_location" : {
                        "lat" : 22.4580065,
                        "lng" : 73.06105149999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at Jay Ranchod Vegetable And General Store\u003cdiv style=\"font-size:0.9em\"\u003ePass by Bank of Baroda ATM (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qw`hCyc}|LF^w@Re@PMDSJQLGFKH[HE@k@RQHMHML[TGHKFQPSRUVOLC@KHa@XcAr@s@^"
                     },
                     "start_location" : {
                        "lat" : 22.4551346,
                        "lng" : 73.063166
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "4.5 km",
                        "value" : 4455
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 329
                     },
                     "end_location" : {
                        "lat" : 22.4383373,
                        "lng" : 73.0239478
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at HDFC Bank onto \u003cb\u003eTarapur-Vasad Hwy\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Narayan Stationery &amp; General Store (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qiahCqv||LR^JRfAnBr@jA@BfAfBpBhDFLP\\JRp@pA~BxEP^LZLb@Pl@BH@Dr@hCPn@V|@p@lCbA|Db@dBBD^pA^bAZn@Xj@@@X^h@v@dAvAzAjBnEfGFFHLPVtE~FdFzGlLdOpAfBb@f@p@t@B@bAjA`CpDt@rATh@N\\Tt@ZdAFT\\tAd@pBRv@^zAnBvIJ`@l@dChA|EBJrDlOnBjI|AvGbGnTb@pALd@"
                     },
                     "start_location" : {
                        "lat" : 22.4580065,
                        "lng" : 73.06105149999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "10.1 km",
                        "value" : 10094
                     },
                     "duration" : {
                        "text" : "8 mins",
                        "value" : 500
                     },
                     "end_location" : {
                        "lat" : 22.4115069,
                        "lng" : 72.93200950000001
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eTarapur-Vasad Hwy\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Param Farm (on the right in 500m)\u003c/div\u003e",
                     "polyline" : {
                        "points" : "sn}gCunu|LdBtGh@rBTr@l@rB|A~Fv@|ClBxGH\\HZp@dCf@~An@`CHZr@jCp@~BNj@BHRp@J\\ZdAL\\Tx@Pt@^nAbAnDf@hB|AvFnAtE?BX`An@fCd@~ApBlHRl@pCtJtCpJl@rBnB`HNj@pB~H~BfIRh@Jb@L`@J^J`@zCrKPr@hA`E^rAd@`B\\nAj@zBBJDJNd@Nf@Tx@z@vCbApDDPFPhDzLv@lC\\pAz@tCXhAVbATt@Vr@N`@Rh@Vf@j@`AZb@@Bj@t@Z^b@d@x@z@^^Z^^f@TXV`@T\\Vf@Tf@Rh@Lb@Ln@J`@Jh@DXD`@n@xDDPF\\nArHvD~UX~AbD`S`FhYlAdGF`@VxAX|AVtAj@vCb@~BTnAH`@ZbBRdAdArGNz@b@xBP`AJp@z@|Ej@~Cj@fDXtARfA~BnMt@`E@FF`@p@rD|BhMVxATpAfAdGP~BBl@@d@?~@Ah@Cn@GnAU|B?Bq@rE}@xGo@pEsA`Ke@hCs@~C"
                     },
                     "start_location" : {
                        "lat" : 22.4383373,
                        "lng" : 73.0239478
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "5.4 km",
                        "value" : 5369
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 251
                     },
                     "end_location" : {
                        "lat" : 22.4178307,
                        "lng" : 72.8862171
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eBorsad Bypass Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Gujarat Gas Station (on the left)\u003c/div\u003e",
                     "polyline" : {
                        "points" : "}fxgCapc|L_@tAWz@{@bCUp@KTw@dBGJu@zAaEzH_@l@k@fAwD`H{C~Fe@~@s@vAcD`G]n@]n@k@`AaE|HSb@U`@k@`AINGP_CjEsAbCw@vAyAlCqIfPu@rAq@pA]n@}@~AkAvBy@dBs@fBo@nBc@vA[tA_@jBQhAWxBMvBEn@Cn@EvDDnCL~BRtB`@zCP~@hAdGH`@H`@jBbKJj@Lh@Nj@v@bDdAjDbA|Cv@hBfB`ElCxF`AfBPZHPJNrFxJ|ClGv@~AJVJVdA|ChAfE"
                     },
                     "start_location" : {
                        "lat" : 22.4115069,
                        "lng" : 72.93200950000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.6 km",
                        "value" : 2590
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 130
                     },
                     "end_location" : {
                        "lat" : 22.4145597,
                        "lng" : 72.8612806
                     },
                     "html_instructions" : "Merge onto \u003cb\u003eNH 751D\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Gujarat Agrotech Borsad (on the left in 900m)\u003c/div\u003e",
                     "maneuver" : "merge",
                     "polyline" : {
                        "points" : "mnygC{qz{Lv@lFb@xGz@tMF|@ZvEjApQXvDFbBD|@TjEF`Av@vNZtF|ArVn@|HRjChA`P"
                     },
                     "start_location" : {
                        "lat" : 22.4178307,
                        "lng" : 72.8862171
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 191
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 28
                     },
                     "end_location" : {
                        "lat" : 22.4142007,
                        "lng" : 72.85947550000002
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eDabhasi Rd\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "_zxgC_vu{LJNBFBHFd@Fh@Fj@Ft@N~BBR"
                     },
                     "start_location" : {
                        "lat" : 22.4145597,
                        "lng" : 72.8612806
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "8 m",
                        "value" : 8
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 4
                     },
                     "end_location" : {
                        "lat" : 22.4141665,
                        "lng" : 72.85953889999999
                     },
                     "html_instructions" : "Sharp \u003cb\u003eleft\u003c/b\u003e at Dabhasi Bus Stop onto \u003cb\u003eDabhasi Rd\u003c/b\u003e",
                     "maneuver" : "turn-sharp-left",
                     "polyline" : {
                        "points" : "wwxgCwju{LDK"
                     },
                     "start_location" : {
                        "lat" : 22.4142007,
                        "lng" : 72.85947550000002
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 487
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 85
                     },
                     "end_location" : {
                        "lat" : 22.4110638,
                        "lng" : 72.85661899999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eDabhasi Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Aadhyashakti Agro Factory (on the right)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qwxgCcku{LRBTJp@\\lAr@JFxIdEHFDHlAdG"
                     },
                     "start_location" : {
                        "lat" : 22.4141665,
                        "lng" : 72.85953889999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 863
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 124
                     },
                     "end_location" : {
                        "lat" : 22.4075739,
                        "lng" : 72.8493254
                     },
                     "html_instructions" : "Continue straight",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "cdxgC{xt{L@TPvC@NLrBN|B@PDJDHzArCpA`ChDhGhE`Iv@vA\\^"
                     },
                     "start_location" : {
                        "lat" : 22.4110638,
                        "lng" : 72.85661899999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 km",
                        "value" : 1182
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 221
                     },
                     "end_location" : {
                        "lat" : 22.4116081,
                        "lng" : 72.8395898
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBochasan Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by PRACHI GENERAL STORE (on the right in 400m)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "inwgCiks{LOdB@`@AVARAPADEHIRKXIXEXG`@ARAPE|@A@UnAAFYnAA@Sp@ABCH]fAc@hBSdAS~@Oj@WfAOj@Oh@SdAGj@Gp@AP?T?hA?N?V?D?N?jC?JCNCLEDA@IH]Re@Vi@V{Av@q@XEBi@PG@]J_@HKDSH"
                     },
                     "start_location" : {
                        "lat" : 22.4075739,
                        "lng" : 72.8493254
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 420
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 45
                     },
                     "end_location" : {
                        "lat" : 22.4113243,
                        "lng" : 72.8355541
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at Bochasan Bus Stand",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "qgxgCmnq{LLvAHz@HtAJjADr@HrAFx@Bt@Bb@?v@?\\Al@AVCTKb@"
                     },
                     "start_location" : {
                        "lat" : 22.4116081,
                        "lng" : 72.8395898
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "22.1 km",
                        "value" : 22128
                     },
                     "duration" : {
                        "text" : "20 mins",
                        "value" : 1195
                     },
                     "end_location" : {
                        "lat" : 22.4954597,
                        "lng" : 72.6454038
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e at Irfan Blanket Shop onto \u003cb\u003eNH 751D\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by the gas station (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "wexgCeup{L?NEh@KnAQ`Bw@tGGl@qBlOETGd@cAtGoAhISrACJe@tCQhACJcA|Gy@tFc@pCo@bFKp@UnB_@rCYnBO|@M`AiBnMcAbIaAzG{AzMo@pKa@zFo@dKEn@ExADzC?v@?Z?Z?L?TAb@Cx@KxAyB|NKt@Mt@}@rG}Dl[AHE`@_J|n@o@hFGh@AFWxBqA|JYbCKt@m@bF?@CLAL?@ALKt@_@lCMz@}@|H]zBUvAmAtGm@lDOx@qA`Hu@nEMp@c@|AOd@Wt@Un@wAhD{AjDcBtDa@v@sA|C_BrDgCrFwA`DqBlE[t@_@|@AB[p@cA~BoAnCsAxCyA|CgCnF_ApBUd@GPILEHiAdCw@|A}@lB_ArB{@bCe@~AMd@ERkBzHs@xCyA`G_A~CQd@S`@eCzFa@dAwAxDuArE}DbOeBzGCFwJ`[{CfKw@dC]fAg@hBABOd@KVELq@tBs@lBq@pBITYv@Od@_@z@i@lAqCnF_FxJ}AzCsCdGsCdGaAfByBbEILWf@oCfFwDxGuBbEYb@Wd@S`@mAzBgDjGsDbHeAjBc@v@cA`BoBtDyAbCcBnCaAzAo@bA]l@oApBOTaAzAW`@}EzH_GfJs@hA[f@e@x@uB`DSZi@~@o@~@QXkAnBo@bAw@jAk@|@aEpGm@~@qClE{@xAQVILKL]h@oBtCeBhCw@`Ao@|@uAnBuAnBsFvIINKPQVYd@aA~A_@l@Wb@{BnDg@|@aA|AYf@_EjGQZyDhGsI~MwCxE{@nAeCxD{AtBkAxAoA~A[b@i@p@eHbJqCjDeCdDu@dAeBbCu@bAo@`A_ChDq@`AaCjDMR]f@s@bAs@fAY`@U\\u@fAk@v@s@~@iBdCyAvByAtBMLq@~@QVaApAA@{ArBKLKLy@dAu@fAEF_@j@uBlCW\\}@nAg@r@kCpDaBvBKNoBtC{@tAkA|Ba@pAAFCJI^IXIb@CPEZG\\Gn@EZKhAADMxCCXGhAMzBCRGbAYbEYhHIfBOjCMrDO|CCXANCz@KlAEn@EhAEx@AXItA"
                     },
                     "start_location" : {
                        "lat" : 22.4113243,
                        "lng" : 72.8355541
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.7 km",
                        "value" : 2671
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 180
                     },
                     "end_location" : {
                        "lat" : 22.4991693,
                        "lng" : 72.6201597
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e2nd\u003c/b\u003e exit and stay on \u003cb\u003eNH 751D\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Ajay Panipuri (on the right)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "sshhCwpkzL@?@?@?@??@@?@??@@??@@??@@??@?@@??@?@?@?@@B@B@B?D?B?DAB?DCBABABCBC@ADADAD?D?F?F?D@`@@`@B^BZHlAJ~AHxAHdB@z@?VAV?ZCZAXCRCVETEVMj@Ov@Ot@mBfIQp@WfA[tAoAlFGRm@fCcAjEi@zB_@rAK^GTw@pD[jBQjAOdBGnAEtAEjBEnAANA\\E~AANGfCKhFKvDQvFElCElBItCElCGdCGdC?J"
                     },
                     "start_location" : {
                        "lat" : 22.4954597,
                        "lng" : 72.6454038
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "18.7 km",
                        "value" : 18743
                     },
                     "duration" : {
                        "text" : "16 mins",
                        "value" : 943
                     },
                     "end_location" : {
                        "lat" : 22.4929779,
                        "lng" : 72.44699729999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eNH 751D\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Hotel momai (on the right in 10.1 km)\u003c/div\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "yjihC_sfzLElCItCAfBIpCEnCAlAIhBEpCEfAAf@Ab@Ab@GdCGtDM~DEvCIpDIbDAf@GxCIdDIzDAr@GtCI|CIhDE~BCx@Ct@?JCjAEvB?xB?nA?JDhBLtF@|@?B?R?R@JJbD?DF~BVfLr@|WDvAAzA?bBIxAQxAKt@E`@Ij@W`BIt@SvAQpAM`BCh@A~@An@G~GE`E?ZAjCAvCIhM?XA~DEhEA~AA~BAnA?XCpC[`HOzAMbB_@zDGr@]fEEf@G`@WtC?DGn@KhAC^a@`FOfBQbCKdAIbAUjCEh@ATGj@}@nKI|@AREd@Ed@AZI`AUlCMrA_@lECbBFvAT`B^tAf@nAHNHPHRlE~KzEpLl@xAnGvOv@pB`AbCn@dB~@|Br@lBx@vBx@rBZz@Rf@Zx@p@~At@nBr@jBv@vBt@dBVn@BDXt@FN\\`ABD\\z@Vl@LXJTTh@L^Nf@Nj@Jd@BLHb@BR@HD\\@X@X@\\B^A`@EdAI`AKr@Q|@uCpLq@rCYlAI\\a@dBOj@U|@u@fD_DlM_BtGo@zCqAtFaA|DW~@U|@oArFg@pB_@xAW`Ag@xBi@xBKf@On@}@vDoArEs@tC_@zAYjAe@lBKf@iFfTALKb@?@On@?Bu@xCuAbGCHg@xBQv@Op@WdA}@`EoApFKj@qB|II^WdAa@nBmDhQo@zCQz@ERCRCHOnAIvABtBLjBTnAfAbEDL`@xA|@tCDNL`@Nj@Rr@Lb@XfAbDtKbEbO`Kx^`CvItAdFxCdLzAtFlDhMj@rBtAbFHXPf@Pv@Tz@hGzSfA~D`ErNn@nCrApFbBfHzCbMbB`HlAfFBJFVJ^Lp@Px@\\zA^|A`@hBNdBDl@Ah@Af@C^Kn@Ol@?@Oj@M\\MZ]`AQZMX_G|Lw@`B"
                     },
                     "start_location" : {
                        "lat" : 22.4991693,
                        "lng" : 72.6201597
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 2044
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 125
                     },
                     "end_location" : {
                        "lat" : 22.5024777,
                        "lng" : 72.4299642
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e to stay on \u003cb\u003eNH 751D\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Jay Bhole Hotel (on the right in 400m)\u003c/div\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "cdhhCwxdyLcAtBmB~D]p@iIlQO\\Q\\iK`UwClGMXMVkAdCeCxFIR_BtDoBpEIRO\\Q\\q@xAkA`Ci@fAUd@[r@_ApB"
                     },
                     "start_location" : {
                        "lat" : 22.4929779,
                        "lng" : 72.44699729999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 250
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 64
                     },
                     "end_location" : {
                        "lat" : 22.5011467,
                        "lng" : 72.43187949999999
                     },
                     "html_instructions" : "Sharp \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-sharp-left",
                     "polyline" : {
                        "points" : "o_jhCgnayLPCDA@?FGBA^s@p@sAnA_CFOx@wA"
                     },
                     "start_location" : {
                        "lat" : 22.5024777,
                        "lng" : 72.4299642
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 km",
                        "value" : 1093
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 226
                     },
                     "end_location" : {
                        "lat" : 22.4942055,
                        "lng" : 72.4247161
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ewihCgzayLJDb@Ph@J^Jp@XpAx@\\Rh@\\t@d@\\X`@X~A`AxAnAPRLXTl@Pd@HPRb@j@jAf@|@Zv@FTJb@HZLZLVPTt@r@jAdAt@t@n@r@p@z@b@h@b@f@f@`@f@f@`@^"
                     },
                     "start_location" : {
                        "lat" : 22.5011467,
                        "lng" : 72.43187949999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 653
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 185
                     },
                     "end_location" : {
                        "lat" : 22.4961172,
                        "lng" : 72.418784
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Rampura (on the right)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ykhhCom`yLYl@Yl@[t@{@fC_@bAa@nAKd@Kn@EZGt@m@hEI`@ITUj@M^EPETEZG|@I|B"
                     },
                     "start_location" : {
                        "lat" : 22.4942055,
                        "lng" : 72.4247161
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.5 km",
                        "value" : 1510
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 175
                     },
                     "end_location" : {
                        "lat" : 22.5093255,
                        "lng" : 72.420078
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by JAY SHREE VIHAT AUTO ELECTRIC (on the right in 1.3 km)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wwhhCkh_yLc@C[Cg@Gi@Eq@Io@IgAOi@Io@KWGKEMIOIo@a@s@YwAk@m@UMEIAKCG?IAK?K@YBWD]Fe@Ho@Jw@Le@JG@YASA{@Ek@Cg@E_@Ec@EuBQaAGeDWW?S?c@BY@gAFo@BO?WCg@C_@C}@Mw@G]E]CO@U?Q@QBODOFMD[PUHIDG@E?G?I?G?M?w@GoDW"
                     },
                     "start_location" : {
                        "lat" : 22.4961172,
                        "lng" : 72.418784
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.5 km",
                        "value" : 1460
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 121
                     },
                     "end_location" : {
                        "lat" : 22.5181846,
                        "lng" : 72.4095971
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNH 751D\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by દિલીપાર્લર (on the left in 1.3 km)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ijkhCop_yLeDjEaAnAmAzAeDhE}@fAeHjIgAxAg@n@e@h@U^cIdK{@lAqBbC[\\UTORc@h@c@j@u@x@a@b@i@p@"
                     },
                     "start_location" : {
                        "lat" : 22.5093255,
                        "lng" : 72.420078
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "27.5 km",
                        "value" : 27511
                     },
                     "duration" : {
                        "text" : "22 mins",
                        "value" : 1348
                     },
                     "end_location" : {
                        "lat" : 22.6449561,
                        "lng" : 72.20647339999999
                     },
                     "html_instructions" : "At \u003cb\u003eVataman Chokadi\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eVataman Cir\u003c/b\u003e, take the \u003cb\u003e2nd\u003c/b\u003e exit onto \u003cb\u003eGJ SH 8\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Jay Somnath Tour and Travels (on the left)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "samhC_o}xL?@A@?@?@?@?@A??@A@?@A@?@A@A@A?A@A@A?A?A@A?A?A?A?A?A?A?mAh@OHaCrAWZs@d@YLqAn@{BhAqCvAqB`A}Az@wEzBa@XgB`A_Bt@oBdA{Ar@wAn@_CnAyFtC_CjA_Bz@k@Z_EnBsCzA{CxAeCpA}Av@uBhAqB`AeBx@C@eAh@KFq@\\uDlBmCvAmGdDKFaDbBgIfEsBfAqGjDcObI{Av@iFnCiE|BgFnCIBUHM@OFeLdG_EtBmDhBaBz@{@d@OHSJU\\i@Zo@j@OTUh@Ep@D`C@^APCP^hKDhA?@?JFlAXjIx@lVPxF`B|e@l@fRn@vQj@be@@lD@^Zn[l@ji@XlSHvHVpTFtBBt@?HAJJvF?rABzBB~Ab@|TX|Ob@lKh@dMVxFDlAB`@BPDbARvE\\pHBbD?T@TAXAXCr@MdBUvAs@pDs@`Ek@vCGXw@hDw@dDYdAIRIb@c@hC{@~Dy@dEo@zCkA|Fy@tEq@dDk@hC_A~BeAhB}AfBcCdCMNKHGHEDEBCFABABg@h@s@p@sDbE_GnG}EpFiB`BaB|Aw@n@iIbHEDg@`@a@ZgA~@gFvEgG`H_GtGmE~EcDpD_AdAkI~I{DlEkD~DwEnGsBhC{BhCyCbDqCvC_CxBkFvF{@dAu@|@mCzCcFhFCB_EdEqApAa@`@Y^k@h@]\\aA~@SRIJQNSRQRSRKHIHMLMJ}@`Ag@d@KJKJmHjHYZIHY^oHxHm@l@c@d@MLq@x@KHq@t@yBvBs@`AA@]^[^kAnAcChC{FjGyDhEyA|AiFtF_@b@sEdEeKnJ}K`KqJ|IqH|GuJdJqBzBiBpBwIdKuG|HsEpFuBbCq@v@mN`PyAdBuFpGcExEo@|@o@r@u@z@sDjE_DpDuChDaBjBSTk@p@gAtAaCrCoDjEaCnCkAxAkAtA}F`HcDtDqErFuBhCeApAyChDoAzAmC`DqChD_BlBsH~IuA~Ak@r@cAlAgBrB{AfBsDjEsEhFiBzBeE~EiAlAw\\t`@"
                     },
                     "start_location" : {
                        "lat" : 22.5181846,
                        "lng" : 72.4095971
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 763
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 91
                     },
                     "end_location" : {
                        "lat" : 22.6413897,
                        "lng" : 72.20027840000002
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNH47\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by SONU TYRE SERVICE (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_zeiCmyuwL@?\\T`@\\ZZRZRd@JNNVFFB@TPx@p@h@j@\\d@BDh@hADLb@fAZt@|@jCZz@JZHPHV`AtC@F@@XfAR~@Lh@DTFVBL@B"
                     },
                     "start_location" : {
                        "lat" : 22.6449561,
                        "lng" : 72.20647339999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "6.7 km",
                        "value" : 6741
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 537
                     },
                     "end_location" : {
                        "lat" : 22.6819966,
                        "lng" : 72.1535147
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at Krunal Panparlar &amp; Koldrinksh onto \u003cb\u003eBagodara Nalsarovar Link Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Priyanshi pan parlour (on the right)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "uceiCwrtwLMDUPIJWXQJc@X[RQNEDGF[`@sAvBQXQXQVy@tA{@tA[f@yBhDi@x@GLOXaAtBgA~BeAzBkAbCeArBq@jA{@pAsIbMCBqBpCuApBU^KPGLENa@zAqAvEcApDUb@GPOb@oAdDQ`@aAdCy@vBO\\IPc@|@_B~CsBzDq@lAeB`D[j@wB`Ew@zA{ArCe@v@{AvCoA|BIPKNs@tAw@tAs@tA]r@S\\k@bAKTU\\_ArAaAvAcCrDiA|Ao@x@w@x@q@t@q@z@aAfA}@bA_@`@WZoBbCa@f@_AfA]Vc@TeChAmLlFuI|DsAn@SJMHML]\\g@j@kBvBaBfBs@t@o@r@uC`Di@l@y@~@}AbBm@p@oAxAu@t@OT[ZcAhAk@p@_AbA_@\\i@^gAl@i@ZkDpByD~ByA|@g@Zc@Va@RyCfBmDrB_Af@_@N[LUFk@PYHYFi@Lm@Po@NmAZ"
                     },
                     "start_location" : {
                        "lat" : 22.6413897,
                        "lng" : 72.20027840000002
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "10.2 km",
                        "value" : 10202
                     },
                     "duration" : {
                        "text" : "17 mins",
                        "value" : 992
                     },
                     "end_location" : {
                        "lat" : 22.606939,
                        "lng" : 72.1224727
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at SHIVSHAKTI TEA STALL onto \u003cb\u003eKaliveji Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Dhyey chavda's farm (on the right in 7.4 km)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "oamiCmnkwLBFFRBLVn@z@bA~L~N|KrMl@n@@@bA~@@BbEhDjJjI|DnD~IxIr@r@nDjDhRpRlLnL`C~B|GpHb@v@`BzFpE|OfAfDhAtDz@zCl@~@`FzG\\X\\BfC]fCkCPSd@MxAi@`Bo@NGl@[PEH?|@JT?dHNF?vILz@@vKh@vN~@fBPhCV`@D|@NpCl@hCp@fHhB|Cp@p@NhB`@|Dt@~@BN@dAA`CIpCIdB?lDPrBHzFDF?~EVbBH|AHZB~DGD?xE]|CUjFKnDKZ?nC@|BA`AAt@@pB@\\BlDPtFNjDDxCN|ALl@Gv@Q`@C^CxC]^B\\HBBb@`@`AVVBn@CpBGdA?p@BdCJF@@BBDDPFTJXVj@RX^j@vAzAx@`AFHx@|@tB|AnDlCLJZNHBJFd@HJ@xCFrHSlDQ`Eq@n@UXMp@]LMDKBE?E@EACCQm@wDGi@?O?M@O@E@IFQDKBI@A@A"
                     },
                     "start_location" : {
                        "lat" : 22.6819966,
                        "lng" : 72.1535147
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "33.0 km",
                        "value" : 32966
                     },
                     "duration" : {
                        "text" : "33 mins",
                        "value" : 2000
                     },
                     "end_location" : {
                        "lat" : 22.5745701,
                        "lng" : 71.8082977
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eNH47\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Jey mataji (on the left in 32.8 km)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kl~hCmlewLRGH^V|AFb@XhBJn@Lt@`B`KFb@b@dCTrARjAZnBRn@Ln@b@tCxBbN~BzNDXf@`Dd@zCJn@Dx@Hn@Jh@?B@B`@nCTvAZpBDRV`BLj@hA~ENl@^`BJb@xBlJhBhIdArDBFjAjFDNj@`Cn@tCv@bDpA|FRv@Lp@n@nCf@xBl@hC@HvAbGj@bC|AxGtBlJxAlGr@xClApFVbAn@nCdAvEhA|EnAnF|@hEnAhFf@hBH`@t@zDb@fB~@dEfA~E`AfExAnGlAjF~@dE@DR|AVhAH^`@pAZbAp@fCTj@Vv@bB`Fv@`CbB|Er@tBDJzAhEt@vBtBlGx@|BfChHd@tAL\\pB~FpAvDrA|Dv@~BXz@nAvDbAvCrAvDZbAdAvCpB`GdA|ChBrF~@nCDJdAdDLb@TdATzA\\pDPjC^rCP~A?@NtAJdBXfDL~@LhAN|AL|B^|DZrDXfDRvBLnA^hE^~Db@pEV~Cp@hH\\zDx@hJ~@bKRrBBTn@`HV~Ch@zF\\lEl@rGTbC`AlKNdBTdC\\xD^lD`@zEr@fI`@`E`A`K\\`E`@hERbC`@nEf@`F\\xDHx@XvDThDFn@XrCRtB?@Jp@VfCNfBDj@@`@@T@h@AbAAJqD~v@_@|Gm@dMMrCo@vNKpBOzDi@lLIpAOnDYdGCj@MjDO`DIrBM~BGvAA^GfAKdCOfDM|CGxAC`@?d@@z@AZEf@QvDElAE~@_@nIMtBIdBGxBGxAG|EEnFM~DEtCApAAnAKxMCtBAvA?REhD?TClFIlGGxE@v@@`@N`AF~@?b@?zBAb@GTSt@EXAh@CfBAtCCxD?HCrEAtA@f@Bf@BX?Z@VAbAEnCAx@?f@ApBArA?zAClBAvAAx@EtA?jA?z@?f@EpHCdRCjCA|ACvFCh@Ab@CjBChD@pD?nBCt@At@@h@@d@?V@P?XAj@Cl@?hBAjA?vB?rC?n@?f@Ah@?XB\\BV@X?XCdQAdC?`EE|K@nDBfIAtk@?zMCpWA`[C~aA?fG@xD?~C@zM?lY?fV@tB@~G?fA@|F@jE@vI@tH@bH@bG@tI?`@?V?`@@fF@lG@~F@rF?`ALti@BzI?tA?bC@~B?zC@hF@rH@jC?VBzG@jD?zCD~L?tD?N@~G@jDBfK@hBAr@Gt@Cb@?z@B~EBbF@fA@xB@jE@bD?lBAz@@d@@DHh@Jj@Hh@Dh@@h@?@?bD?@AfA?V?~B?x@?r@GtB"
                     },
                     "start_location" : {
                        "lat" : 22.606939,
                        "lng" : 72.1224727
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "34.0 km",
                        "value" : 34015
                     },
                     "duration" : {
                        "text" : "38 mins",
                        "value" : 2261
                     },
                     "end_location" : {
                        "lat" : 22.5381516,
                        "lng" : 71.483908
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e2nd\u003c/b\u003e exit and stay on \u003cb\u003eNH47\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Akshar complex (on the left)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "abxhC{`huL@B@@@@?B@@?B@@?B?B?@?B?B?@AB?@ABCFCD?p@FfHFhDAbACZG\\Id@Gb@Cj@CfA?bB@t@Dn@FbA@NP`BNbAJ^ZvAj@dDxAjJ\\vBFr@@t@Bh@Jt@XlA?@Nb@JZHRVrAh@dD|@~Fr@lEn@zDlA~HZvBZrCJt@PpAd@vC~@fGd@dDZdBX~BL~@\\hBDp@Hb@Hb@ZxBZvAXzBRbAj@fD`AzGpBdNl@~BTnANp@R`ALfADf@JpABjA?r@MzJQhOElD?h@EvCG|GItBEtAApA?lB@lBClFKbG@hBHzATrCZfCp@nFtAnLf@zDh@lC`ArChAhD~DfKbEtK|@`CV~@\\vAD\\BRBV@X?VBbA?n@E~Ba@vP@~@Bx@@j@Cd@AbAm@tYGnBQfGOlGGfCG~@Iz@KfAGzAK`DGrCOrFIrDM`FGlBG~BAp@A`@InCKlFIvDEfBCv@OpHC\\Ap@Cj@E`BALKdFObGI~CYvMGnBGlDUjIOdGUpHGhEGhBCvAIzEE|AI~CATJpBCxBCbAKjEEz@MfGGbCEzB?hADnEFlDP`NFtCT~N?f@ExE?fAXlPTtMHnEPxJ@\\JpHLxG?@@~@F`DRfMBrAFbDHxELxH@RZ|PF|DR|JXpPX`P@PPlDTlEBZDp@H`ARjA`@lCdAnHF^R`B^tC@D^nCb@`DL`AXhBB^?PETEb@TnBLz@^fCd@|CNbATjAJl@|@zFz@rGzA|KlAtIj@vDNfARrA^jCb@xCh@nD|AlKv@lEf@|Bb@vCnDdVv@tFhA|IJn@Ff@BR?P?^@^@ND\\Fr@VjBzC~T~@pGdCnQjChRhBnMbB|LFb@Fd@zA`Kp@~EJt@tEr\\PhAv@vELh@xBzJf@vBXrABH\\vAj@nCPz@DPn@hCJb@rBzIl@jClEtRt@tCL^R\\Tz@XdALp@Pr@Rz@Nd@Rt@Lh@~@hEXxANhAD~@FdA?zAEpBQfKCtCG`BC|@Af@U~DGnCGhECjDLhCl@dGFj@n@pHFh@f@rF`@tE\\fDRnBZhDZlCP`Cp@xG^nDdBrRrArM`@tE`@jDd@`D^~CZlC~@fJRtBb@jE@FX~BHn@?BHhAZdEb@nETxBHnB@V?tAEZM|@Gn@Gl@}@zNc@nGShD_@jGOdCSxCQjCQvCqG~dAm@zIUtDo@~JY`FAj@C`@?~@BnAFr@F`@Jf@Nr@\\vBp@hDb@|BN`Ax@vD?BvApGt@rCz@hEf@nC|@tEZzAH\\`@bBXbBHz@b@jCbCdMtEnVPt@XfBLvA@XDtB@tBBrA?|@@lB?hDB~GDdF@jFCx@"
                     },
                     "start_location" : {
                        "lat" : 22.5745701,
                        "lng" : 71.8082977
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "11.4 km",
                        "value" : 11416
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 613
                     },
                     "end_location" : {
                        "lat" : 22.5246809,
                        "lng" : 71.37691169999999
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e2nd\u003c/b\u003e exit and stay on \u003cb\u003eNH47\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by the gas station (on the left)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "m~phCmuhsL?@@?@@?@@??@@@?B@B?@?B?B?@?B?B?@?B?B?@AB?@AB@Z?^?vA@`B?TBfC@`@@vA?jB?n@@lP?d@AXCLGRIZB~EB|DDtIBhD@zBBdEBvDJtJ@lB?V@jD?dBEhBEfAO`EOjDOpEM`DIlBA`@Cd@QxE]xIQhFI|BOzDOrEMxCCh@g@xGIxAEl@GxAEpAMbDQdEOzDMhDOdE?@O~DGpAA`@QrEQ`FMdEY|HOhDWdHGzBMnDGtBEnAElAC~@AZA|@@r@B|@Dr@NbADRBLRl@d@xA|BtGtB|FrAvD^dAz@bChA|CRh@d@rAbArCl@dBfBbFRj@~CzIRf@|@`CxAhEjA`DpArD^fAVn@l@bBl@bBx@~BvAxD|@bC|AlEt@vBBFnBlFp@lBlBhFt@tBjAbDv@xBvAzDr@vBrArDx@|BrEhM|AfEf@zAd@zADNJh@D^BZNfBBd@b@fGPzB\\bF?Fb@|FZtEf@`Hb@xGX|DHvAL~BBbAA|AqAl\\GbBOdFKlBAn@?bA@tAC|AClCBbC"
                     },
                     "start_location" : {
                        "lat" : 22.5381516,
                        "lng" : 71.483908
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "33.7 km",
                        "value" : 33695
                     },
                     "duration" : {
                        "text" : "39 mins",
                        "value" : 2316
                     },
                     "end_location" : {
                        "lat" : 22.4220737,
                        "lng" : 71.09082359999999
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e1st\u003c/b\u003e exit and stay on \u003cb\u003eNH47\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by satya sanataniya ashram (on the left)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "gjnhCuxsrL@F@H@F?H?H@F?H?HHXLt@Jd@F`@Ff@?`@Eh@Cf@Ad@?\\BPDd@T|@XhA\\rAfB~GdBzGJ^Nn@Nr@Lt@N~@P`BHz@@PdBfPZjB\\bB^~A~E|SpH~[Tr@XbA\\`AJRFPHNJPHPJPLRLPNRdAnA`@h@~BtCfGnHpBdCr@bAjB~BfApAx@dAl@t@rC|D`AzAxBdD\\f@bEnGjAzBFH|AbCrApBfAfB`AxAjDnFHN|CvElAlBxCvE`B`CpDvFlAtBb@v@^z@vAnDTl@`AtBjAhCp@zAj@pAVn@Pf@Pf@XbAZrAb@lBhAvEh@|Bn@tC|@pE`AdE`@fB`@pBv@zD\\vBVdA`@lB`AlEh@zBd@vBZxA`AjEx@xDv@hDjBjIJb@vBxJZlAf@fBXv@@DZ~@r@pBd@dAb@~@^j@NRzAtBnBnCjA`Bh@x@DHf@|@DHDH\\r@BD`@x@n@lAd@t@fB|BvAhCnD~GlEvHbDzFzB~DzB|DfB|CbD~FFN|@~AR\\f@~@Tb@Vl@Rn@DJT~@VjAL|@X|APnAf@pCNf@Pj@\\x@DJN^d@p@f@r@B@X^hAtArEtFp@~@hApBz@jBp@xAdKtTnBbEhAdClBxD~C~Gv@fBlBbEx@dBd@dAbAvB|@hBd@dAP`@HRZh@b@r@v@hAdDtEvDhFf@r@hAzAxArBfFbHdCjDrMxQnAhBhI`Lt@fArCxDtAlBPVbVp\\l@x@zAvBbAtArBtCbDnEtBrCDH^f@jDxEtBtCdAxAdAxAfAvA~@pAtBxCz@jArBrCdBfChArATXh@n@\\d@z@pAx@nAnAbBr@bApAhB`BdC~@rAV^JLV^T\\PZXh@\\~@XbANp@@FLd@T`BBLL`AXrBTjBXpCRdB?DFT@F\\`Al@vBRt@VjAV`At@tBXx@lBrFnD|JNb@dEvLb@nAj@~AL`@b@nAn@fB^dA|BtGfA~Cn@hBt@tBVp@hAdDDLFP\\lA^rA\\jAHV|@|Bf@hA|AlDrAtCzAfDfA`CHP^z@`@|@bAvBnAlCf@fAh@lAx@hBTd@r@~AVl@tDhIFPp@tA?@fA`ClAjCTh@b@z@BDRb@|@`BJPZb@Z`@f@j@JHZVXTZRb@Vb@Tf@Rn@Rj@LfBZVFjAP~AXfBZL@zAVbAPF@~@Tj@NPFZJp@TlAn@PHf@XNJPJRNh@b@b@d@PP`@d@^j@dAvAPVRb@Xj@l@hAp@jAJPvCrF~AvCBDFLDJLP~@fBR`@P\\HPL^JZDPFTLh@NdA@v@@XA`@KlAMt@Mh@Wx@_@`AUh@GNsBdFa@bAGNUh@uBtFq@bBA@k@rAe@nAKZOp@YxAKv@Gv@E~@?`A@v@Bb@D\\Hf@VfAl@bC\\vArAhFzAdG|@lDH\\t@tCJn@Fb@Dj@Bd@@l@?z@CfA?zB?Z@r@FzAJpAFf@Tt@R|@F~@B`@FdAJpANtBPfCDn@?@HfAPlDHzABPFb@Fh@Fd@Hb@Lf@J^H^Lf@Nh@Jz@Hb@Hd@Hx@Hj@LvARhBRxBJvANzAPbBXfCZlBZlBJl@Jv@PfAX|AZpBXhBLn@N~@Fb@Lx@VfBFp@B^HhBF`BBl@HvBJnBRhEJjBFtADx@@d@Dv@Bb@@\\@J?\\ARANAPCPATCPg@pE[fCIz@EjACnBEp@Cr@C^Az@@z@?`@DxAD|AFhB@F@\\\\|IBdAFtA@bAAv@?\\D`BFlBB|BHxAPdEB|@JtBNbDLzCJzAJjBd@nFJp@f@nD`@tCt@~E`@zCd@dDf@fDb@|CXjBFj@NnATlAHd@Hf@B`@@VCf@Ef@GXK`@S~@Kd@A@Kf@Mj@c@tBSz@U~@Up@Wp@{@nBUj@Wz@Oh@G^CLE^A\\ATAN?T?L@LDXFXJb@DRJZXr@Td@Tf@Xn@JRL`@DR@@FZD^Ff@Hn@BLJ|@ZxBBNz@bHn@`FNjBDf@?\\?x@CbAGtAE\\CPOj@g@tAi@vA{ChHqDlIO^Qd@O^i@zA_AvCa@pAm@hBu@zBe@tAa@nAWbAYfA_@bBENa@dBoBnIYjAa@`BQn@K^GZWtAK~@AJQpB_@|DALYnDU|ASnAUxAc@pBq@pCc@vBg@hCCHI^ADq@~CsBhI"
                     },
                     "start_location" : {
                        "lat" : 22.5246809,
                        "lng" : 71.37691169999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 542
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 89
                     },
                     "end_location" : {
                        "lat" : 22.4244198,
                        "lng" : 71.0862612
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by GIRIRAJ MOMAI Hotel (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "}hzgCs|{pL@H?H?FADQv@Md@ABY~@Yr@Ob@MXWd@O\\]x@q@zAaApBc@dA_AnBe@z@ILGFKD"
                     },
                     "start_location" : {
                        "lat" : 22.4220737,
                        "lng" : 71.09082359999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.5 km",
                        "value" : 2483
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 190
                     },
                     "end_location" : {
                        "lat" : 22.4293957,
                        "lng" : 71.06322349999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e at Mahakali bhel centre onto \u003cb\u003eRajkot Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRajkot - Ahmedabad Hwy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eNH47\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Rajkot Hwy/\u003cwbr/\u003eRajkot - Ahmedabad Hwy\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Balaji Two Slices Sandwiches (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "swzgCc`{pLa@x@_AlB{@bB_BdDi@hA_@hAKZIZMf@If@G`@Ed@Ej@EhAG`EA~GIpQ@fAAn@EbAIdAKnAQ`AQlAOfAOz@e@tBA@c@vAaBrFq@bCADgAhFOv@gAfFi@fCe@vBO`AAHM`AG|@Ej@AVA|@FfBPhCH`A"
                     },
                     "start_location" : {
                        "lat" : 22.4244198,
                        "lng" : 71.0862612
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "7.0 km",
                        "value" : 7022
                     },
                     "duration" : {
                        "text" : "11 mins",
                        "value" : 677
                     },
                     "end_location" : {
                        "lat" : 22.4058197,
                        "lng" : 71.0106564
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at Bamanbor police check post\u003cdiv style=\"font-size:0.9em\"\u003ePass by RAMDEV STUDIYO (on the left in 3.4 km)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "wv{gCcpvpLHBFB\\b@|@t@dBxAb@d@vAvB~B~C\\^HHx@z@|ApArC`CRPjCxB~@v@zDrC`Ar@PLvDrCdATx@Fn@BtDDpA@JBd@HFBn@Zx@j@|AxBl@`ALRr@|AZz@n@~BDLLf@Ld@Z`Aj@jBFRJZFRTt@FPX~@rAnFr@tCJb@P|@DPJx@Bf@Bd@?D?b@Ar@Ax@ItAE`AG|@A\\I|BGfAEt@AhAB~@AjB?b@@j@?JBj@Bn@Bl@Bt@Bt@BvA?X@z@@TDdBDz@Dz@Hv@?LFNDRNd@HRj@~Ah@xA?LDj@Vz@Pj@|@`Dl@vBJd@BNH`ABh@At@?@E^Kj@SjAKp@g@~CSjAAHMnAC^AD?Z?`@LbATz@Td@JPbAzAdBvBhAlA?@xAjA@@`Ah@d@Pb@HfATbD@p@?j@Ir@KNE`AQtAGjA?v@?L?|AJhAR~@RF@`A^PHd@Vh@\\ZTlAfAb@b@d@f@b@d@^d@b@l@j@lA`@|ADVJv@B`@@v@A`@Cl@MjA]dCY|BAFg@|DS|AKn@_ApHOfAQxACRi@xDg@bDc@tCE`@?@ARCd@?r@@z@HfALvANpBVbDPpB@PBTR~AThA?F@DAD"
                     },
                     "start_location" : {
                        "lat" : 22.4293957,
                        "lng" : 71.06322349999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "22.1 km",
                        "value" : 22118
                     },
                     "duration" : {
                        "text" : "29 mins",
                        "value" : 1759
                     },
                     "end_location" : {
                        "lat" : 22.3124544,
                        "lng" : 70.8323173
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNH 27\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by K g n Tyre service darbhanga hotel (on the right in 2.2 km)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "kcwgCsglpLhDlE|CbEbDnEbChD`@l@nC|Dv@fARTVZh@d@l@^p@\\p@Vt@P^JVFTF~D`AJ@~D|@`B`@nAVnAXxBf@p@N`B`@lAV^HdB`@vCp@|Bh@vA\\LDvCp@vA^jD|@`B^\\LVH|At@d@VZP@@bAt@LLVXZb@Zd@l@lAfAbCv@bBlBzDbAdBbDtFlBtCj@|@|A`CzEzHbAhBp@bBZj@b@~ATz@R`AZhAZhAT~@j@~Bl@|C`@zBPbAf@`DBTZ~AXhBJf@Nv@\\xBjBbKLn@Pz@Ll@`@lBJ\\Pl@BPLj@d@bBn@bCP|@~@`ETz@@FBFZrAb@rCj@xBl@xBVdARbAN~@^~A^zAXzAPv@TvAXhCThBPnAJt@T~AJ|@ZnCLnATfARz@Rn@Vt@NXn@pA|@`BlArB`AfBjBdDlAxBz@bBfCrDVb@xAtC|@~AfA|BrA~BbAlBn@jATf@^z@v@bCBRBJBTDX\\fBR`AXvAXzA\\nBT`ALl@f@tAfAzBZh@`@r@vAhCbAhBJPp@rAr@vAp@nA`AlB`@r@\\p@Vb@NR@@z@bA@@dBxBz@`A`@b@b@j@v@jAb@x@Vd@bCvEBDv@|At@vAh@~@^t@P\\Rb@Rj@Rv@Fl@F|@?p@BlBDj@PxBJf@Nj@J`@JV\\p@`A`Ab@\\h@h@@?NPzAnAZVjA~@NLrBfBfAz@`BvA^^DBBFNPn@j@zAlAfClBnIlGp@h@fFzDlCpBt@j@tB|A`@Xx@n@NJpA~@t@j@r@h@dAnAr@t@t@bApArCxAlCvBvEvA~Ct@dBLXbAzA|BfFTb@h@dA@DTl@Rt@XbB~@|Fj@bD`@fCf@zCXfBp@`E`@`C`AbGj@dDr@nEXfBTrBT|BXpERdFBj@Bb@LnCBf@D~@H`ALp@?@f@lCf@rCh@zCNt@Nf@Rh@l@fB`ArBl@~Af@lAVr@Rd@Pl@^vAf@zBd@|AVbA`@fBZrAr@rCbAfEt@zCjAtEf@tBdAhEVbATjApAvF`@hAPj@N`@Vd@Xd@d@p@|AlBd@r@b@x@P^Vp@Nn@Lj@Nz@@NV|AX|BTzAjAtGRz@^rBj@`Dj@~A`@vAVv@`@jBH\\Pv@h@xBb@hBH\\DNT~@TbA?@ZhAb@dBn@`C\\tA^hBt@|DJj@f@`CNx@h@nCl@rC\\jBHd@BNn@dDRfAR|@Rn@~@rChAzCr@xCV`ALr@Fr@BXBXHfAFjABxA@FAd@?lAI|BUfDAVMrCCh@I|BUlGAR?h@Aj@Ad@@x@Av@@tAd@zDb@tBx@jCd@zARh@BtAF`@J\\Vl@HRd@z@LVP\\~BzELTj@lANZv@fB`BvDN\\Rl@Nf@J`@XtADP^~AbAvEF\\x@lEThAd@dC@@Lz@d@`C^fBR~@`@vB?@XrA\\~A\\zAH`@Ln@RdAJh@?@\\jBPp@Rp@Vf@\\f@Z^\\\\d@ZdAj@xDrBtAt@tBfALFnDlBb@TrBdA\\NrAx@j@^p@d@PPTRb@f@RRTZTXR^FJb@r@n@hADD`@p@FLT`@LXHXFN"
                     },
                     "start_location" : {
                        "lat" : 22.4058197,
                        "lng" : 71.0106564
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 154
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 25
                     },
                     "end_location" : {
                        "lat" : 22.3116782,
                        "lng" : 70.8310889
                     },
                     "html_instructions" : "Take the exit toward \u003cb\u003eKuvadava Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eService Road\u003c/b\u003e",
                     "maneuver" : "ramp-left",
                     "polyline" : {
                        "points" : "y{dgC_mioLJJFFFJ|BtE"
                     },
                     "start_location" : {
                        "lat" : 22.3124544,
                        "lng" : 70.8323173
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 114
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 26
                     },
                     "end_location" : {
                        "lat" : 22.3111156,
                        "lng" : 70.8301673
                     },
                     "html_instructions" : "At Chamunda Garage, continue onto \u003cb\u003eKuvadava Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eService Road\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Service Road\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Shree Sadguru Auto Agency (on the left)\u003c/div\u003e",
                     "polyline" : {
                        "points" : "_wdgCieioL|@`BJRJRLXJR"
                     },
                     "start_location" : {
                        "lat" : 22.3116782,
                        "lng" : 70.8310889
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.1 km",
                        "value" : 2071
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 328
                     },
                     "end_location" : {
                        "lat" : 22.3058654,
                        "lng" : 70.81176169999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at SHAKTI PAN &amp; COLD DRINK onto \u003cb\u003eKuvadava Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Green Land Chokdi (on the right)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "osdgCq_ioLOAW?I@KDWT[XKNGJAFAHAH@F?JBJBP@DTbA@?@??@@?@@@@?@@??@@@?@?@?@@@?@A??@?@?@?@A??@A@?@A?@D?FnA|F`@pBFVFXFRBLXnA`@dB?@VjAf@rBp@|C|@nDTz@^tAVhAr@bDBJBLLp@FV^dBDNFPFPNXbC|EFNN^Zv@Ph@Ph@Nl@N|@Hf@x@fEf@tBpAlH~AhK"
                     },
                     "start_location" : {
                        "lat" : 22.3111156,
                        "lng" : 70.8301673
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 149
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 33
                     },
                     "end_location" : {
                        "lat" : 22.3065961,
                        "lng" : 70.81072039999999
                     },
                     "html_instructions" : "At \u003cb\u003eDeluxe Cinema Chowk\u003c/b\u003e, take the \u003cb\u003e2nd\u003c/b\u003e exit onto \u003cb\u003eRanchhod Nagar Main Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by the pharmacy (on the left)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "urcgColeoL@??@@??@@??@?@@??@?@?@A??@?@A??@A?A??@A?A?A?A?AAc@b@o@d@CBEBA@ABEDCDCDCDCDCDADCDAHAB?DA^"
                     },
                     "start_location" : {
                        "lat" : 22.3058654,
                        "lng" : 70.81176169999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.9 km",
                        "value" : 931
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 127
                     },
                     "end_location" : {
                        "lat" : 22.3039042,
                        "lng" : 70.80219319999999
                     },
                     "html_instructions" : "At \u003cb\u003eParewadi Chowk\u003c/b\u003e, take the \u003cb\u003e1st\u003c/b\u003e exit onto \u003cb\u003eKeser-E-Hind Bridge\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eGJ SH 121\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eGJ SH 25\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow GJ SH 121/\u003cwbr/\u003eGJ SH 25\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Gordhan Ghar (on the right)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "gwcgC_feoL@@@??@@@?@@??@?@?@?@?@?@?@?@?@?@A??@T`AfAjEp@~Bh@hB@DZjAHXFRDJJ`@@@J`@Jb@hAxD@BBJBP@DBHBRDRF^F\\F`@F`@Jx@VvBHj@PnATrAR`ABJLv@"
                     },
                     "start_location" : {
                        "lat" : 22.3065961,
                        "lng" : 70.81072039999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 1016
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 160
                     },
                     "end_location" : {
                        "lat" : 22.3066684,
                        "lng" : 70.8105127
                     },
                     "html_instructions" : "At \u003cb\u003eHospital Chowk\u003c/b\u003e, take the \u003cb\u003e3rd\u003c/b\u003e exit onto \u003cb\u003eHigh Ct Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eGJ SH 121\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eGJ SH 25\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow GJ SH 121/\u003cwbr/\u003eGJ SH 25\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Radhe krishna cab sarvis Rajkot (on the right)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "kfcgCupcoL@?@?@?@?@?B@@?@@@?@@@@@@?@@@@@?@@@?@@@?B?B?@?@?@?B?@A@?@A@?BA@A@A@A@A?A@A?A@A?C@A?C?A?C?A?CAA?A?AAA?AAAAAAAAACAA?AAA?A?AAA?A?A?A?A?A@C?A?A@A?A@A?A@?@A?A@AGu@AGCOO}@c@qCCSCUAS[wBYcCG[CQCQGUEQM[g@sAg@gBMe@Kc@?CMa@?CK[YgAK_@k@mBq@aCYiAc@kBGQQq@EM"
                     },
                     "start_location" : {
                        "lat" : 22.3039042,
                        "lng" : 70.80219319999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 168
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 37
                     },
                     "end_location" : {
                        "lat" : 22.3059458,
                        "lng" : 70.81170809999999
                     },
                     "html_instructions" : "At \u003cb\u003eParewadi Chowk\u003c/b\u003e, take the \u003cb\u003e2nd\u003c/b\u003e exit onto \u003cb\u003eRanchhod Nagar Main Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Vaibhavi studio (on the left)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "uwcgCudeoLA?A?AAA?A??AA??AA??AA??A?AAA?A?A?A?A?A?A?A?A?A@A?A@A@A?A@?@A@?@A?G?G?G@EBKBI@E@E@?@EBEDEBEDEBEDEDCBEDCrAiA"
                     },
                     "start_location" : {
                        "lat" : 22.3066684,
                        "lng" : 70.8105127
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 1980
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 304
                     },
                     "end_location" : {
                        "lat" : 22.3119068,
                        "lng" : 70.8297182
                     },
                     "html_instructions" : "At \u003cb\u003eDeluxe Cinema Chowk\u003c/b\u003e, take the \u003cb\u003e1st\u003c/b\u003e exit onto \u003cb\u003eKuvadava Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eRanchhod Nagar Main Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eGo through 1 roundabout\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by SBI ATM (on the left)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "escgCeleoL?A@??A?A@??AM[Mu@Gc@o@{DUwAOy@Mq@Y_BOw@COi@iC_@oBKi@Mq@Ie@S{@Mo@Qi@GQKYYw@M[EMgCyEMYEMCKEOOo@EQMo@G]Mq@EMAK[oAOs@K_@UcAAE]uAS{@{@mDGSm@kC[uAS{@Om@]gBWiAAECMUaAIWcAuEQy@K]Ic@AEAE?IACCAAAAA?AA??A?AA??A?A?A?A?A?EBC?AOy@Ki@CO?I?K?E?E"
                     },
                     "start_location" : {
                        "lat" : 22.3059458,
                        "lng" : 70.81170809999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 246
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 44
                     },
                     "end_location" : {
                        "lat" : 22.3126018,
                        "lng" : 70.83193919999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eKuvadava Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Greenland chokdi Pickup Stand (GSRTC) (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "mxdgCw|hoL]u@Sg@M]GSg@uAIWEYCe@Am@A_AAO"
                     },
                     "start_location" : {
                        "lat" : 22.3119068,
                        "lng" : 70.8297182
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "22.2 km",
                        "value" : 22175
                     },
                     "duration" : {
                        "text" : "29 mins",
                        "value" : 1738
                     },
                     "end_location" : {
                        "lat" : 22.4059886,
                        "lng" : 71.01046959999999
                     },
                     "html_instructions" : "Take the ramp onto \u003cb\u003eNH 27\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by अम्बे हार्डवेयर (on the right)\u003c/div\u003e",
                     "polyline" : {
                        "points" : "w|dgCsjioLIk@G_@I]AGAMaAgBu@wAq@iAYe@OUMQYYKM]W?AWU[U_Ao@oAq@aB}@sE}Bo@_@CAeCsA}BmAmDkBg@Y]Wa@a@Y]QW[i@EIGOGSGQI]G]Oy@G_@ES?AACIa@YqAEYCGI_@]eBm@yCM{@UiAYwA_AyEMo@i@sCCKScA_@wBcCgL_@iBQi@CIEMK[oA{Ca@aA_AqB_DsGc@}@_@y@QYU_@EIEQUk@w@}Be@}A_@kA[gAESa@{@Qe@Mc@GSAKEc@E_AIyDDoAF_AHm@Ny@Do@NcEHyBHiBA_AAc@?{@FuCG_B?qA?m@@[GoCUmBKeAcB{GeCeIQo@Uy@q@{CMe@G_@Gc@eAgFk@_DAEk@{Co@aDg@iCGWk@aCIc@Ke@CQM]k@kBAMYmAOm@a@qAIa@g@yBES_@mAQw@?K?}@My@WkAEUuAaH_BaIAIQ_Am@cDYmBi@cEMs@Qq@K]MYKU_@u@SYW]u@aAwAmBKQIQO[MYc@iA[oAiAsEy@sDoAgFy@mDGWaAcE}AwFiA{Eu@wCk@}Bc@iBa@{A[mAo@{A}@sBmAgCcAwBUg@[}@[gAiAiGa@mBOgAMcAG_ACe@Es@MeFU_FAe@Ce@WqBKiAQsAw@sFe@{CE[m@eDW_B{@qFSiAo@_Em@mDi@qDyAkJm@}Ca@}@oC{FO[Q_@KWIWaC{E}AiD[k@Ou@[y@kA}CsA}CmAcB[WU[SUU[s@g@qA}@qA{@kBwAcCkBoByAaDaCOOcAy@_@Ug@YoCyB}AcAAAgHgFwF}Do@e@cCqB[UeBuAk@e@aBoA_Ay@q@{@a@e@Q[IOMYEUAIQq@G[AEQ{@Gk@CYCU?MBSFWDWB]Ba@Ec@Oi@S}@Ea@K[Mi@Qo@GOOc@Se@g@sA_A}BUk@Q[Yo@q@sAcAgBs@oAoAcBgByBWY_AiAi@q@QQk@}@i@_AaAiBw@yAcAqBAA}@}Aq@mAgB}C}@{AEGq@_BM]w@{BEQ]aBOy@_@qBOcAg@eCMu@Cu@Mu@Qm@Oc@Sg@Wk@YWcCyBm@gAq@wA{@_B{AyCkBkDSe@Yw@q@iBa@i@s@sAm@iA[g@_@w@s@kAm@eAw@yA_A_BMU]q@]u@Yk@c@aASs@Qo@WsA[gB_@uAS{AMaAKgACo@Ai@AWYqCu@_FQ}@YsA{AgGYoA}AgG_@eAk@cByCqL{@iDoAyE_@aBYiACGQmAYsBGk@c@kCWmAIk@_@sBgAiGQmAoAaJ]mCSkAQw@SkAWuAYoAKe@Oi@GQKSO[U_@[m@Uc@i@}@u@iAu@mA{A}BU_@Yc@c@s@q@cAe@u@m@_AiAgBy@sAm@}@o@eAS_@k@iAEGEIYi@qAiCyAyCc@{@qA_CMWKQKMKMGGIIOKMIWO}@g@[Og@We@Sa@Oa@MYGoA[gBg@yA_@kDu@QCQEcAUqAYcAUSGgDu@oCo@{A_@A?_Dq@kAWuBm@a@Ku@OcE{@eB]gBa@cCg@{@Yg@SCAi@_@a@YYY_@c@Wa@{@eAo@_Au@eAo@{@sC{DgDsEaIiK"
                     },
                     "start_location" : {
                        "lat" : 22.3126018,
                        "lng" : 70.83193919999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "7.0 km",
                        "value" : 7049
                     },
                     "duration" : {
                        "text" : "12 mins",
                        "value" : 701
                     },
                     "end_location" : {
                        "lat" : 22.4293957,
                        "lng" : 71.06322349999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by RAMDEV STUDIYO (on the right in 3.7 km)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "mdwgCmflpL`@e@@EAE?GUiAS_BCUAQQqBWcDOqBMwAIgAA{@?s@Be@@S?ADa@b@uCf@cDh@yDBSPyANgA~@qHJo@R}Af@}D@GX}B\\eCLkABm@@a@Aw@Ca@Kw@EWa@}Ak@mAc@m@_@e@c@e@e@g@c@c@mAgA[Ui@]e@WQIaA_@GA_ASiAS}AKM?w@?kA?uAFaAPODs@Jk@Hq@?cDAgAUc@Ie@QaAi@AAyAkA?AiAmAeBwBcA{AKQUe@U{@McA?a@?[@EB_@LoA@IRkAf@_DJq@RkAJk@D_@?A@u@Ci@IaACOKe@m@wB}@aDQk@W{@Ek@?Mi@yAk@_BISOe@ESGO?MIw@E{@E{@EeBAUA{@?YCwACu@Cu@Cm@Co@Ck@?KAk@?c@@kBC_A@iADu@FgAH}B@]F}@DaAHuA@y@@s@?c@?ECe@Cg@Ky@EQQ}@Kc@s@uCsAoFY_AGQUu@GSK[GSk@kB[aAMe@Mg@EMo@_C[{@s@}AMSm@aA}AyBy@k@o@[GCe@IKCqAAuDEo@Cy@GeAUwDsCQMaAs@{DsC_Aw@kCyBSQsCaC}AqAy@{@II]_@_C_DwAwBc@e@eByA}@u@]c@GCIC"
                     },
                     "start_location" : {
                        "lat" : 22.4059886,
                        "lng" : 71.01046959999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.1 km",
                        "value" : 2082
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 140
                     },
                     "end_location" : {
                        "lat" : 22.426375,
                        "lng" : 71.0828743
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at Bamanbor police check post onto \u003cb\u003eNH 27\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Surya Restaurant (on the left in 1.6 km)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "wv{gCcpvpLMGIm@IgAG}@EcAA}@?k@@[@[LaBJ_AD[P}@\\_BHe@h@cCh@eCR}@Nu@b@wBXsADQ^aBZeA`@yA\\gAb@}AHY^eBd@wBTqAJy@B_@LwAJmABoB@gAB{A?OBcA@qBBkC@oC@i@DgC@_DBoD@u@@]@YDk@Jw@F]"
                     },
                     "start_location" : {
                        "lat" : 22.4293957,
                        "lng" : 71.06322349999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 446
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 47
                     },
                     "end_location" : {
                        "lat" : 22.4243543,
                        "lng" : 71.08660449999999
                     },
                     "html_instructions" : "Keep \u003cb\u003eright\u003c/b\u003e to continue on \u003cb\u003eNH47\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Momai tea stall (on the left)\u003c/div\u003e",
                     "maneuver" : "keep-right",
                     "polyline" : {
                        "points" : "{c{gC}jzpL\\{Aj@uAh@kA|@gBXs@FMb@}@Xe@fBqDZk@"
                     },
                     "start_location" : {
                        "lat" : 22.426375,
                        "lng" : 71.0828743
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 419
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 58
                     },
                     "end_location" : {
                        "lat" : 22.4224735,
                        "lng" : 71.0901126
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e at આયુષ સેલ્સ એજન્સી",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "ewzgCgb{pL?O?EBMrAwCRa@Tc@j@oAl@oAb@cAVm@Zq@Pe@\\y@FOJG"
                     },
                     "start_location" : {
                        "lat" : 22.4243543,
                        "lng" : 71.08660449999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "33.7 km",
                        "value" : 33729
                     },
                     "duration" : {
                        "text" : "39 mins",
                        "value" : 2327
                     },
                     "end_location" : {
                        "lat" : 22.5251283,
                        "lng" : 71.37630799999999
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNH47\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Hotel devangi (on the left in 9.9 km)\u003c/div\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "mkzgCex{pLJ_@f@uBtBoIZmANs@P_ApCiMF]n@wD^wCRgC?EBQNeBf@}EHk@BOf@}B~E}Sz@oD~@eDvAmEb@sAb@qAf@cBb@wAXw@\\_ArDsIrA{CvCeHXo@Nk@DQF_@D[Ba@FsB@oAE{@ScBe@yD}AgMOiAKw@AEG_@Ia@Oi@K]u@mBWm@]}@K[CIIa@Ik@Ce@?q@Do@Jw@@EHc@DQTq@Tq@r@aB\\y@\\kA`@kBd@wBZ{ALm@Ns@Ni@Nc@Bk@Cs@Ou@_@kACU]eCaAkHuAyJgAwHc@}CU{AIs@a@iD_@yEKiBQiEMoCKiC[eGSeDC_@GmACo@QgDOqDAa@KeDKkCMqCIoBEeAAe@?{@?g@?M@y@Bw@@QBOD[FYPsAXqBViBHo@D]P{ANuABWBa@Dg@?k@?_@AcAI{AC{@cAcRGmBK{BGgAIw@Ig@O{@YqBEQYiB]qBUuAa@iCO}@YiBc@wCOgAm@wF_AcJOeAG[Ks@GWGWUw@GSYu@]kAS{@QiAOsAc@mGIwBUmCKoB[oEKiBEmACa@ImCA}@?s@?kD@u@AcACs@K}@Oy@WeA[iAa@eBmAcFoBuHYkAYmAWaAa@eBUmAIk@Ca@?]AM?y@@C@o@Bi@RaBZaB@GX}@hA}CDKbDaIbCkGl@yAf@kAZ}@DKL_@DOJe@Hg@L_AFaAC}@?MAKKm@EYOq@K]Qg@O[Q]We@aAiBGKEKeAkBq@qAYe@Q[eBgD{CuFWc@kA_B[[UWa@a@YSKKe@_@i@]WOgAk@{@_@GCi@SgBc@gJ{AwAUoCg@m@Q_A[w@[s@a@yAgA]_@YYIMMOS[EKMUo@iAYm@Ui@e@_AO[wByECG_AoBEKsBsEeDkHOa@OWyDqIQa@g@eAs@}AYo@i@kA}C{GWm@_CeFw@cBWo@_@mAq@kC}@uC[y@a@oAGOmBsFy@}BM_@eB}E[}@m@eBOc@]_Am@iBa@eAcA{CQc@aAsCsCgIcB}EsAqDa@iA]_AIWcAqC}AcFU_A_@yBEa@?C]kCy@sGUaBG_@QmAWqA]gAWs@Se@[k@q@aAIMAAQWY_@}A_CIMMOY_@W]W_@QUs@_AQUu@gAoHyJEIsF}HsDgFaAoA_B_C_CaDmFiHoAeBm@y@_CeDwCaE_AoA}A{BsAiBOQYe@mGwIeFeHyCcEs@_AcAyA]a@kBiCoFwHEGkFoHcDoEs@_Ag@s@_DoEoGwIqBoCyB}C_C}CgBcCyDmFuB{C[c@S]c@}@]s@uCoGa@{@}@oBcGiMs@}AcA{Bm@kA}HuPwCgGsAuCa@aAu@_BoAiCUc@]i@w@iA}GgIiAyAW_@Yg@S_@M_@K[Ka@UkAY}A[{Ba@cCQeAQm@Qo@Um@[o@qAcCw@uAu@uAgB}CwAeCy@wAoC_F}@_BaAeBcAcBg@}@kDaGoDoGg@_AmAuB]o@aAaBAE{CyFGMq@qAGKs@eASWMQQWSYg@s@}AwB_AqAq@iAu@}ASc@Sm@s@qBCGc@uAg@mBeAuE}FgWYuAUaAYmAg@_CYyAiEaS_C{KI_@oC{LkC_MgAaFKa@ESOg@Uq@[{@IOe@gAeA_Cg@gAuDyIu@_BeBaDcAwAaBiCoAqB{AaCmDqFoDwFyA{Bw@mAkAmBeCyDyCuEcLuQgA_BS[q@cAkA{AoA{AiJkL_@e@eJwKoBcCQWQWQ[OWM[KUCGM[KYK[I[a@sAmBsIaA_E{BqJGWOo@gAsEi@_CyA{F}@aFIi@I_@Ki@cByPi@{Ei@eCmA{Ey@iDiAiECIiAwESaAe@oCG]UqAAEISKWMWEKGK"
                     },
                     "start_location" : {
                        "lat" : 22.4224735,
                        "lng" : 71.0901126
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "11.5 km",
                        "value" : 11453
                     },
                     "duration" : {
                        "text" : "10 mins",
                        "value" : 615
                     },
                     "end_location" : {
                        "lat" : 22.5384331,
                        "lng" : 71.4835702
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e2nd\u003c/b\u003e exit and stay on \u003cb\u003eNH47\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Paresh Parmar Shop (on the right in 11.3 km)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "amnhC}tsrLEECCACEKCICIAG?I?I?E@K@GBGBG@??A@A@A@?@A`@oBDWDi@NuC@e@RwFHoBJuD^uKDeBRqEHcBFwABkBB{@?u@AuAEeAa@iGaC{]iAyOKcBYaEMkAE[ESS{@]cAWq@kBiFEIkGaQ_DsIsBcGiFwN{BqGiMq]sDiKgA_DeDiJ_AkCmIwUgNa`@yAcE[aAQs@Mw@Im@GeACk@?u@BwADu@Bu@ZuIlByi@@YNoEDmA^gKVsHJuCBcAFwANgEHmAH_BVcDJsAJ_BF_ALuDb@mLRcGVuGx@iS`@eMNoDDoA@mB@mAIuPA{BGaJ?g@G}IKyN@eCAi@?oEE{BGgACm@AeC?IA_DGwJ?_E"
                     },
                     "start_location" : {
                        "lat" : 22.5251283,
                        "lng" : 71.37630799999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "34.0 km",
                        "value" : 33998
                     },
                     "duration" : {
                        "text" : "36 mins",
                        "value" : 2183
                     },
                     "end_location" : {
                        "lat" : 22.5749122,
                        "lng" : 71.80805289999999
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e2nd\u003c/b\u003e exit and stay on \u003cb\u003eNH47\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Shyam Tea Stall Sayla (on the left)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "e`qhCishsLAAA??AA?AA?AA??AAC?A?CAC?A?C?C?A?C@C?A?C@A@C@A@CGkLA_A?}@?q@IaSCaDAYC_@Ck@Gs@OgA_@wBg@kCgDeQs@sDuByKu@kDy@eFq@kDy@sEy@cEC_@Ee@Iq@Y{AcAiFmAwGQgAy@iEi@uCMaAGq@Aa@Ak@Ac@D}@HuBNeB@INiCFaAj@iJFgArCkd@f@kIb@iHDk@J_BfAmQj@eJTsDvAeUDk@j@{IRyCCwGG}@IyASiBO_Bu@kHIcAaAqKm@{FeAsKQkBOoDc@aF_A_K{B}Ug@uEu@qIkAoMYmCoBkSs@oHYyCWyCKcACo@Cg@?_A@u@@m@B}C@kEA{@AoALkKHiK?SL_C@{@Aa@Gy@CWKq@G_@a@mBaCeKYkAOo@WaAIo@E}@i@_CG[cDuNwDwPAEcAaEgBgIOq@sCmMMo@Mc@SiAa@sCQcAGc@y@_GaCcPq@mFKo@q@sEi@aEUsAOkAGc@wA}JMgAa@sC_@kC]}ByIqn@{AkLW_B[}Bk@iDaAmFw@oGe@_Dc@{CuB}Ny@iF_@cCE[q@sG[eCgAeIkAwHi@cEi@uD{@{FiE_[_@kCM{@oC{QYaBY}AoA{IUqAQiAw@sFgC{SEm@C{@E}B?oC@aAAs@WeOIoF_@qSa@eWOeIWePKuGKyFA_@iA_o@a@sUEyBc@oWK_GCcAHqA?{CGmCC{AAo@B[F_@@e@Ae@Ek@Ce@?EHqC?uDFqDDaABaBPkH`@aT^iODaCH{BHgEJoEF_CBaAFuCDkBXkLl@gWl@cWLaGb@aRHyDBg@RqHFuHB{BFuDNkE@q@HqEDsC?[@MJkDVcLNgF@UD{ADy@ToCHkBRyIFwCGeB?{@?[?UEYCg@Ko@YgAkFoNs@kBuC{H}@sB}@mCi@eBWgA[eBmB}OE[]yCa@iDMcAQ_BEg@G}@AQ?U?CAc@?oABeC@gB@aBF_E@}D@sADaADgABaCFiH@eAHoE?O?URiPFyF?aA?u@?a@Ac@Gs@E]A]EUKe@cAyGMu@UyASeAYqBa@iCa@cCGc@Q_ACMg@sC_@{Bk@uDKm@_@_CKm@G[CMGY?]A_@e@oBIe@Gk@Ek@Ea@c@_CKe@Ii@Gk@mBoM_@kCQyAi@sDIm@_@_C_@cC_@kCaAkGkAcHa@_Cs@mDKs@c@sCi@mEg@wCKm@eAuGU{@a@kCWgBKsAEe@?AEsAA}A?UAaB?{AA{BCcAEoBCiA@qG"
                     },
                     "start_location" : {
                        "lat" : 22.5384331,
                        "lng" : 71.4835702
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "33.0 km",
                        "value" : 32970
                     },
                     "duration" : {
                        "text" : "33 mins",
                        "value" : 1987
                     },
                     "end_location" : {
                        "lat" : 22.606939,
                        "lng" : 72.1224727
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e2nd\u003c/b\u003e exit and stay on \u003cb\u003eNH47\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Munnabhai kachriyawala (on the left)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "edxhCi_huLAC?AAC?C?C?C?G@EBG?A@A@A@A@A@A@?K]DuB@m@?}@A_A@kB@cD?MAqA@sA?a@Dk@Bg@?a@?ECeHEkF?ICu@AQ?aA?[CcDAkJ@oADq@?cAAaI?ECmMAmA@{DCgEEmPCgH@}AEkT?wACmDAwNKm]GkKCoI?mDCaJ?mD?{AAoFCcZAiCGyW?wH@aDCaVA}W?}@AmI?kK?cJBme@?uT?gR@}MEwKAkBFsN@kGBgk@A{SB{BAyA?s@@_E?OB}C?}JCyCAsBBiG?oD@S?_CDqB?e@Cq@Ak@@_ADqB?aB?}B@mL?uCFwD@eA?yDHyFAoDD_HA{ADyDDuHBaC@aE@iG@cC@uDD}B@cD@{DAiDIaBJuAFwAF_ILuMLqL?w@L_MB}DB_BF{I@q@DaD@m@@{AB_A@c@?_@J{Bd@uKT{EJwBVsGH{Ad@uKRmER_EJeCDiAZmHf@iKv@yQ\\mH?KTiF`@eJDy@fA}Uh@yKVmFTqE`AoTL{CDwA@i@?e@Ag@Ae@Ce@QwBEo@WiCO_B_@yDI}@s@cI?EOiBWsCw@}IKcAOeBE]cCyXyAkOoBeT_AaKGm@S}Bm@kH{BmVIgAAMEe@kAiMQqBe@iFKoAMcAu@uI[_DO{Ao@iHUuBMyAQqBi@qF_AiK[{CYiD{@iJEa@m@}Go@kHE]Gu@Kw@O_AWkAGSiAuDeBeFgAaDa@iAGQoDoKaB}EwAeEcB_FWy@_AsCISmAsDmAqDq@oBgAaDoEmMyCyIk@aBkD}JiAeDu@yBSm@Oa@gBiFeAoDm@eCg@yB_AcEc@qBy@sDoDqOqDcP}@eDQw@Mq@U}@eM_k@gA{EgBuH}@yDu@gDcFqTACi@{B{BsJq@}CmAoF}A}G?AI_@g@sBk@{BGSa@iBy@wDi@wBs@{CSw@CMQm@Qk@Qi@IYc@oBI[YkAACuAiG]mBE][wCU_B_@{BAEO{@Kw@kAuHs@_F[kB_CaOUoAwAoIW{Ac@uCi@mCi@qCa@uBgAuGcAiIGa@"
                     },
                     "start_location" : {
                        "lat" : 22.5749122,
                        "lng" : 71.80805289999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.6 km",
                        "value" : 1633
                     },
                     "duration" : {
                        "text" : "4 mins",
                        "value" : 238
                     },
                     "end_location" : {
                        "lat" : 22.618094,
                        "lng" : 72.12365
                     },
                     "html_instructions" : "Sharp \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Saidham Temple (on the right)\u003c/div\u003e",
                     "maneuver" : "turn-sharp-left",
                     "polyline" : {
                        "points" : "kl~hCmlewLA@A@CHEJGPAHADAN?L?NFh@l@vDBP@BAD?DCDEJMLq@\\YLo@TaEp@mDPsHRyCGKAe@IKGIC[OMKoDmCuB}Ay@}@GIy@aAwA{A_@k@SYWk@KYGUEQCEACGAeCKq@CeA?qBFo@BWCaAWc@a@CC"
                     },
                     "start_location" : {
                        "lat" : 22.606939,
                        "lng" : 72.1224727
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "8.6 km",
                        "value" : 8568
                     },
                     "duration" : {
                        "text" : "13 mins",
                        "value" : 773
                     },
                     "end_location" : {
                        "lat" : 22.6819966,
                        "lng" : 72.1535147
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eKaliveji Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Dhyey chavda's farm (on the left in 1.2 km)\u003c/div\u003e",
                     "polyline" : {
                        "points" : "ar`iCysewL]I_@CyC\\_@Ba@Bw@Pm@F}AMyCOkDEuFOmDQ]CqBAu@AaA@}B@oCA[?oDJkFJ}CTyE\\E?_EF[C}AIcBI_FWG?{FEsBImDQeB?qCHaCHeA@OA_AC}Du@iBa@q@O}Cq@gHiBiCq@qCm@}@Oa@EiCWgBQwN_AwKi@{@AwIMG?eHOU?}@KI?QDm@ZOFaBn@yAh@e@LQRgCjCgC\\]C]YaF{Gm@_A{@{CiAuDgAgDqE}OaB{Fc@w@}GqHaC_CmLoLiRqRoDkDs@s@_JyI}DoDkJkIcEiDACcA_AAAm@o@}KsM_M_O{@cAWo@CMGSCG"
                     },
                     "start_location" : {
                        "lat" : 22.618094,
                        "lng" : 72.12365
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "6.7 km",
                        "value" : 6736
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 532
                     },
                     "end_location" : {
                        "lat" : 22.6414647,
                        "lng" : 72.20024959999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at SHIVSHAKTI TEA STALL onto \u003cb\u003eBagodara Nalsarovar Link Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by માં જોગણી માત નો મઢ (on the right in 4.7 km)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "oamiCmnkwLlA[n@Ol@Qh@MXGXIj@QTGZM^O~@g@lDsBxCgB`@Sb@Wf@[xA}@xD_CjDqBh@[fAm@h@_@^]~@cAj@q@bAiAZ[NUt@u@nAyAl@q@|AcBx@_Ah@m@tCaDn@s@r@u@`BgBjBwBf@k@\\]LMLIRKrAo@tI}DlLmFdCiAb@U\\W~@gA`@g@nBcCV[^a@|@cA`AgAp@{@p@u@v@y@n@y@hA}AbCsD`AwA~@sAT]JUj@cAR]\\s@r@uAv@uAr@uAJOHQnA}BzAwCd@w@zAsCv@{AvBaEZk@dBaDp@mArB{D~A_Db@}@HQN]x@wB`AeCPa@nAeDNc@FQ?EDe@r@kCxAiFj@sBDOFMHQV_@tAqBpBqCvIgMz@qAr@iAdAuBjAaCjAaCjAcCz@iBN[FKf@y@~BmDlB{Cr@gAvBqDV[DEJMPOZUd@YPMZKHKTQ"
                     },
                     "start_location" : {
                        "lat" : 22.6819966,
                        "lng" : 72.1535147
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "16.9 km",
                        "value" : 16915
                     },
                     "duration" : {
                        "text" : "17 mins",
                        "value" : 1038
                     },
                     "end_location" : {
                        "lat" : 22.7523671,
                        "lng" : 72.3054575
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at Priyanshi pan parlour onto \u003cb\u003eNH47\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Kisan (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "cdeiCqrtwLACCOEUGUMi@U}@YgAAAAGK]Yy@wEeM]u@Ue@SY[_@g@g@i@c@_@YyA_AsA_ASOyJyHcFeE][aGuEaAy@sB}AQQ_@]]YOO{B}BcD}CsEmEcFcFaCaC{@aAcAeAi@m@wAeBw@eAm@w@a@k@_AwAk@aAc@s@a@u@e@w@Wc@_@q@w@uAs@mAm@aAcA{AuAuBe@q@yBeDsAoBcCmDIMi@w@iCqDk@w@c@i@GISUa@e@IGoE_E][cAu@sAcA]Wi@]YOKGe@S_Aa@ECUKs@]QKcAe@SK}@_@IEi@WiAo@aBs@o@W_EgBsFkCME}@]][i@[{Au@iDaBsEuBKGm@Y{EyB_Bq@uAi@SGy@Ug@MSCa@Ic@GYEUAg@Ea@Ca@?e@A}@?gC?}CBcEDi@BqPb@eCFaDHqBF[@cBBeA?e@CYAoAI}@IIAkAMyAWi@Ka@Kq@O_Bi@wAm@_B{@e@Y{@g@iAs@[QcAm@iAs@OKgDoBUOo@e@OKg@_@SOSOu@o@cC{BsBoBsBmBm@k@{AuA}AuAAAMMOM{AuA_Ay@k@i@MM_DqC{CsCk@i@qBiBuBkBUWu@q@yEoEgHcHAAoG}Gs@w@sB_Cw@y@mDuDmDuD]]GGgAkAeAmAwAaBy@cAe@q@IKgAwAcB{B_FqGW]W]_BuBAA_@e@uAkBeAuA_@g@qCqDkOgSaLeOW]iGkIqBoCmHwJKK}EyGe\\oc@yLiPwBwC[c@mAaBsBqCkA{As@cAIKKMeB_CmAaBqCyDeAwAmAyAq@_A}BaDa@i@_FuGc@m@e@m@gA{AqAeBuJwMeDqEo@{@oCsD{DiFsBuCuBqCkCqDuBsC}AsBa@k@qAgBcDkE]c@eCeDgB_CgB}BaAsAuAiBW]"
                     },
                     "start_location" : {
                        "lat" : 22.6414647,
                        "lng" : 72.20024959999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "87 m",
                        "value" : 87
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 30
                     },
                     "end_location" : {
                        "lat" : 22.7529174,
                        "lng" : 72.30486479999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "iyziCcdixLABSXYf@UTg@Z"
                     },
                     "start_location" : {
                        "lat" : 22.7523671,
                        "lng" : 72.3054575
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 131
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 22
                     },
                     "end_location" : {
                        "lat" : 22.7537392,
                        "lng" : 72.3057388
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "w|ziCk`ixLO]SSOM[MKIOQQOOMIIEQEK"
                     },
                     "start_location" : {
                        "lat" : 22.7529174,
                        "lng" : 72.30486479999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "48 m",
                        "value" : 48
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 14
                     },
                     "end_location" : {
                        "lat" : 22.7539415,
                        "lng" : 72.30607359999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{a{iC{eixL@?@?@CAK?ECKEICCKGGEIC"
                     },
                     "start_location" : {
                        "lat" : 22.7537392,
                        "lng" : 72.3057388
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 211
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 33
                     },
                     "end_location" : {
                        "lat" : 22.7540719,
                        "lng" : 72.3077187
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "cc{iC}gixL@m@?GAIAICMIMIKEKAMAMM_@o@wBJ?PGLGZG"
                     },
                     "start_location" : {
                        "lat" : 22.7539415,
                        "lng" : 72.30607359999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "21.1 km",
                        "value" : 21087
                     },
                     "duration" : {
                        "text" : "26 mins",
                        "value" : 1553
                     },
                     "end_location" : {
                        "lat" : 22.9060785,
                        "lng" : 72.4262286
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eNH47\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Dharmik kirana and small hotel (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}c{iCgrixLi@gAa@{@g@w@QWaBkCqByCiAiBkAkB[i@mEiHaA{AcAwA}@kAe@c@s@s@a@]k@c@u@i@SMuA{@EA_Bw@cBs@}CkAcA_@gCgAi@UwAm@{DaBuAm@sB{@cBu@a@Q}BaAyDcBkDyA_@OcHyCMGmAg@UM[Ma@Os@]qBy@i@USKcBu@_D{A_Bw@{Am@_FwBkKqEwD_BgAg@_A_@GCaEgBSKSIgEkB_C}@uCoAyBeAwBoAmA{@_Ao@}AoAeA{@{BuB_B_BsAqAwF}FoAoAy@y@m@o@}ByBu@s@USuGeGa@]eIsHmBeBaA{@cDaCsCgBcD_BeDuAmC{@gCs@mBi@iA]}Ac@}DkAmDaA_Cq@yAe@kBi@kDcAy@W{@[{@[a@Om@W}As@OIoAq@aCuAYQqBkAgHeEoBiAaBaAIE_CuAqDuBi@Y}BsA}EoC}EqCcAk@u@c@mRaL_B_AwBsA{A_Ak@[}@m@s@a@u@c@o@[o@[sAk@gCu@k@OYGWEs@Ku@IsBYg@IwDe@kCYoAO{C_@gCc@q@U}@Ye@OgCoAw@e@iBmAGEu@e@YUaAm@[UOISMk@[m@e@{CmBa@WeDaCSSc@a@s@y@KOIKQUQU]g@Wc@o@iAaAkBk@cA[o@OY_@o@Wa@{B_EeB{CYi@mAsB_@s@Yi@GM_@q@eAcB_@s@ACwAgCgB{CQYMOOSMMCCa@g@KKMMMIg@c@SOi@c@IGo@i@]Wa@WcAq@qCoBOIQIQM{AeAUQc@[MKcCaB{EaDwAiAaKaHqE_DcCaBsD_Co@c@UOc@[aEwCiAw@_JiG{B}AeD}B}@i@k@c@c@]sJ{GwA_AwCqBqDiCqEaDi@a@}@u@SQg@a@eC_CgDqCqBiBwEgEcHmG{DoDs@q@}EiEeRwP{CqCyHcHsHaHe@c@gDyCuEiEwH_HaBwAeB}AwAsAqBkB[Y{AuAyBqB{@w@oCeCm@i@OOcA}@][q@m@kBaBa@]UQ{EkEiHuGk@g@aA}@gAaAoAiAOMaA}@_DuCc@a@gDyCaDyCsBiBm@s@gAcA}AyAqD}CIIkE{DyJ}IYWaEsD{BqBgB}Ag@c@qDiDoBcB_Ay@gAaAOM{@w@gB_BaB{AmDaDaA_Ae@c@"
                     },
                     "start_location" : {
                        "lat" : 22.7540719,
                        "lng" : 72.3077187
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 161
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 24
                     },
                     "end_location" : {
                        "lat" : 22.9071958,
                        "lng" : 72.4272045
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e at Chamunda Pan Parlour to stay on \u003cb\u003eNH47\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Moraiya Gam Cross Rd (on the left)\u003c/div\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "_zxjC}v`yLC?C?EAECeA}@_A}@i@g@[W"
                     },
                     "start_location" : {
                        "lat" : 22.9060785,
                        "lng" : 72.4262286
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 579
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 47
                     },
                     "end_location" : {
                        "lat" : 22.9110779,
                        "lng" : 72.4309367
                     },
                     "html_instructions" : "Slight \u003cb\u003eright\u003c/b\u003e at Corrtech Energy Limited",
                     "maneuver" : "turn-slight-right",
                     "polyline" : {
                        "points" : "_ayjC_}`yL?C?AAA?CKS?CAA?EyCmCcEsDyK}J"
                     },
                     "start_location" : {
                        "lat" : 22.9071958,
                        "lng" : 72.4272045
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "7.2 km",
                        "value" : 7234
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 523
                     },
                     "end_location" : {
                        "lat" : 22.961717,
                        "lng" : 72.4752366
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eNH47\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by State Bank of India (on the left in 2.7 km)\u003c/div\u003e",
                     "polyline" : {
                        "points" : "gyyjCktayLEEcA}@[Y_FkE}EqE}DoDqIyHaPwN{HgH_A{@kCaCsBkB_ToRwAuAk@e@wDmDYU_Ay@uD{CqDyCq@i@o@i@mCyBoCyByBiBmB_Bs@i@}GsFc@]i@c@yBeBsMsKgDqCoAaAgDoC{AmA}DaDWUyBeBu@o@{CgC}E_EoAcAMMkB{AIIIGgCoByAoA_DcCsC_CoFiE{DaDiBwA}DcDuD{CeLgJoCyBu@m@[WUSa@]y@q@oCyBuC}BiFeEYUSQ}@s@{@u@mCsBcCkBa@Wg@[OGMGc@O"
                     },
                     "start_location" : {
                        "lat" : 22.9110779,
                        "lng" : 72.4309367
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.0 km",
                        "value" : 2003
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 176
                     },
                     "end_location" : {
                        "lat" : 22.9751184,
                        "lng" : 72.48814399999999
                     },
                     "html_instructions" : "At \u003cb\u003eSanathal Cir\u003c/b\u003e, take the \u003cb\u003e2nd\u003c/b\u003e exit onto \u003cb\u003eNH147\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Shiv Shakti Pan Center (on the left)\u003c/div\u003e",
                     "maneuver" : "roundabout-left",
                     "polyline" : {
                        "points" : "wuckCgijyLE@E@C?E?EAEAEAECCCCECCCEAEAE?EAE?I?A?A@??Am@i@GG}AwAaB{AIIi@g@oAeAuBoBc@a@cCcCKICCwBwBGG{AyAsBqBa@a@WU}@}@YWAAEGWWyAsA][WWiAeAoAkAoEgEA?{DuDECKM{AsAa@c@QQq@m@YYa@c@KI[[aBaBa@]aB_BuDmD"
                     },
                     "start_location" : {
                        "lat" : 22.961717,
                        "lng" : 72.4752366
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 956
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 133
                     },
                     "end_location" : {
                        "lat" : 22.9821266,
                        "lng" : 72.49322070000001
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eNH147\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "oifkC{ylyLG?GAIGc@]g@a@OKGEUOKIKKIGQQk@k@y@w@i@g@oAmAcCcC][wA}A[]MMY[a@]WUWQeBeAOE]IkCk@iB_@uAY{@Qe@g@"
                     },
                     "start_location" : {
                        "lat" : 22.9751184,
                        "lng" : 72.48814399999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1776
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 138
                     },
                     "end_location" : {
                        "lat" : 22.9974794,
                        "lng" : 72.498003
                     },
                     "html_instructions" : "Slight \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eNH147\u003c/b\u003e",
                     "maneuver" : "turn-slight-left",
                     "polyline" : {
                        "points" : "iugkCsymyLuE_AyBi@IA}GyAsCm@uBc@qAYsAWe@MsJsBkCi@_B]]GuAYc@Ig@MEAi@I}Bi@iDs@sEaAuDy@aIcB_AUUGUE"
                     },
                     "start_location" : {
                        "lat" : 22.9821266,
                        "lng" : 72.49322070000001
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "28 m",
                        "value" : 28
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 22.9973784,
                        "lng" : 72.4982474
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eSG Hwy Service Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eMay be closed at certain times or days\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "gujkCownyLH]HS"
                     },
                     "start_location" : {
                        "lat" : 22.9974794,
                        "lng" : 72.498003
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 265
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 53
                     },
                     "end_location" : {
                        "lat" : 22.9996202,
                        "lng" : 72.4989454
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eSG Hwy Service Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "stjkCaynyL@A?C?A?A?AA?A?gCe@s@M_Do@cAS]G"
                     },
                     "start_location" : {
                        "lat" : 22.9973784,
                        "lng" : 72.4982474
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "2.2 km",
                        "value" : 2230
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 330
                     },
                     "end_location" : {
                        "lat" : 23.008027,
                        "lng" : 72.5168573
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eVastrapur Station Rd\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "sbkkCm}nyL@MEO?ELo@XyAn@oD@IBGBIFOd@_AHQ~@qB@E?ECCCGY_@cDmEkDuEmIiLcAwA]c@CCOUw@gA[c@mBmC]g@kAyAwBuCyB{CiBcCeCiDIKAEACAA?A?A?Ek@{@Ye@GMa@w@GOEKOa@KUEO[}@Mg@O{@ESCQ?EE]G_AC[Ck@Gw@S}E"
                     },
                     "start_location" : {
                        "lat" : 22.9996202,
                        "lng" : 72.4989454
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 165
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 31
                     },
                     "end_location" : {
                        "lat" : 23.0094669,
                        "lng" : 72.5172239
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e at \u003cb\u003eDr Ambedkar Chowk\u003c/b\u003e onto \u003cb\u003ePrernatirth Derasar Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eVastrapur Railway Station Rd\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ewlkCkmryL]EEAeAOw@M[GWG]Gk@I"
                     },
                     "start_location" : {
                        "lat" : 23.008027,
                        "lng" : 72.5168573
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.5 km",
                        "value" : 1454
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 206
                     },
                     "end_location" : {
                        "lat" : 23.0107739,
                        "lng" : 72.53129939999999
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e after Chandramauli Vidhyalaya (on the right)",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "e`mkCsoryLKC@QEq@Ec@Cg@Gu@Gq@McCAa@CoBC{@A}@@s@CwAAm@AiBAc@Ay@Aa@EaA?SC{@CsAAw@AMCo@Ag@C_@E{@A}@UeFE}@KeBCm@C_@IkBG}AGy@Iy@Cc@GcAIkAMoAEc@QsB"
                     },
                     "start_location" : {
                        "lat" : 23.0094669,
                        "lng" : 72.5172239
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 662
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 127
                     },
                     "end_location" : {
                        "lat" : 23.0114215,
                        "lng" : 72.5376627
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eRajiv Nagar Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ihmkCsguyL@Y@O@MJWGyA?CASA[C[?GC_@WaCAcABe@Aq@Ag@Cu@Aa@?EAM?UA[AQAQAQ?QCc@AO?QIuBEYEYQaAI[Ke@Qu@"
                     },
                     "start_location" : {
                        "lat" : 23.0107739,
                        "lng" : 72.53129939999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.8 km",
                        "value" : 798
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 108
                     },
                     "end_location" : {
                        "lat" : 23.0139934,
                        "lng" : 72.54492619999999
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eShreyas Tekra Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "klmkCkovyLI[ACUq@Us@Oc@m@iBCGy@wCMc@[gAu@aCCMGQa@wAGUOk@q@uCs@{DSgBCKa@oBG["
                     },
                     "start_location" : {
                        "lat" : 23.0114215,
                        "lng" : 72.5376627
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.2 km",
                        "value" : 1220
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 190
                     },
                     "end_location" : {
                        "lat" : 23.0198243,
                        "lng" : 72.5546452
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eBhudarpura Rd\u003c/b\u003e",
                     "polyline" : {
                        "points" : "m|mkCy|wyLEQCOCKO_AMs@Ie@EYI[YsAGWGWAGI[ISIQMSAAsAcAMMGGKIQSY]g@m@Y[SW_@c@Ya@EI{@qAYc@gDsEaDgEy@u@CA[WACSa@_@s@KSCGO[IUEMCQCMMcA[qCCSCM?SCIW_@"
                     },
                     "start_location" : {
                        "lat" : 23.0139934,
                        "lng" : 72.54492619999999
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 704
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 155
                     },
                     "end_location" : {
                        "lat" : 23.0202529,
                        "lng" : 72.5611857
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e at \u003cb\u003eChhadawad Junction\u003c/b\u003e onto \u003cb\u003eSheth Mangaldas Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by the gas station (on the left in 500m)\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "{`okCqyyyLIIPWBEDINg@?ARi@Ne@d@kCBSAQ?KCOK]Qs@Ui@Wm@ISOk@EOCMESK}@K_BAQIaB?ICc@Ei@YsDCS@sA"
                     },
                     "start_location" : {
                        "lat" : 23.0198243,
                        "lng" : 72.5546452
                     },
                     "travel_mode" : "DRIVING"
                  },
                  {
                     "distance" : {
                        "text" : "1.1 km",
                        "value" : 1080
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 162
                     },
                     "end_location" : {
                        "lat" : 23.0225716,
                        "lng" : 72.57130579999999
                     },
                     "html_instructions" : "\u003cb\u003eSheth Mangaldas Rd\u003c/b\u003e turns slightly \u003cb\u003eleft\u003c/b\u003e and becomes \u003cb\u003eGujarat College Rd\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eSheth Mangaldas Rd\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Sheth Mangaldas Rd\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003ePass by Gujarat College Staff Quarters (on the left in 600m)\u003c/div\u003e",
                     "polyline" : {
                        "points" : "qcokCmb{yLAGCKK_AEa@c@sDAEGe@a@wC[oB_@{BACKo@S}@w@iDSaAOk@Qm@]sAEUCSEe@?CAWAOAc@AI?[EcEAm@Ag@Ca@CYC{@ASC_@?Ia@w@e@m@AE"
                     },
                     "start_location" : {
                        "lat" : 23.0202529,
                        "lng" : 72.5611857
                     },
                     "travel_mode" : "DRIVING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : [
                  {
                     "location" : {
                        "lat" : 22.3039042,
                        "lng" : 70.80219319999999
                     },
                     "step_index" : 55,
                     "step_interpolation" : 1
                  }
               ]
            }
         ],
         "overview_polyline" : {
            "points" : "gye`Cezo{Lqa@PgbA}{CuuCk~FqdDhl@g^vLkv@sl@a}@ut@cn@}Hqu@ar@ejAcQqvAoBicBemBmaAeaD{kIjOckGkw@auG}`Eq`M}t@mfBfKs}Dnu@ixEwl@}sCs_@gtD_b@sw@~_@kcBbr@ycAoEenAo_@{M}bAmQ{dAgq@|\\_~BdUyeDw|@oaKeiDcuK{{Bm{LmcDk\\cs@xJueCkiBzH_eAh_@ab@xj@saDwh@aaBkv@anAkpAsx@{|Auz@ucCuYa]yhCn@e`Ctd@qaAwNskBrUatBmVcpAyd@g|Bb]{aCwGsYsg@ueA{VioAaZy{@jd@{m@zQguAhJec@`bAkKye@ay@vAia@cHgG}q@ohAvZ{Iwd@wuAeIu~@la@a^nhAuw@xbDozDxzCg{BxcBia@rwAaSlgCyk@vv@ev@lK{I~XmZtRpZf_AjzB~|F~tAtjEbk@ndDSxfCejAxxBpUhqBbi@liEtg@veA}TljAagAneJyiB|zFezCzeGuuCrhEkh@rtBw\\jmGeJ~jFbt@~lDupAv|FxnAhwE_KbvBga@x_A~b@~c@eKpj@e_@gDya@Qk~@z_A__CplAegB~uApT~dKsYdwBaqBztB_oE|sEepCdcD}jAdpBew@j`CydC`xCah@b]zCrXbsCtsCnlF|QjiAba@vwAx~G|yAdhGfa@tqEqK||DyG|qEa@zvNh`@hlLfd@~_IuG|vI~t@dwIndAxhIl^|tDwLhkE~ZdtDkOzyG|eBfnGje@dtEhhCdxFnsHrjMzqApyD~rAjtADfgC|UdgChIfrD_UnaCkr@rlC}QppBncA`t@xUloBlNfv@po@rTiGftAdfAju@flA`hAj[pyAjgAlcDn}AtwBvnA|dEn}@fpD`g@haD`aAhyAn`@frBfJb{@ot@kyD{_AyeBqk@ujDecAuwDcb@k{B{mA}hA_x@{kBahAmoDckAatByjAsj@wAyxAqa@e_@iVsi@oTmqBsbAax@rDc~@jm@yaD`e@exDeTaqEiWu|DqIw|@gt@q`@k`BasEsyDcyFesB}`Ei~CguHuSoaD}fBivGnPgrE}XamF~H}lEw]cuEywAocKkd@geIrCwlDrIabEwZ{zB_h@}~E{CoqWfXq{KuoAgxJexBixIuTylAez@iPgpFkRc`@qEueBgzBkXai@ne@}WxlAabAvy@wtAxu@o|Ac@wp@uoCssCw~Cwm@}{JcoLsgBa~Ai{EekCmsD}fBmqBgrBcjNy{LuqG_qFchCi}@g`A_fBci@mgEcq@ywC"
         },
         "summary" : "NH 48/NH64",
         "warnings" : [],
         "waypoint_order" : []
      }
   ],
   "status" : "OK"
}
```
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
