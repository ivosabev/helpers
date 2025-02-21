// NOTE: Only validates Bulgarian phone numbers
export function validatePhoneNumber(_phoneNumber: string) {
  let phoneNumber = _phoneNumber.replace(/[^0-9 ]/g, '');
  if (phoneNumber[0] !== '0') {
    phoneNumber = '0' + phoneNumber;
  }
  const isValid = bulgarianPhoneCodes.some((phoneCode) => phoneNumber.startsWith(phoneCode));
  return isValid;
}

export const bulgarianPhoneCodes = [
  '0700', // 0700 special phones
  '0800', // 0800 special phones
  '087', // Vivacom
  '088', // A1
  '098', // A1
  '089', // Yettel
  '02',
  '02991',
  '02992',
  '02992',
  '02992',
  '02992',
  '02992',
  '02993',
  '02993',
  '02994',
  '02994',
  '02996',
  '02998',
  '02999',
  '02999',
  '0301',
  '03019',
  '03020',
  '03020',
  '030200',
  '030205',
  '03021',
  '03021',
  '03023',
  '03023',
  '030230',
  '030239',
  '03024',
  '03024',
  '030247',
  '03025',
  '030256',
  '030257',
  '03026',
  '03026',
  '03027',
  '03028',
  '03029',
  '03029',
  '03030',
  '03032',
  '03033',
  '03034',
  '03035',
  '03035',
  '03036',
  '03037',
  '03038',
  '03039',
  '03040',
  '03041',
  '030410',
  '030416',
  '030417',
  '030418',
  '030419',
  '03042',
  '03043',
  '03044',
  '03045',
  '030456',
  '030456',
  '030457',
  '030457',
  '030458',
  '030459',
  '03046',
  '030472',
  '030475',
  '030476',
  '030477',
  '03049',
  '03050',
  '03050',
  '03050',
  '03051',
  '03051',
  '030517',
  '03052',
  '03052',
  '03052',
  '03052',
  '03052',
  '030528',
  '03053',
  '03053',
  '03054',
  '03054',
  '03055',
  '03056',
  '03057',
  '03058',
  '0306',
  '03071',
  '03072',
  '030727',
  '030728',
  '030729',
  '03073',
  '03074',
  '03075',
  '03076',
  '03077',
  '0308',
  '03100',
  '03101',
  '03101',
  '03102',
  '03103',
  '03104',
  '03105',
  '03105',
  '03106',
  '03107',
  '03108',
  '03108',
  '03108',
  '03108',
  '03110',
  '03110',
  '031108',
  '031108',
  '03111',
  '03112',
  '03113',
  '03114',
  '03115',
  '03115',
  '03116',
  '03117',
  '031178',
  '03118',
  '03118',
  '03118',
  '03119',
  '03119',
  '03120',
  '03120',
  '03121',
  '03121',
  '03122',
  '03123',
  '03123',
  '03124',
  '03124',
  '03124',
  '03125',
  '03125',
  '031258',
  '03126',
  '03127',
  '03128',
  '03128',
  '03129',
  '03130',
  '031308',
  '031309',
  '03132',
  '031324',
  '03133',
  '03134',
  '03134',
  '03135',
  '03136',
  '03137',
  '03138',
  '03138',
  '03138',
  '03138',
  '03138',
  '03138',
  '031387',
  '031388',
  '031390',
  '031392',
  '031393',
  '031394',
  '031395',
  '031395',
  '031396',
  '031397',
  '031398',
  '031401',
  '031402',
  '031402',
  '031403',
  '03142',
  '03143',
  '03145',
  '03145',
  '03146',
  '03147',
  '03148',
  '03149',
  '03151',
  '03153',
  '03154',
  '03155',
  '03156',
  '03157',
  '03159',
  '031602',
  '031603',
  '031604',
  '031605',
  '031605',
  '031606',
  '031606',
  '03162',
  '031620',
  '031627',
  '03163',
  '03164',
  '03165',
  '03166',
  '03166',
  '03167',
  '03168',
  '031700',
  '031700',
  '031702',
  '031703',
  '031704',
  '031705',
  '031706',
  '031706',
  '031707',
  '031708',
  '031717',
  '031718',
  '03173',
  '03173',
  '03174',
  '03175',
  '03176',
  '031761',
  '03177',
  '03178',
  '031791',
  '0318',
  '0318',
  '0318',
  '0318',
  '0318',
  '0318',
  '0318',
  '0318',
  '0318',
  '0318',
  '0318',
  '0318',
  '0318',
  '0318',
  '03190',
  '03191',
  '03192',
  '03193',
  '03194',
  '03195',
  '03196',
  '03196',
  '03197',
  '03198',
  '031992',
  '031993',
  '031995',
  '031996',
  '031997',
  '031998',
  '032',
  '0331',
  '0331',
  '0331',
  '03320',
  '03320',
  '03320',
  '03321',
  '03322',
  '03322',
  '03323',
  '03324',
  '03325',
  '03326',
  '03327',
  '03328',
  '03328',
  '03328',
  '03340',
  '03341',
  '03342',
  '03342',
  '03343',
  '03344',
  '03344',
  '03344',
  '03344',
  '03344',
  '03345',
  '03345',
  '03346',
  '03347',
  '03348',
  '03348',
  '03349',
  '0335',
  '0336',
  '0337',
  '0339',
  '034',
  '034',
  '034',
  '0350',
  '03510',
  '03511',
  '03512',
  '03513',
  '03514',
  '03514',
  '03514',
  '03515',
  '03516',
  '03516',
  '03516',
  '03517',
  '03517',
  '03517',
  '03519',
  '03519',
  '03520',
  '03521',
  '03522',
  '03522',
  '03523',
  '03524',
  '035251',
  '035251',
  '035252',
  '035253',
  '035254',
  '035255',
  '035256',
  '03526',
  '03526',
  '03526',
  '03527',
  '03528',
  '03529',
  '03530',
  '03532',
  '03533',
  '03534',
  '03535',
  '03536',
  '03537',
  '03537',
  '035391',
  '035392',
  '035393',
  '035394',
  '035395',
  '035403',
  '035404',
  '035407',
  '035410',
  '035419',
  '03542',
  '03543',
  '03544',
  '03545',
  '03547',
  '03548',
  '035501',
  '035502',
  '03552',
  '03553',
  '035534',
  '03554',
  '03556',
  '03557',
  '03558',
  '03559',
  '03561',
  '03562',
  '03563',
  '03564',
  '03566',
  '03567',
  '03568',
  '03569',
  '0357',
  '03581',
  '03582',
  '03584',
  '03587',
  '03588',
  '0359',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '0361',
  '03622',
  '03622',
  '03622',
  '03622',
  '03622',
  '03622',
  '03622',
  '03622',
  '03622',
  '03622',
  '03624',
  '03624',
  '03624',
  '03625',
  '03625',
  '03625',
  '03625',
  '03625',
  '03625',
  '03625',
  '03625',
  '03625',
  '03625',
  '03626',
  '03626',
  '03626',
  '03626',
  '03626',
  '03626',
  '03626',
  '03626',
  '03628',
  '03628',
  '03628',
  '03628',
  '03628',
  '03628',
  '03628',
  '03629',
  '03629',
  '03629',
  '03629',
  '03629',
  '03629',
  '03630',
  '03631',
  '03632',
  '03632',
  '03632',
  '03633',
  '03633',
  '03634',
  '03635',
  '03636',
  '03637',
  '03638',
  '03639',
  '036401',
  '036402',
  '03641',
  '03641',
  '03641',
  '03642',
  '03643',
  '03644',
  '03645',
  '03646',
  '03647',
  '03648',
  '03649',
  '03651',
  '03651',
  '03651',
  '03651',
  '03652',
  '03653',
  '03654',
  '03655',
  '03656',
  '03656',
  '03657',
  '03657',
  '03658',
  '03661',
  '03661',
  '03662',
  '03663',
  '03664',
  '03665',
  '03666',
  '03667',
  '03668',
  '03670',
  '03671',
  '03672',
  '03673',
  '03674',
  '03675',
  '03676',
  '03676',
  '03677',
  '03679',
  '03682',
  '03691',
  '03691',
  '03691',
  '03691',
  '03691',
  '03691',
  '03691',
  '03691',
  '03691',
  '03691',
  '03691',
  '03691',
  '03691',
  '03691',
  '03691',
  '03691',
  '03691',
  '03691',
  '03691',
  '03691',
  '03695',
  '03695',
  '03695',
  '03695',
  '03696',
  '03696',
  '03696',
  '03696',
  '03699',
  '03701',
  '03702',
  '03703',
  '03704',
  '03705',
  '03706',
  '03707',
  '03707',
  '03708',
  '03709',
  '03710',
  '03711',
  '03712',
  '03713',
  '03714',
  '03715',
  '03716',
  '03717',
  '03718',
  '03719',
  '03720',
  '037208',
  '03721',
  '03722',
  '03723',
  '03724',
  '03725',
  '03726',
  '03727',
  '03728',
  '03729',
  '0373',
  '03740',
  '03741',
  '03742',
  '03743',
  '03744',
  '03745',
  '03746',
  '03747',
  '03748',
  '03749',
  '03751',
  '03752',
  '03753',
  '03754',
  '03755',
  '03756',
  '03757',
  '03758',
  '03759',
  '037600',
  '037601',
  '037602',
  '037603',
  '037604',
  '037605',
  '03762',
  '03763',
  '03763',
  '03764',
  '03765',
  '03766',
  '03767',
  '03768',
  '03769',
  '037701',
  '037702',
  '037703',
  '037704',
  '037705',
  '037706',
  '037707',
  '03772',
  '03773',
  '03774',
  '03775',
  '03776',
  '03777',
  '03778',
  '03779',
  '03781',
  '03782',
  '03784',
  '03785',
  '03786',
  '03787',
  '0379',
  '038',
  '0391',
  '03920',
  '03921',
  '03922',
  '03923',
  '03924',
  '03925',
  '03926',
  '03927',
  '03928',
  '03929',
  '03931',
  '03932',
  '03933',
  '04100',
  '04101',
  '041019',
  '04102',
  '04103',
  '04104',
  '04104',
  '04105',
  '04106',
  '04107',
  '04108',
  '04108',
  '04109',
  '04111',
  '04111',
  '04111',
  '04111',
  '041114',
  '041115',
  '041116',
  '041116',
  '041117',
  '041118',
  '04112',
  '04112',
  '04113',
  '04113',
  '041144',
  '041145',
  '041146',
  '041149',
  '041149',
  '041149',
  '04115',
  '04116',
  '041171',
  '041171',
  '041172',
  '041173',
  '041174',
  '041178',
  '041179',
  '041179',
  '041179',
  '041179',
  '04118',
  '04119',
  '04120',
  '04121',
  '04122',
  '04123',
  '04124',
  '04125',
  '04125',
  '04126',
  '041270',
  '041275',
  '041276',
  '041276',
  '041277',
  '041279',
  '04129',
  '04130',
  '04132',
  '041331',
  '041332',
  '041333',
  '041334',
  '041335',
  '041336',
  '041337',
  '041338',
  '041339',
  '04134',
  '041350',
  '041351',
  '041352',
  '041353',
  '041355',
  '041356',
  '041357',
  '041358',
  '041359',
  '04136',
  '04137',
  '04138',
  '04139',
  '04140',
  '04140',
  '04141',
  '04141',
  '04141',
  '04142',
  '04143',
  '04143',
  '04144',
  '04145',
  '04145',
  '04145',
  '04145',
  '04146',
  '04147',
  '04147',
  '041484',
  '041488',
  '04149',
  '04149',
  '04151',
  '041518',
  '04152',
  '04153',
  '04154',
  '04155',
  '04156',
  '04157',
  '04158',
  '0416',
  '0417',
  '0418',
  '042',
  '0431',
  '04321',
  '04322',
  '04323',
  '04324',
  '04325',
  '04326',
  '04327',
  '04329',
  '04330',
  '04330',
  '04330',
  '04331',
  '04331',
  '04332',
  '04332',
  '04333',
  '04334',
  '04335',
  '04336',
  '04337',
  '04338',
  '04339',
  '04340',
  '04341',
  '04341',
  '04342',
  '04343',
  '04344',
  '04345',
  '04345',
  '04346',
  '04347',
  '04348',
  '04350',
  '04351',
  '04352',
  '04353',
  '04354',
  '04355',
  '04356',
  '04357',
  '04358',
  '04359',
  '04361',
  '043616',
  '04362',
  '04363',
  '04364',
  '04367',
  '04368',
  '04369',
  '044',
  '04510',
  '04511',
  '04512',
  '04513',
  '04514',
  '04515',
  '04516',
  '04517',
  '04518',
  '04519',
  '04520',
  '04522',
  '04523',
  '04524',
  '04525',
  '04526',
  '04526',
  '04527',
  '04528',
  '04529',
  '0453',
  '0454',
  '04551',
  '04551',
  '04552',
  '04553',
  '04554',
  '04555',
  '04556',
  '04557',
  '04562',
  '04564',
  '04566',
  '04567',
  '0457',
  '04580',
  '04582',
  '04583',
  '04584',
  '04585',
  '04586',
  '04587',
  '04588',
  '04589',
  '04593',
  '04595',
  '04597',
  '04599',
  '046',
  '046',
  '04681',
  '0470',
  '04710',
  '04711',
  '04712',
  '04713',
  '04714',
  '04714',
  '04715',
  '04716',
  '04716',
  '04717',
  '04720',
  '04722',
  '04723',
  '04724',
  '04725',
  '04726',
  '04727',
  '04728',
  '04729',
  '04730',
  '04732',
  '04733',
  '04734',
  '047354',
  '047356',
  '04736',
  '04737',
  '04738',
  '04739',
  '04742',
  '04743',
  '04744',
  '04745',
  '04746',
  '04747',
  '04748',
  '04749',
  '04751',
  '04752',
  '04753',
  '04754',
  '04755',
  '04756',
  '04757',
  '04758',
  '04761',
  '04762',
  '04763',
  '04768',
  '04770',
  '04771',
  '04772',
  '04773',
  '04774',
  '04775',
  '04776',
  '04777',
  '04778',
  '04779',
  '0478',
  '04780',
  '04789',
  '04792',
  '04793',
  '04794',
  '04795',
  '04797',
  '04798',
  '04799',
  '05100',
  '05101',
  '05102',
  '05103',
  '05104',
  '05105',
  '05106',
  '05107',
  '05108',
  '05109',
  '05110',
  '051104',
  '051105',
  '051106',
  '05112',
  '051125',
  '051126',
  '051127',
  '05113',
  '05114',
  '05115',
  '05116',
  '05117',
  '05118',
  '05119',
  '05120',
  '05122',
  '05123',
  '051234',
  '05124',
  '05125',
  '05126',
  '05127',
  '05128',
  '05129',
  '05130',
  '05131',
  '051314',
  '05132',
  '05133',
  '05134',
  '05135',
  '05136',
  '05137',
  '05138',
  '05139',
  '05140',
  '05141',
  '05142',
  '05142',
  '05142',
  '051428',
  '051429',
  '05143',
  '05144',
  '05144',
  '05145',
  '05146',
  '05147',
  '05148',
  '05149',
  '05153',
  '051536',
  '051537',
  '051538',
  '051539',
  '05161',
  '05162',
  '05163',
  '05164',
  '05165',
  '05166',
  '05167',
  '05168',
  '05169',
  '0517',
  '051727',
  '051728',
  '05173',
  '05175',
  '05176',
  '05177',
  '051782',
  '051784',
  '051784',
  '051786',
  '0518',
  '05180',
  '05189',
  '0519',
  '05198',
  '052',
  '052',
  '052',
  '05310',
  '05311',
  '05312',
  '05313',
  '05314',
  '05315',
  '05316',
  '05317',
  '05318',
  '05318',
  '05319',
  '05320',
  '05321',
  '053220',
  '053221',
  '053222',
  '05323',
  '053234',
  '05324',
  '05325',
  '05326',
  '05327',
  '05328',
  '05329',
  '05330',
  '05332',
  '05333',
  '05334',
  '05335',
  '05336',
  '05337',
  '05338',
  '05340',
  '05341',
  '05342',
  '05343',
  '053434',
  '053435',
  '053436',
  '053437',
  '05344',
  '05345',
  '05346',
  '05347',
  '05348',
  '05349',
  '05351',
  '05352',
  '05353',
  '05354',
  '05361',
  '05362',
  '05363',
  '05364',
  '05365',
  '05366',
  '05368',
  '0537',
  '05379',
  '0538',
  '0538',
  '05391',
  '05392',
  '05393',
  '05394',
  '05395',
  '05396',
  '05397',
  '054',
  '05503',
  '05504',
  '05506',
  '05510',
  '05511',
  '05512',
  '05513',
  '05514',
  '05515',
  '05516',
  '05518',
  '05519',
  '05520',
  '05521',
  '05522',
  '05523',
  '05524',
  '05525',
  '05526',
  '05527',
  '05528',
  '05529',
  '05530',
  '05532',
  '05533',
  '05534',
  '05535',
  '05536',
  '05537',
  '05538',
  '05539',
  '0554',
  '0554',
  '0554',
  '0554',
  '055502',
  '055503',
  '055504',
  '055505',
  '05551',
  '05552',
  '05553',
  '05554',
  '05555',
  '05556',
  '05557',
  '05558',
  '05559',
  '05561',
  '05561',
  '05562',
  '05563',
  '05564',
  '05565',
  '05566',
  '05567',
  '05568',
  '05569',
  '05570',
  '05571',
  '05572',
  '05573',
  '05574',
  '05575',
  '05576',
  '05577',
  '05578',
  '05579',
  '0558',
  '05580',
  '05589',
  '0559',
  '05590',
  '05599',
  '056',
  '0570',
  '0570',
  '05710',
  '05710',
  '05711',
  '05712',
  '05713',
  '05714',
  '05715',
  '05716',
  '05717',
  '05718',
  '05719',
  '05722',
  '05722',
  '05723',
  '05724',
  '05725',
  '05726',
  '05727',
  '05728',
  '057302',
  '057304',
  '057305',
  '057306',
  '057307',
  '057308',
  '05731',
  '05732',
  '05733',
  '05734',
  '05735',
  '05737',
  '05738',
  '05739',
  '05740',
  '05742',
  '05743',
  '05744',
  '05745',
  '05746',
  '05747',
  '05748',
  '05749',
  '05750',
  '05751',
  '057519',
  '05752',
  '05753',
  '05754',
  '05755',
  '05756',
  '05757',
  '05758',
  '05760',
  '05761',
  '05762',
  '05763',
  '05764',
  '05765',
  '05766',
  '05767',
  '05768',
  '05769',
  '05771',
  '05772',
  '05773',
  '05774',
  '05775',
  '05776',
  '05781',
  '05782',
  '05783',
  '05784',
  '0579',
  '058',
  '05910',
  '05912',
  '05913',
  '05914',
  '05915',
  '05916',
  '05917',
  '05918',
  '05919',
  '05930',
  '05933',
  '05935',
  '05937',
  '05939',
  '059400',
  '059406',
  '059407',
  '059408',
  '059409',
  '05941',
  '05942',
  '05943',
  '05944',
  '059441',
  '05945',
  '05946',
  '05947',
  '05948',
  '05949',
  '05952',
  '05958',
  '05959',
  '0596',
  '06001',
  '06002',
  '06003',
  '06003',
  '06003',
  '06003',
  '06004',
  '06004',
  '06006',
  '06006',
  '06006',
  '06007',
  '0601',
  '0601',
  '0601',
  '0601',
  '0601',
  '0601',
  '06020',
  '06020',
  '06021',
  '06022',
  '06023',
  '06023',
  '06024',
  '06025',
  '06026',
  '06026',
  '06027',
  '06027',
  '06027',
  '06027',
  '06028',
  '06028',
  '06029',
  '06029',
  '06029',
  '06029',
  '06029',
  '06030',
  '06032',
  '06033',
  '06034',
  '06035',
  '06036',
  '060370',
  '060372',
  '060373',
  '060374',
  '060375',
  '060376',
  '060377',
  '060378',
  '06039',
  '06041',
  '06042',
  '06043',
  '06044',
  '060453',
  '060454',
  '060458',
  '06046',
  '06047',
  '06048',
  '06049',
  '0605',
  '06060',
  '06061',
  '06062',
  '06063',
  '06063',
  '06064',
  '06065',
  '06066',
  '06066',
  '06066',
  '06067',
  '06068',
  '06068',
  '06068',
  '06069',
  '06071',
  '06072',
  '06073',
  '06074',
  '06076',
  '06077',
  '06079',
  '0608',
  '06090',
  '06092',
  '06093',
  '06094',
  '06095',
  '06096',
  '06097',
  '06098',
  '06099',
  '0610',
  '061101',
  '061102',
  '061103',
  '061104',
  '061105',
  '061106',
  '061107',
  '061108',
  '061109',
  '06111',
  '06112',
  '06113',
  '06114',
  '06115',
  '06116',
  '06117',
  '06118',
  '06119',
  '061202',
  '06121',
  '06122',
  '06123',
  '06124',
  '06125',
  '06126',
  '06128',
  '06129',
  '061301',
  '061302',
  '061303',
  '061304',
  '061305',
  '061306',
  '061307',
  '061309',
  '06132',
  '06133',
  '06134',
  '06135',
  '06136',
  '06136',
  '06136',
  '06137',
  '06138',
  '061391',
  '061393',
  '061394',
  '061395',
  '061397',
  '061398',
  '061402',
  '061403',
  '061405',
  '061406',
  '06141',
  '06142',
  '06143',
  '06143',
  '06144',
  '06145',
  '06146',
  '06147',
  '06148',
  '06149',
  '061502',
  '061503',
  '06151',
  '06152',
  '06154',
  '06155',
  '06156',
  '06157',
  '06158',
  '061602',
  '061603',
  '061604',
  '061605',
  '061606',
  '061607',
  '061608',
  '061609',
  '06161',
  '06163',
  '06164',
  '06165',
  '06166',
  '06167',
  '06168',
  '06169',
  '061703',
  '061704',
  '061705',
  '06172',
  '06173',
  '06174',
  '06175',
  '06176',
  '06177',
  '06178',
  '06179',
  '0618',
  '0619',
  '0619',
  '0619',
  '0619',
  '0619',
  '0619',
  '06197',
  '062',
  '0631',
  '06321',
  '06322',
  '06323',
  '06324',
  '06325',
  '06326',
  '06327',
  '06328',
  '06329',
  '06342',
  '06343',
  '06344',
  '06345',
  '064',
  '06410',
  '06411',
  '06412',
  '06413',
  '06414',
  '06415',
  '06416',
  '06417',
  '06418',
  '06419',
  '06490',
  '06491',
  '06492',
  '06493',
  '06494',
  '06495',
  '06496',
  '06497',
  '06498',
  '06499',
  '0650',
  '06510',
  '06511',
  '06512',
  '06513',
  '06514',
  '06515',
  '06516',
  '065164',
  '065165',
  '06517',
  '06518',
  '06519',
  '06520',
  '06521',
  '06522',
  '06523',
  '06524',
  '06525',
  '06526',
  '06527',
  '06528',
  '06529',
  '06530',
  '06531',
  '06532',
  '06533',
  '06534',
  '06535',
  '06536',
  '06537',
  '06538',
  '06539',
  '06540',
  '06541',
  '06542',
  '06543',
  '06544',
  '06545',
  '06546',
  '06547',
  '06548',
  '06549',
  '06550',
  '06551',
  '06552',
  '06553',
  '06553',
  '06554',
  '06555',
  '06556',
  '06557',
  '06558',
  '06559',
  '06560',
  '06561',
  '065617',
  '06562',
  '06563',
  '06564',
  '06565',
  '06566',
  '06567',
  '06568',
  '06569',
  '06570',
  '06571',
  '06572',
  '06573',
  '06574',
  '06575',
  '06576',
  '06577',
  '06578',
  '06579',
  '0658',
  '06580',
  '06581',
  '06587',
  '06588',
  '06589',
  '0659',
  '06590',
  '06591',
  '06599',
  '066',
  '0670',
  '06710',
  '06710',
  '06711',
  '06712',
  '06713',
  '06714',
  '06715',
  '06716',
  '06717',
  '06718',
  '067192',
  '067193',
  '067194',
  '067195',
  '06720',
  '06722',
  '06723',
  '06724',
  '06725',
  '06726',
  '06727',
  '06728',
  '06729',
  '067301',
  '067302',
  '067303',
  '067304',
  '067305',
  '067306',
  '067307',
  '067308',
  '067309',
  '06732',
  '06733',
  '06734',
  '06736',
  '06737',
  '06738',
  '067390',
  '067391',
  '067394',
  '067395',
  '067398',
  '067399',
  '0675',
  '0676',
  '0677',
  '067772',
  '067773',
  '067774',
  '0678',
  '068',
  '06900',
  '06901',
  '069031',
  '069032',
  '069033',
  '06905',
  '06906',
  '06907',
  '06908',
  '06909',
  '06910',
  '06911',
  '06912',
  '06913',
  '06914',
  '06915',
  '06916',
  '06917',
  '06918',
  '06919',
  '06920',
  '06921',
  '06922',
  '06923',
  '069241',
  '069242',
  '069243',
  '069244',
  '069245',
  '069246',
  '069247',
  '069248',
  '069249',
  '06925',
  '06926',
  '06927',
  '06928',
  '06929',
  '06930',
  '06931',
  '06932',
  '06933',
  '06934',
  '06935',
  '06936',
  '06937',
  '06938',
  '06939',
  '06941',
  '06942',
  '06943',
  '06944',
  '06946',
  '06948',
  '06950',
  '06952',
  '06953',
  '06954',
  '06955',
  '06956',
  '06958',
  '06959',
  '06960',
  '069612',
  '069613',
  '069614',
  '069615',
  '069616',
  '06962',
  '06963',
  '06964',
  '06965',
  '06966',
  '06967',
  '06968',
  '06969',
  '0697',
  '06980',
  '06981',
  '06982',
  '06983',
  '06984',
  '06985',
  '06986',
  '06987',
  '06988',
  '06989',
  '06990',
  '06991',
  '06992',
  '06994',
  '06997',
  '06998',
  '0701',
  '0702',
  '07030',
  '07031',
  '07032',
  '07033',
  '07034',
  '07035',
  '07036',
  '07037',
  '07038',
  '07039',
  '07041',
  '07042',
  '07043',
  '07044',
  '07045',
  '07046',
  '07047',
  '07048',
  '07050',
  '07052',
  '07053',
  '07054',
  '07056',
  '07056',
  '07057',
  '07058',
  '07102',
  '07103',
  '07104',
  '07105',
  '07106',
  '07110',
  '07110',
  '07110',
  '07112',
  '07112',
  '07112',
  '07117',
  '07117',
  '07117',
  '07118',
  '07119',
  '07119',
  '07119',
  '07119',
  '07120',
  '071220',
  '071221',
  '071225',
  '071227',
  '071228',
  '07123',
  '07123',
  '07124',
  '07124',
  '07124',
  '07124',
  '07124',
  '07125',
  '07125',
  '07125',
  '07126',
  '07126',
  '07128',
  '07129',
  '071302',
  '071304',
  '071306',
  '07132',
  '07132',
  '07133',
  '07133',
  '07133',
  '07133',
  '071337',
  '071337',
  '071338',
  '07134',
  '07135',
  '07136',
  '07136',
  '07137',
  '07138',
  '07139',
  '07139',
  '07139',
  '07139',
  '07139',
  '071398',
  '07142',
  '07142',
  '07143',
  '07144',
  '07145',
  '07146',
  '07146',
  '07147',
  '071471',
  '07148',
  '07149',
  '071501',
  '071502',
  '071502',
  '071503',
  '071503',
  '071504',
  '071504',
  '071505',
  '071506',
  '07152',
  '07153',
  '07154',
  '07155',
  '07156',
  '07157',
  '07157',
  '07157',
  '07157',
  '07157',
  '07158',
  '07158',
  '07158',
  '07159',
  '07159',
  '07162',
  '07162',
  '07162',
  '07162',
  '07162',
  '07163',
  '07163',
  '07163',
  '07163',
  '07164',
  '07164',
  '07164',
  '07166',
  '07166',
  '07167',
  '07167',
  '07168',
  '07169',
  '071716',
  '071717',
  '071718',
  '07172',
  '07172',
  '07173',
  '07174',
  '07174',
  '07175',
  '07175',
  '07175',
  '07175',
  '07175',
  '07175',
  '07175',
  '07175',
  '07176',
  '07177',
  '07177',
  '07177',
  '07177',
  '07177',
  '07177',
  '07179',
  '07179',
  '071798',
  '071798',
  '071798',
  '07181',
  '07182',
  '07182',
  '07182',
  '07182',
  '07183',
  '07184',
  '07185',
  '07185',
  '07185',
  '07186',
  '07187',
  '07188',
  '07192',
  '07193',
  '07193',
  '07193',
  '07193',
  '07194',
  '07198',
  '07199',
  '0720',
  '0720',
  '0720',
  '0720',
  '0721',
  '0721',
  '0722',
  '0722',
  '0722',
  '0722',
  '07227',
  '07227',
  '07227',
  '07227',
  '0723',
  '0724',
  '0725',
  '0725',
  '0725',
  '0725',
  '0726',
  '0727',
  '0727',
  '0727',
  '0727',
  '0728',
  '0728',
  '0729',
  '073',
  '073',
  '07410',
  '07413',
  '07414',
  '07415',
  '07418',
  '074201',
  '074201',
  '074201',
  '074202',
  '074202',
  '074203',
  '074203',
  '074204',
  '074204',
  '074204',
  '074204',
  '074205',
  '074205',
  '074206',
  '074207',
  '074207',
  '07422',
  '07423',
  '07423',
  '07423',
  '07423',
  '07424',
  '07424',
  '07424',
  '07424',
  '07424',
  '07424',
  '07424',
  '07424',
  '07425',
  '07425',
  '07425',
  '07426',
  '07426',
  '07427',
  '07427',
  '07427',
  '07427',
  '07427',
  '07427',
  '07427',
  '074277',
  '07428',
  '07428',
  '074346',
  '074385',
  '074400',
  '074402',
  '074403',
  '074403',
  '074404',
  '074405',
  '074406',
  '074407',
  '074408',
  '074409',
  '07442',
  '074425',
  '074426',
  '074427',
  '07443',
  '07444',
  '07445',
  '07445',
  '07446',
  '07447',
  '074495',
  '0745',
  '0745',
  '0745',
  '0745',
  '0746',
  '0747',
  '0748',
  '0748',
  '0748',
  '0748',
  '07481',
  '074878',
  '0751',
  '07519',
  '07520',
  '07521',
  '07521',
  '075214',
  '075215',
  '07522',
  '07523',
  '07524',
  '07525',
  '07526',
  '07527',
  '07528',
  '07528',
  '07529',
  '07531',
  '07532',
  '07533',
  '07541',
  '07544',
  '07545',
  '07546',
  '07547',
  '07548',
  '07549',
  '076',
  '07711',
  '07712',
  '07713',
  '07714',
  '07715',
  '07717',
  '07718',
  '07719',
  '07720',
  '07722',
  '077222',
  '077226',
  '077229',
  '07723',
  '07724',
  '07725',
  '07726',
  '07727',
  '07728',
  '07729',
  '07731',
  '07732',
  '07733',
  '07734',
  '07735',
  '07736',
  '07741',
  '07742',
  '07743',
  '07744',
  '07745',
  '07751',
  '07752',
  '07753',
  '07754',
  '07755',
  '07755',
  '07757',
  '0777',
  '078',
  '078',
  '07910',
  '07911',
  '07912',
  '07913',
  '07914',
  '07914',
  '07915',
  '07916',
  '07917',
  '07918',
  '07919',
  '07920',
  '07921',
  '07922',
  '07922',
  '07923',
  '07924',
  '07925',
  '07926',
  '07927',
  '07927',
  '07927',
  '07928',
  '07929',
  '07930',
  '07931',
  '07932',
  '07933',
  '07935',
  '07936',
  '07937',
  '07938',
  '08111',
  '08113',
  '08114',
  '08115',
  '08116',
  '08117',
  '08118',
  '08121',
  '08122',
  '08123',
  '08124',
  '08125',
  '081262',
  '081264',
  '081266',
  '081268',
  '08127',
  '08128',
  '08129',
  '08131',
  '08132',
  '08134',
  '08135',
  '08136',
  '08137',
  '08138',
  '08140',
  '08141',
  '08142',
  '08143',
  '08144',
  '08145',
  '081461',
  '081462',
  '081463',
  '081464',
  '081465',
  '081466',
  '08147',
  '08148',
  '08149',
  '08150',
  '08151',
  '08152',
  '08156',
  '08158',
  '08159',
  '08163',
  '08164',
  '08165',
  '08166',
  '08192',
  '08194',
  '08196',
  '082',
  '08304',
  '08310',
  '08311',
  '08312',
  '083129',
  '08313',
  '08314',
  '08315',
  '08315',
  '08316',
  '08317',
  '08318',
  '08319',
  '08320',
  '08321',
  '08322',
  '08322',
  '08323',
  '08324',
  '08325',
  '08326',
  '08326',
  '08327',
  '08327',
  '08328',
  '08329',
  '08330',
  '08332',
  '08333',
  '08334',
  '08335',
  '08336',
  '08337',
  '08338',
  '08339',
  '08340',
  '08341',
  '08341',
  '08341',
  '08341',
  '08342',
  '083420',
  '083429',
  '08343',
  '08344',
  '08345',
  '083461',
  '083462',
  '083466',
  '083467',
  '083469',
  '08347',
  '08348',
  '08348',
  '08349',
  '0835',
  '08360',
  '08361',
  '08362',
  '08363',
  '08364',
  '08365',
  '08366',
  '08368',
  '08369',
  '08382',
  '08383',
  '08384',
  '08390',
  '08394',
  '08395',
  '08396',
  '08398',
  '08399',
  '084',
  '084',
  '084',
  '084',
  '0849',
  '08510',
  '08511',
  '085118',
  '085118',
  '08512',
  '08512',
  '08512',
  '08512',
  '08513',
  '08513',
  '08514',
  '08515',
  '08516',
  '08516',
  '08516',
  '08516',
  '08516',
  '08516',
  '08517',
  '08517',
  '08517',
  '08517',
  '08517',
  '08518',
  '08518',
  '08518',
  '08518',
  '08518',
  '08518',
  '08519',
  '08519',
  '08521',
  '08521',
  '08522',
  '08522',
  '08522',
  '08522',
  '08523',
  '08523',
  '08523',
  '08524',
  '085301',
  '085303',
  '08532',
  '085320',
  '085328',
  '08533',
  '08534',
  '08535',
  '08536',
  '08537',
  '085401',
  '085402',
  '08542',
  '08543',
  '08544',
  '08545',
  '08546',
  '08547',
  '08548',
  '08549',
  '0855',
  '08560',
  '08561',
  '08562',
  '08563',
  '08564',
  '08565',
  '0857',
  '08581',
  '08582',
  '08583',
  '08584',
  '08585',
  '08587',
  '08588',
  '086',
  '0910',
  '09100',
  '09109',
  '09110',
  '09111',
  '09112',
  '09113',
  '09114',
  '09115',
  '09116',
  '09117',
  '091180',
  '091182',
  '091183',
  '091184',
  '091185',
  '091187',
  '091188',
  '091189',
  '09119',
  '09120',
  '09121',
  '09122',
  '09123',
  '091235',
  '091236',
  '09124',
  '09125',
  '09126',
  '09127',
  '09128',
  '09129',
  '09129',
  '09130',
  '09131',
  '09132',
  '09133',
  '09134',
  '09135',
  '09136',
  '09137',
  '09138',
  '09139',
  '09140',
  '091401',
  '091408',
  '09141',
  '09142',
  '09143',
  '09144',
  '09145',
  '09146',
  '09147',
  '09148',
  '09149',
  '0915',
  '09160',
  '09161',
  '09162',
  '09163',
  '09164',
  '09165',
  '09166',
  '091668',
  '09167',
  '09168',
  '09168',
  '09169',
  '09169',
  '09171',
  '09172',
  '09173',
  '09174',
  '09175',
  '09176',
  '09180',
  '09181',
  '09182',
  '09183',
  '09184',
  '09185',
  '09186',
  '09187',
  '09188',
  '09189',
  '092',
  '09310',
  '09311',
  '09311',
  '09312',
  '093120',
  '09313',
  '09314',
  '09315',
  '09316',
  '09317',
  '09318',
  '09319',
  '09320',
  '09322',
  '09323',
  '09324',
  '09325',
  '09326',
  '09327',
  '09328',
  '09329',
  '09330',
  '09332',
  '09333',
  '09334',
  '09335',
  '09336',
  '09337',
  '09338',
  '09339',
  '09340',
  '09341',
  '09342',
  '09343',
  '09344',
  '09345',
  '09346',
  '09347',
  '09348',
  '09349',
  '09351',
  '09352',
  '09353',
  '09354',
  '0936',
  '0938',
  '094',
  '09512',
  '09513',
  '09514',
  '09515',
  '09516',
  '09517',
  '09518',
  '09520',
  '09522',
  '09523',
  '09524',
  '09525',
  '09526',
  '09527',
  '095276',
  '095277',
  '09528',
  '09529',
  '0953',
  '09540',
  '09541',
  '09542',
  '09544',
  '09545',
  '09546',
  '09547',
  '09548',
  '09549',
  '09550',
  '09551',
  '095510',
  '09552',
  '09553',
  '09554',
  '09555',
  '09556',
  '09557',
  '09558',
  '09559',
  '09560',
  '09561',
  '09562',
  '09564',
  '09567',
  '09568',
  '09569',
  '096',
  '0971',
  '09720',
  '09723',
  '09724',
  '09725',
  '09726',
  '09727',
  '09728',
  '09729',
  '0973',
  '09740',
  '09741',
  '09742',
  '09743',
  '09744',
  '09745',
  '09746',
  '09747',
  '09749',
  '09782',
  '09783',
  '09784',
  '09785',
  '09786',
];
