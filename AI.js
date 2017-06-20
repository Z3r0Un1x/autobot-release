//Fri Feb, 3 2017 6:40 PM
'use strict'
var login = require('facebook-chat-api');
var fs = require('fs');
var request = require('request');
var lowerCase = require('lower-case');
var uriencode = require('urlencode');

var api = require('./\[DATA\]/const.js').api
var func = require('./\[DATA\]/commonFunc.js');

var retrieve, mess;
var admin = 100004385777470;

var weather = api.WEATHER;
var text_reply = api.TEXT_REPLY;
var youtube = api.YOUTUBE;
var math = api.WOLFRAM;

var EXIT_FAILURE = -666;
var EXIT_SUCCESS = 666;

var AdminIds = {};
var Suspend = {};

var i,j;
var SpamCount = {};
var SpamID = {};

func.log('/********* COPYRIGHT (C) ZEROUNIX. WORK UNDER MIT LICENSE!! *********/');


var javCode = Array('MIAD-530', 'MIDD-944', 'LADY-077', 'SW-186', 'STAR444', 'T28-184', 'dvdes-635','BOD-277','BOD-277', 'ARMG-014', 'JUC-579','BBI-142', 'MILD-716', 'FSLV-002', 'CRS-S014',
'ODFW-006', 'SOE-837', 'SOE-837', 'Nhdta-141', 'NADE-783', 'PPPD-294', 'MIRD-102', 'SRS-022', 'BBI-163', 'BIST-001',
'SIRO-1690', 'HAWA-020', 'SNIS-166', 'MIRD136', 'ABP-138', 'WANZ-201', 'STAR-524', 'SAMA-385', 'ABP-171', 'IPZ-409', 'ABP-108', 'MIDE128', 'N0960', 'JUX-357', 'SNIS-070',
'SIRO-1774', 'MIRD-134', 'MIDE-128', 'ABP-145', 'N0962', 'ABP159', 'ZIZG-003', 'CWP-107', 'IPZ-127','MIDD-532', 'IPTD-748', 'IESP-144', 'crpd-222', 'GAR-280', 'BW248', 'MXGS173', 'MIAD-530', 'RCT-402', 'ABP-159',
'ABP-103', 'ABP-105', 'ABP-108', 'ABP-117', 'ABP-128', 'ABP-013', 'ABP-138', 'ABP-142', 'ABP-171', 'ABP-276', 'ABP-092', 'ABS-130', 'ABS-141', 'ABS-170', 'ABS-217', 'ABS-047', 'ABS-070',
 'ABS-074', 'ABS-083','ADN-032', 'AKB-056', 'AMBI-048', 'AOZ-173z', 'AOZ-189z', 'AOZ-212z', 'AOZ-217z', 'AP-154',' AP-081', 'APAA-151', 'APAA-246', 'APAA-258',
'APAA-272', 'APAA-280', 'APAA-299', 'APAK-074', 'APAK-078', 'APAK-086','APAK-088', 'ARM-383', 'ARM-416', 'ARMF-003', 'ATID-157', 'ATID-207', 'ATOM-093', 'AUKG-276', 'AUKG-293', 'AUKG-045','AVOP-109', 'AVOP-155', 'AVOP-159', 'AVOP-167', 'AVOP-002',
 'BAMS-001', 'BDSR-185', 'BDSR-202', 'BGN-018', 'BGN-005', 'BKSP-274', 'BRA-007', 'BUG-012', 'CCCV-001',  'CHN-035', 'CLUB-196', 'CMV-049', 'CND-128', 'CND-129', 'CND-142', 'CND-089', 'CRIM-035', 'CRS-046', 'CUT-002', 'CWM-221',
 'DAJ-075', 'DANDY-289', 'DANDY-368', 'DANDY-440', 'DASD-267', 'DDT-469', 'DDT-482', 'DFE-020', 'DISM-001', 'DIY-030', 'DMOW-098', 'DOM-021',
'DOM-043', 'DOPP-035', 'DPHN-142', 'DV-1175', 'DV-1246', 'DVDES-659', 'DVDES-734', 'DVDES-804', 'DVDES-818', 'DVDES-832', 'DVDES-836', 'DVDES-878', 'DVLL-010', 'DWI-01',
'EBOD-249', 'EBOD-338', 'EBOD-405', 'EBOD-416', 'EDD-191', 'EMRD-058', 'EQ-059', 'EXD-048', 'FAJS-035', 'FAX-306', 'FAX-428', 'FSET-249', 'FSET-264', 'FSET-294', 'FSET-320', 'FSET-321', 'FSET-323', 'FSET-324', 'FSET-421', 'FSET-553',
'GASO-0012', 'GASO-0013', 'GDTM-044', 'GDTM-054', 'GDTM-078', 'GENT-060', 'GENT-075','GEXP-91', 'GEXP-93', 'GG-106', 'GG-132', 'GG-177', 'GG-228', 'GIRO-92', 'GKI-012', 'GSHRB-037', 'GSHRB-046', 'GVG-106', 'GVG-135', 'GVG-158', 'GVG-067', 'GVRD-05',
'HAVD-596', 'HAVD-830', 'HAVD-837', 'HBAD-141', 'HBAD-260', 'HBAD-267', 'HDI-001', 'HED-002', 'HELL-102', 'HERR-024', 'HERR-029', 'HERX-025', 'HERX-029','HND-110', 'HND-132', 'HND-138', 'HND-186', 'HNDS-024', 'HNDS-024', 'HODV-20467', 'HODV-20978',
 'HODV-20986', 'HODV-20993', 'HODV-21002', 'HODV-21027', 'HODV-21062', 'HRRB-003', 'HUNT-852', 'HUNT-913', 'HUNT-946', 'HUNT-971', 'HUNT-999', 'HUNTA-018', 'HUNTA-025', 'HUNTA-032', 'HUNTA-006', 'IBW-312',
 'IBW-356', 'IBW-363', 'IBW-372', 'IBW-475z', 'IBW-476z', 'IBW-483z', 'IBW-495z', 'IBW-506z', 'IBW-508z', 'IBW-518z', 'IDOL-018', 'IEND-002', 'IENE-101', 'IENE-112', 'IENE-114', 'IENE-159', 'IENE-160',
 'IENE-386', 'IENE-406', 'IENE-412', 'IENE-431', 'IESP-104', 'IESP-114', 'IESP-418', 'IESP-458', 'INU-027', 'IPTD-587', 'IPTD-619', 'IPTD-694', 'IPTD-813', 'IPTD-949', 'IPZ-140', 'IPZ-187', 'IPZ-204', 'IPZ-210',
 'IPZ-226', 'IPZ-228', 'IPZ-235', 'IPZ-257', 'IPZ-281', 'IPZ-306', 'IPZ-331', 'IPZ-344', 'IPZ-368', 'IPZ-040', 'IPZ-478',  'JOHS-005', 'JUC-112', 'JUC-368', 'JUC-398', 'JUC-419', 'JUC-944', 'JUMP-2210', 'JUMP-2312',
 'JUX-298', 'JUX-360', 'JUX-500', 'KAWD-596', 'KAWD-608', 'KAWD-629', 'KAWD-640', 'KAWD-651', 'KISD-082', 'KK-054', 'KRND-020', 'KRND-027', 'KRND-029', 'KRND-031', 'KTDS-726', 'KTDS-769', 'KTDS-774', 'LLR-005',
 'LLR-008', 'LOL-089', 'LOL-091', 'LOVE-90', 'MAS-052', 'MDTM-001', 'MDTM-013', 'MDTM-027', 'MDTM-029', 'MDYD-732', 'MDYD-785', 'MDYD-811', 'MDYD-881', 'MIAD-488', 'MIAD-573', 'MIAD-730', 'MIAD-767', 'MIDD-678',
 'MIDE-113', 'MIDE-123', 'MIDE-243', 'MIDE-007', 'MIGD-590', 'MIGD-594', 'MIGD-613', 'MIGD-625', 'MIGD-639', 'MIGD-654', 'MILD-863', 'MIMK-023', 'MIRD-139', 'MIST-045',
 'MMND-104', 'MNG-93', 'MOC-004',
 'MOMJ-017', 'MSK-006', 'MSTT-002', 'MUKD-192', 'MUKD-335', 'MUM-001', 'MUM-105', 'MUM-109', 'MUM-110', 'MUM-113', 'MUM-114', 'MUM-119', 'MUM-126', 'MUM-130', 
 'MUM-132', 'MUM-135', 'MUM-143', 'MUM-144', 'MUM-165',
 'MUM-168', 'MUM-169', 'MUM-172', 'MUM-173', 'MUM-174', 'MUM-019', 'MUM-067', 'MUM-007', 'MUM-079', 'MUM-097', 'MVSD-198', 'MXGS-236', 'MXGS-271', 'MXGS-553', 
 'MXGS-729', 'MXSPS-178',   'NHDT-996', 'NHDTA-141',
 'NHDTA-153', 'NHDTA-223', 'NHDTA-276', 'NHDTA-295', 'NHDTA-314', 'NHDTA-346', 'NHDTA-348', 'NHDTA-399', 'NHDTA-557', 'NHDTA-564', 'NHDTA-583', 'NHDTA-588', 'NHDTA-591', 'NHDTA-599', 'NHDTA-600', 'NHDTA-605',
 'NHDTA-606', 'NHDTA-610', 'NHDTA-636', 'NHDTA-639', 'NHDTA-644', 'NHDTA-657', 'NIN-004', 'NITR-139', 'NOP-019', 'NTR-003',  'ODFB-037', 'ODFP-010', 'OGPP-006', 'OKSN-103', 'OKSN-127', 'OKSN-228', 'OKSN-242', 
 'ONED-557', 'ONED-989', 'ONEG-029', 'ONEZ-027', 'ONEZ-035', 'ONI-013', 'OVG-025', 'OYC-004', 'OYC-005',  'PARM-062', 'PARM-065', 'PARM-070', 'PARM-077', 'PGD-587', 'PGD-788', 'PMP-189', 'PMP-193', 'PMS-198',
 'PMS-201', 'PPPD-320', 'PPPD-337',  'QBD-065', 'QQ-041', 'R18-294', 'RAW-006', 'RBD-173', 'RBD-249', 'RBD-281', 'RBD-291', 'RBD-306', 'RBD-328', 'RBD-346', 'RBD-360', 'RBD-368', 'RBD-395', 'RBD-397', 'RBD-418',
 'RBD-441', 'RBD-481', 'RBD-487', 'RBD-493', 'RBD-503', 'RBD-505', 'RBD-541', 'RBD-551', 'RBD-626', 'RBD-628', 'RBD-694', 'RCT-222', 'RCT-352', 'RCT-600', 'RCT-666', 'RCT-752', 'RDD-122', 'RHTS-015', 'RHTS-032',
 'RHTS-040', 'RTP-020', 'RTP-035', 'RTP-039', 'RTP-049', 'RTP-057', 'RTP-009',  'SAK-8453', 'SAMA-842', 'SAMA-853', 'SBNS-078', 'SCOP-118', 'SCOP-185', 'SCOP-266', 'SCR-111', 'SCR-021', 'SCR-022', 
 'SCR-023', 'SCR-040', 'SCR-043', 'SCR-050', 'SCR-056', 'SCR-057', 'SCR-067', 'SCR-069', 'SCR-077', 'SCR-082', 'SCR-089', 'SCR-092', 'SCR-099', 'SDDE-346', 'SDDE-372', 'SDDE-391', 'SDMS-297', 'SDMT-506', 
 'SDMU-100', 'SDMU-120', 'SDMU-140', 'SDMU-161', 'SDMU-165', 'SDMU-194', 'SDMU-196', 'SERO-0262', 'SERO-0269', 'SGA-019', 'SHE-125', 'SHE-147', 'SHKD-315', 'SHKD-345', 'SHKD-378', 'SHKD-403', 'SHKD-409',
 'SHKD-489', 'SHKD-518', 'SHKD-546', 'SHKD-586', 'SHKD-614', 'SHKD-619', 'SHL-035', 'SILK-001', 'SILK-052', 'SILK-009', 'SIS-012', 'SIS-020', 'SIS-021', 'SIS-022', 'SIS-023', 'SIS-028', 'SIS-032', 'SIS-007', 
 'SMA-661', 'SMA-723', 'SMS-004', 'SND-003', 'SNIS-110', 'SNIS-268', 'SNIS-313', 'SNIS-070', 'SNIS-070', 'SOE-146', 'SOE-028', 'SOE-339', 'SOE-586', 'SOE-910', 'SOE-936', 'SOE-940', 'SOE-941', 'SOE-990', 'SOE-992',
 'SOE-992', 'SON-501', 'SOR-018', 'SQTE-082', 'SQTE-090', 'SQTE-092', 'SRS-015', 'SS-025', 'SS-005', 'SSD-111', 'SSD-086', 'STAR-3115', 'STAR-316','STAR-325', 'STAR-395', 'STAR-476', 'STAR-545', 'STAR-551',
'STAR-553','KRND-020','RHTS-015', 'RHTS-040','RTP-020');


login({email: '_', password: '_'}, function callback(err, api) {
	if(err)
		return err.error;
	func.log('Logged as https://fb.com/'+api.getCurrentUserID(),0);
	if(text_reply.indexOf("loctuxau=0") > -1)
		func.log('Bad words filtering isnt enabled!',-1);
	else
		func.log('Bad words filtering is enabled!',0)
	func.log('Start listening!',0);
	api.setOptions({forceLogin: true, selfListen: false, listenEvents: true,logLevel: 'silent'});
	var stopListen = api.listen(function(err, event) {
		if(err)
			return err.error;
		//////////////////////////////////////FUNCTION////////////////////////////////////

		//1
		function ReplyWeatherInfo(req, id) {
			request(weather+encodeURI(req), function(err, response, body) {
				if(err) {
					api.sendMessage("Không thể lấy dữ liệu thời tiết từ server. Rất xin lỗi về vấn đề này :(", event.threadID);
					func.log('Unable to get weather data from server',1);
					return EXIT_FAILURE;
				}
				retrieve = JSON.parse(body);
				func.log('Sent weather information to '+event.threadID,0);
				api.sendMessage(retrieve.messages[0].text+"\n"+retrieve.messages[1].text+"\n"+retrieve.messages[2].text+"\n"+retrieve.messages[6].text,event.threadID);
			return EXIT_SUCCESS;
			});
		}

		//2
		function ReplyTextMessage(req, id) {
			request(text_reply+encodeURI(req), function(err, response, body) {
				if(err) {
					api.sendMessage("Em đang bị lag, chờ một tí nhé :|", event.threadID);
					func.log('502. Bad gateway!',-1);
					return EXIT_FAILURE;
				}
				body.replace("\\","/");
				retrieve = JSON.parse(body);
				if(body.indexOf("không hiểu ý bạn") != -1)
					return api.sendMessage(":) ?");
				mess = retrieve.messages[0].text;
				if(mess.indexOf(".tv") > -1 ||  mess.indexOf(".TV") > -1
					|| mess.indexOf(".TK") >-1 || mess.indexOf(".tk") >-1 || mess.indexOf(".cf") >-1 || mess.indexOf(".CF") > -1) {
					func.log("Advertisment link detected! "+mess,-1);
					mess = mess.replace(mess,"ơi <3");
				}
				api.sendMessage(mess,id)
				func.log('Replied: '+mess);
				return EXIT_SUCCESS;
			});
		}

		//3
		function GetIdByName(name) {
			var ID;
			api.getUserID(name, function(err, body){
				if(err) {
					func.log('Unable to get ID with username: '+name,1);
					return EXIT_FAILURE;
				}
				ID = body[0].userID;
				func.log('From ['+name+'] -> ['+ID+']');
				return ID;
			});
		}

		//4
		function UndefinedHandle(data) {
			return data = "hình"; // just temporarily
		}

		//5
		function YoutubeSearch(data,id) {
			request(youtube+encodeURI(data), function (err, response, body) {
				if(err) {
					api.sendMessage("Lỗi cmnr :| Bác check lại link bác gửi thử coi sao?", event.threadID);
					func.log('502. Bad gateway!',-1);	
					return EXIT_FAILURE;				
				}
				retrieve = JSON.parse(body);
				var link = retrieve.messages[0].text;
				var descript = retrieve.messages[1].text;
				api.sendMessage(link, id);
				api.sendMessage(descript, id);
				return func.log('Sent youtube search result to '+id+' with keyword: '+data,0);
			});
		}

		//6 
		function ReportAdmin(data, id) {
			func.log(id+" has been reported to admin!", -1);
			api.sendMessage(data+'\nhttp://fb.com/'+id, admin);
			return api.sendMessage("đã méc admin :)", id);
		}

		//7
		function SetAsAdmin(username, gid) {
			var id = GetIdByName(username);
			if(id == EXIT_FAILURE) {
				return EXIT_FAILURE;
			}
			AdminIds[gid] = id;
			func.log(id+" has been prompt to GROUP MANAGER of "+gid,0);
			return EXIT_SUCCESS;
		}

		//8
		function ReportGM(data,id,gid) {
			func.log(id+" has been reported to admin!", -1);
			api.sendMessage(data+'\nhttp://fb.com/'+id, admin);
			return api.sendMessage("đã méc admin :)", gid);
		}

		//9
		function KickID(id,gid) {
			api.removeUserFromGroup(id, gid, function(err) {
				if(err){
					func.log("Unabke to remove " + id +" from "+gid,1);
					return EXIT_FAILURE;
				}
				func.log("Removed "+id+" from "+gid,0);
				return EXIT_SUCCESS;
			})
		}

		//10
		function SMS(text, phone) {
			if(phone.indexOf("0") == 0)
				phone = phone.replace("0","+84");
			var SMS = "http://lamoscar-official.com/api/sendmessage.php?tin="+text+"&sdt="+phone;
			request(SMS, function(err, response, body) {
				retrieve = JSON.parse(body);
				var m = retrieve.messages[0].text;
				return api.sendMessage(m, event.threadID);
			});
		}
		//////////////////////////////////////FUNCTION////////////////////////////////////


		if(!event.isGroup) {
			api.markAsRead(event.senderID);
			switch(event.type) {
				case 'message':
					if(event.body == null)
						event.body = UndefinedHandle(event.body);
					func.log(event.senderID+': '+event.body);

					///////////////////////// COMMAND EXECUTE ///////////////////////////

					//#### Weather 
					if(event.body.indexOf("thoi tiet") != -1 || event.body.indexOf("thời tiết") != -1 || 
						event.body.indexOf("weather") != -1) {
						ReplyWeatherInfo(event.body, event.senderID);
					return;
					}
					//Weather #### 

					//Solve math (simple) ####
					if(event.body.indexOf("math") == 0) {
						var cont = (event.body.substring(5, event.body.length)).trim();
						request(math+uriencode(cont), function(err,response,body) {
								api.sendMessage(body, event.threadID);
								return;
							});
						return;
					}
					//Solve math (simple) ####

					//### JAV Code (random)
					if(event.body.indexOf("jav") != -1 || event.body.indexOf("Jav") != -1) {
						var ran = Math.floor((Math.random()*javCode.length));
						api.sendMessage(javCode[ran], event.senderID);
						return;
					}
					//JAV Code ####

					//#### SMS 
					if(event.body.indexOf("SMS") == 0) {
						var cont = (event.body.substring(4,event.body.length)).trim();
						var pPos = cont.search(/(?:\+)/g)
						
						var pKey = (cont.substring(pPos, cont.length)).trim();
						var text = (cont.substring(0, cont.length-pKey.length)).trim();
						func.log("SMS ["+text+"] to ["+pKey+"]",-1);
						SMS(text, pKey);
						return; 
					}
					//SMS ####

					//####  Youtube search
					if(event.body.indexOf("youtube") != -1 || event.body.indexOf("youtube search") != -1 || 
						event.body.indexOf("video") != -1) {
						YoutubeSearch(event.body, event.senderID);
					return;
					}
					//Youtube search ####  

					//#### Bad words filter
					if(event.body.indexOf("ngu") != -1 || event.body.indexOf("cặc") != -1 ||
						event.body.indexOf("lồn") != -1 || event.body.indexOf("địt mẹ") != -1) {
						ReportAdmin("Có thằng vừa chửi em nè :(", event.senderID);
						return;
					}
					//Bad words filter #### 

					//#### ENCODE/DECODE (base64)
					if(event.body.indexOf("encode:") == 0) {
						var str = (event.body.substring(8, event.body.length)).trim();
						var res = func.base64_encode(str);
						func.log('Base64_Encode ['+str+'] -> ['+res+']',0);
						api.sendMessage(res, event.senderID);
						return;
					}

					if(event.body.indexOf("decode:") == 0) {
						var str = (event.body.substring(8, event.body.length)).trim();
						var res = func.base64_decode(str);
						func.log('Base64_Decode ['+str+'] -> ['+res+']',0);
						api.sendMessage(res, event.senderID);
						return;		
					}
					//ENCODE/DECODE (base64) #### 

					///////////////////////// COMMAND EXECUTE ///////////////////////////


					ReplyTextMessage(event.body, event.senderID);
					break;
				case 'event':
					func.log(event);
					break;
				default:
					break;
			}

			return;
		}

		else {
			api.markAsRead(event.threadID);

			switch(event.type) {
				case 'message':
					if(event.body == null)
						event.body = UndefinedHandle(event.body);
					func.log(event.threadID+': '+event.body);

					///////////////////////// COMMAND EXECUTE ///////////////////////////

					if(event.body.indexOf("%pause%") == 0) {
						func.log("Suspend at "+event.threadID+" by admin",-1);
						Suspend[event.threadID] = true;
						return api.sendMessage("Đã tạm ngưng hoạt động.", event.threadID);
					}

					if(Suspend.hasOwnProperty(event.threadID)) {
						if(event.body.indexOf("%start%") == 0 ) {
							delete Suspend[event.threadID];
							return api.sendMessage("Ok!", event.threadID);
						}
						return;
					}
					if(!Suspend.hasOwnProperty(event.threadID)) {

					//#### Weather 
					if(event.body.indexOf("thoi tiet") != -1 || event.body.indexOf("thời tiết") != -1 || 
						event.body.indexOf("weather") != -1) {
						ReplyWeatherInfo(event.body, event.threadID);
					return;
					}
					//Weather ####

					//#### SMS 
					if(event.body.indexOf("SMS") == 0) {
						var cont = (event.body.substring(4,event.body.length)).trim();
						var pPos = cont.search(/(?:\+)/g)
						
						var pKey = (cont.substring(pPos, cont.length)).trim();
						var text = (cont.substring(0, cont.length-pKey.length)).trim();
						func.log("SMS ["+text+"] to ["+pKey+"]",-1);
						SMS(text, pKey);
						return; 
					}
					//SMS ####

					//#### ENCODE/DECODE (base64)
					if(event.body.indexOf("encode:") == 0) {
						var str = (event.body.substring(8, event.body.length)).trim();
						var res = func.base64_encode(str);
						func.log('Base64_Encode ['+str+'] -> ['+res+']',0);
						api.sendMessage(res, event.threadID);
						return;
					}

					if(event.body.indexOf("decode:") == 0) {
						var str = (event.body.substring(8, event.body.length)).trim();
						var res = func.base64_decode(str);
						func.log('Base64_Decode ['+str+'] -> ['+res+']',0);
						api.sendMessage(res, event.threadID);
						return;		
					}
					//ENCODE/DECODE (base64) ####

					//####  Youtube search
					if(event.body.indexOf("youtube") != -1 || event.body.indexOf("youtube search") != -1 || 
						event.body.indexOf("video") != -1) {
						YoutubeSearch(event.body, event.threadID);
						return;
					}
					//Youtube Search ####

					//### JAV Code (random)
					if(event.body.indexOf("jav") != -1 || event.body.indexOf("Jav") != -1) {
						var ran = Math.floor((Math.random()*javCode.length));
						api.sendMessage(javCode[ran], event.threadID);
						return;
					}
					//JAV Code ####

					//#### Bad words filter
					if(event.body.indexOf("bot") > -1 || event.body.indexOf("Bot") > -1 ||
						event.body.indexOf("Zero") > -1 || event.body.indexOf("zero") > -1)
						{
							if(event.body.indexOf("ngu") != -1 || event.body.indexOf("cặc") != -1 ||
								event.body.indexOf("lồn") != -1 || event.body.indexOf("địt mẹ") != -1) {	
									return ReportGM("Có thằng vừa chửi em nè :\'>", event.senderID, event.threadID);
								}						
							return ReplyTextMessage(event.body, event.threadID);
						} 
					//Bad words filter ####

					//Solve math (simple) ####
					if(event.body.indexOf("math") == 0) {
						var cont = (event.body.substring(5, event.body.length)).trim();
						request(math+uriencode(cont), function(err,response,body) {
								api.sendMessage(body, event.threadID);
								return;
							});
						return;
					}
					//Solve math (simple) ####

					///////////////////////// COMMAND EXECUTE ///////////////////////////
					var cooldown = Math.floor((Math.random()*3));

					if(cooldown == 1)
						ReplyTextMessage(event.body, event.threadID);
					else 
						return;
				}
					break;
				case 'event':
					func.log(event);
					break;
				default:
					break;
			}
			return;
		}

	});
});

//http://api.wolframalpha.com/v1/result?appid=WYY7XY-373PLLE8Q6&i=
