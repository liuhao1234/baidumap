(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('shanxi', {"type":"FeatureCollection","features":[{"id":"140100","geometry":{"type":"Polygon","coordinates":["@@AEEAAEAGFSHGFIDG@ECICGKKDIZU@KMUKIKGACCCSCKBUOE@OFGCEAKAQBECAKOCCI@ECKCCMC@GGEKCM@CGAKAEKEGAKBGCmWKMIAIACECOKGG@ECAIDE@CGIOOACDE@AI@GKCCACFG@G@MCECAKHG@GCCIFG@MDCHADAHGNAbJFABABKAQFMFCHIXQNGF@DGDC`QBCLDHBNADAJ@JCBABMPOHAJAL@BQG@ECGGIC[D]BICMKEENEDALQIAEKKAGAAWEEYAIFCFMNMFE@IGAKCEKIEAIMICeLMA_GKDCDKBG@aMS@EDEHOBMDEJEBC@CGE@IGAGHI@EACIEYKKIKOIGEIQQGG@CBCPKBE@GMCIMAAJO@SNQ@IHKFK@GG@MNWNEBM@SGGCEI@SEEGCEIKCODK@AADO[ACEAMCCKEGGEM@GR[@EMMMGSMMCCC@EHGDGHEBC@WDEFA@CGISIAWCQKA]AOEAEAILIBA@G@GCECASCAA@GAIMC@A@IFIHCNCDA@KACKEYCQBIAOGAKDWAYFATCHB@CDADMLQFM@GCiLKBIDIZCCGEGEA[AYGEEAADOCEsLKHYDE@CEAAOBSGU@CAAEBa@QCEAAGAK@MCGAMBGICCOACDMPUDI@GMAACSCCO@ODCDCBG@SEIDCBGPAFDRcDICQBACEOBICGCEGCSBEGI@AFWN@BBJADaHWR@DTH\\BDB@NADCDQ@IBCJDJ@FE@WB@DC@O@BLBFPLVT@HAVAFCBOAgGO@Q@SHEHGVEXEFEDQDEBGTKJGBGNGJYLAD@XCP@HFFFPGBABDBBDABOBKFAHGFgHKHELC@KCCB]dA@SEIBGDU@gKKAS@KFOPCHMEgBKC_MO@GFIRENEFG@]GADDPEJMNGL@DEJBJAJKHCD@LDLEFIFMBOEIEGAWD[@WBaCOFCF@JCJEHIHIFGBMFCFCBS@SHABAHBJCBKDKJONALDRCDG@OBMDOAKHMBaIIQGE_BWMI@GHGBC@MGODK@SGaBQEIIGAA@GHCPCP@RADGDQDIFVHRLPDJHBDAFIP@HFLIREBSHEDEHENKLCLAV@DEDCF@\\EHGFABGDCDGLCLAJBJFHNROLGLBFLLAJBDbHHDFFBVXJRJRDpBNBVBPDd\\PHRF^PVBJFPPfbDLEPBFNF`DLHJAJGNBJAHDFNHAHFHBNADBAF@BF@FAHBHBB@EJDFJLHBDBBFFBH@^CN@HD@DCDKDABDLDDF@^IHAFGIeFIJEN@LFDFVCdaP@PEJBHCXSH@JBFLPHJAPFHDTBLJHBF@DIHCTCjQF@NJF@HERED@JG\\FRCJELKHAFCDILGFGJCJFDFhFQNBJGHGFCCXBBJDH@JERAJFDDRDHFHRHVFHDL@LCLIDG@EF@LE^EHOJQPILKR@LZJ~NL@BDAFGFI@ULCFAF@HRPZNJPDCXALETCVHLBHGJCRAFAHIVQHMJINC^@ZORAFBHJJD^LJ@LCFEDSLKHUFANANKPDH@ZKJ@NPXFDB@fBBBBJITIDEAGBALAHCBEAEBCFCLABCAKKOJMJGDCJAXCH@PHRCNEP@DBNJNHLNFFFD@HCNC@GN@BDBF@hEHCJCRIHBHAHB@JBBT@LDBATAPGFBHHF@BAHAJ@XF^DlJZXBRFDBFNP`^NHPFVBPFTBTLPAPFTJLJFDTBXDNHLRF@NRJFDABC@OFIHCJ@FDNCNFHD@DFDDFHFFDDD@HDDJDFBFRFHZJFBDDLDTCFFRFDD@FETCDBDD@HFXFTD^BdGFADE"],"encodeOffsets":[[115862,39334]]},"properties":{"cp":[112.249248,37.957014],"name":"太原市","childNum":1}},{"id":"140200","geometry":{"type":"Polygon","coordinates":["@@EABCEIBECCBALCL@HAHBDCAEDKBEIKMI@ABIASCKGGDGBCGGICBOKICEFMAA@CFGHCRD@GDG@CPEFABABMEEOICG@CPSBMXiJY@EDEJEHAH@dHF@HCDBLGJ@HGPFFAF@DG@IH@BCDAJ@RFNHFHdJPJHBH@JELMDIPKHCTCL@JDPH`CVGJE@QGY_i_UsqgQiIeMUCg@eJMAMOE[OSCiDKDWDKASYESA[CESEQBUDWAYE]QC[HABDF@LM@EBEHGACBEAGBEEEC[EUKJWB@FWDAFQ@QHUHKLILOBQMOGK@WMGOAC@AAMAKCWOKAQP@JBP@DY\\@HEJSJ[HMDSACAGYJMAGFa@CEEE]IOWSGEOGMAcBKCKK@MHKRERLH@TCDEPCdENE^CLEL@DDLADCJBHCJGAYAK@OJMDSZuD@JJFBV@JCNGJIDAH@H@RDPASGRDJJHFRBJDLRBGHDLI@CA@@ED@DDDC@CE@BCD@DG@CACGBCEMEUKEECGBGDEFCD@BA@AHED@BEHBDABIFKDB@BCD@DFHTBP@RJ\\DJDHHLAHEAIBGCEHAJDDBNDHAFCJBDANHJDPEZ@bHH@D@TBDDJEPBJUC@BMAIRY@AEC@CCCQCCCAEHGFGBUFEBGBADBBEH@CGBGJ@DBDMMUE}ABeCWDONWHG\\kLGN@LBRA`FNA\\ILKBGDCBMBEBA@CBCBGHKDMVBHCBB@FDBDHrTNGFIGQCIBEACKIDKCI@OEEMEOUEEBC@IBICC@MCACE@AAACAM@OKEBUE@IFIAEBGCEKeEIQQ[aCOAWDK@OBKBMEODAFALEAGIE@CGCEC@EAC@EAACBGCIDCAGEBAAGSAAEC@A@AMGG@ADCDI@GECGEBCEEBEAGDKDADKLCBEKKCAEISECERIAABCVIJAJBDBDCH@JGHDLABCLGDGCIEGBGBAAICGGCAEAAA@IFIDKACC@EAABECQSBC@@CCAC@CDOE}LQQawCMHCDEFOAEBC@EBEAEIICE@AACBAAEA@ACCCACEGEICCEAC@EAQDMCECCCEDMDEFGAGFICGE]AQCEBMBK@CCOIO@KAEBOKYMQGMCQBQNIFUDWGQGSCcBKTCP@LGPYLBHKBBBC@GGG@ABA@ABGBOnE^CJOB[GoUKkKKU@cHIDEZK\\AN@ZKZKEHDJBDfbP@NDRAJGFIDMJIHI\\UROJML[VIL@VDHDN@FCFKDM@GUFaB]DMDWJMPELGPQPEF_J]FMAQCSCOBcJQL]J}M]KKDKVGJEBQEETIJULoVcXSZCTBNHTGRmlUHKRIXIH[FY@CFAJBLBLCJOP]bOLOHOR@JVTANMN@JFHNNCHD@JHFBCHBBPPBFAJKLBBBB@BEFEFON]PYRaNEDKPGPO\\BFFHV@DBHNH@jlPF`A`RxNILc^KPGFMNGDMAEFKXSB]AGBMNihIBcDMNULgHYFUDMBMEIG[KIIKI_Q_UQEeIe@HcFaBI@_G_BkAWEI@O@YPG@ECEE@KHK@EEEDA@GDCFANCFAPUFICEKOAGIAQHKHAAASEOUCCASSOCM@KCSEGKBMGIIEOE}AOGKKAMHIWCu@aB[CA_CGICoLOHgNQECOEIGEMGkKGFCJCFIF]LAZFzCP_JIDINGT@HRhFXBZEbG`APJNX\\JPJdDPFLDPF\\HJFLJ^APGFEDE\\QFCDEJAPABEDADEHBB@HVH@DCDGBGFKCKFMBIFAJED@FTF@BCDAHCFMBCJFJKPDHHBBBGDAJFFLHVBR@\\BJNANIL[VIRBPLPLFN@HB@PCF@HLARQRGZQFELERMTILKXINMBB`WLA`B^H~^^LfJXHJDHHLVTtLVJ\\HRFTFPBHHN@LBXDHLFª^XLxPbDvRhDZFfBN°^|LnDtRHBJCBCBIBGJKTIJILQDEJQJ_DIDEFMLOPMF@HATFV@fETA^BdHdBN¤JLnNZTLRLJfZp^VTVNjPHNBLDFJJRH|TZPHLFRRZbHP@P`_n_JI\\kJEPAVF`NpddTZX@HFFDFADB@F@BARHRDRBP@`CHIJ@zPTDZFVTHHHJBN@XITSPWLMNKRAHTVBFJLDJDRTf@VDPQzDLRTDBPJRFNBLBHAXDL@NFHMLKbiPMNQDOFKFGbQNSDK@CJGFI@COIFKH@FEDEFCBGXIT@HDJDH@\\ULGFEDEBCEQGK@ADI"],"encodeOffsets":[[117022,41541]]},"properties":{"cp":[113.295259,40.09031],"name":"大同市","childNum":1}},{"id":"140300","geometry":{"type":"Polygon","coordinates":["@@BWBIDK@KDMZUTQ@MIIKKi]KKQSI[AKGOCODONUNKVMJQCqQsCY@SZWRMJ]JINGLCV@xLV@LANCNIX]JELCPAPDLBLFFDDBD@DEDICMAEBCLENDHBNG@CCCME@GCAOGBALEHCLFDBFCJBT@bCpMT@PHXFLADCBCEGGE@CHEDE@EE@KFCBAIBICQIMKYFEFCL@DA|wDEDKCA@CFGHAXIFEAGGGDGAIHEDE@KIS@GFGCKCASAAAPKFGFAXDFCHANGPSFMPSFMNgPQPCNGJKFIF[N]DSABKFKFILGNAbBRCHKBIAKLIXMNIDKBICIEKWO[G_SGICKAQ@QFCGiAIGEOAODOJsZoRUFS@WA[SKKw]EWE_MIDEZCHEDOBGDKBWBeCSCGEAEBIEEaAEEGEOAcDOFWVIDOBsIcBUAwFKLCJOP]AkFIVOR]RELMTCN@^AFGH_VIJcpIXIJaVCFEPALFZEHIFeRKHIFEJCPAJBLFZJ\\Ln@TKRGDOHS@KAMBKJCLCHAfCHGJSFM@EDCXOZ@LFFPHBDKZEDIF]FSAICYOIQAGOWSGoBKBGFIJKHGJEJIJQCaSMKAMCCY@KDGCK@C@APGAMDGBOPANABIDI@CBMBGAKCAD_RCDCHE@MHWRGJEDENBRALABEBYIM@GBGHCBGBCD@NEHDJHDH@LGDBDF@N@HEHBDDDHLJ@@BCFBDPPHJ@DCFBJFDH@LHFTBBJBJBLNnXHDLAHBLFBFBLDHN@LDHF@HNDDDDL@FDJPDBLFDRALBFBHDPEF@VPLATDDDBDLHLJNV@LYVCJLLFLBJENKPER@DDHFDHNJBVED@JDVBLA^@HDDFdLPHpVdHNHFFLZHH`PNDbPTdN^RpRNBJ@pUTCb@^JVJNDd@RDP@"],"encodeOffsets":[[116281,39446]]},"properties":{"cp":[113.583285,37.991188],"name":"阳泉市","childNum":1}},{"id":"140400","geometry":{"type":"Polygon","coordinates":["@@AKKMqJYHQEOKIKKSMQDOTC\\HPFR@BOK__[SYCOHKPKN@`GvCRKBMGaCKHGTCTBNGPSVYBM@KACIKEAC@QFE@QGCCEAGHCBCC@IDAHAHBHGH@BA@CCACDACBC@I@A@CGK@QCC@KCAIAAE@CBANHHBL@DAJITCDABMBQFKNGp@XELERKLITQVMVExBJQLaNQHODQ@OCS@MAMLSDMIMKMAICAQACAGIFIB[HSBIAEKAAEEAE@AACG@EBGDE@ICGSMSGIACCAC@ECEDCB@NLDBPANCHK@EFKMDCCCAEF@@CEGCBCVQBC@AAACAoKOD@EAASDEA@AJKHE\\EBAJAAEFKB@BBNDH@FABCBANABCGG@ABABC@IFBDCD@D@AGG@EEA@AFA@CEOCGBSAAB@D@BC@CEA@EB@FC@IAI@EC@ANGDCDGDAFBDGBOI@@ADEH@HG@UJMBI@GEEBCJC@C@CCEUEMGMMAOTIrEHIGG[EJIJGJMAGAEOKMAUHgHKAIGAYFMPCAMFMFYBSB[KQWFSHILKNYCKIGQGMDILKBaOMAWFW@KBmZONKHQFUCU@OBKFKDGFKDiHSAICGGWgMK_CQBaHMLGHAHBRDHM\\MJGDWHO@QCKCcQYQQEODKD]fQNGBKAcGQBGRKGeKaOGKCIGAOFe`QDSD@MDMJIROPODQHIJENGHQA_QQAKBIHoKYCi@iDSFGFGL@LLVBHATCNEFGBS@SDWLQDI@MAOIMEK@WJMFyJUHMJUZOFuSMFGN]`GRAHUTUHKJQBcOWA»_SOeDEJBR@JCLKNEJHRHJNHdPVJfRZNHHBHBTCNGPG`BHHJBbAXG\\AXDZLNLfAVE@IA_]GCGAHEFwLIFBDERBLFJFDBD@BC@QIGHCFML@DJDBBBFABGBGFBVCNCHEDEBwBkDCOFITINMDSDMF]PQLWZKJMJQJASPSdO`AFEJOnKjKXOHYHQHGJm^ILO\\KbEDIFOBI@UHIFEHMJCKPUTA`EPKNWDI@CTFf@`RPDJAFOPIVOAAB@LJXAFGDAD@\\HPfPFHAJDN@HCHLJLTHVELELFHNHP@^MV@^FNRBDIJMJGJLTNHFHDP@JQP]`ELBNZDRAfB^FTLRGH@HPRJH@THLTLHLDR@^BVDLCJELeHEXMJAdAPELIFIPK`MPKNQFCJAJBFDLPFHJDJBP@\\GfAJCdWbATDLFXXLDNLHBPCNILENCRBRD^NLNFNGZQJ_@SFGNF\\CNIXORWNAJFLDTCbCRMHSFQ@OFIHCLBDXCD@NFFAHBPBLDHFFDH@RELBL@DEAICG@EDAFATBHCDEFWBCD@X@TENA^INAHFDHHFLNJNRF\\B@VHFLBJATINM\\QRAPCTBRENKVUJOAkNC\\DHCDEFMVODGDUJINER@TDPBPEJATYJGJEdCNMDOEUEICMVU@K@QAKKUAKHKZONU`G^FFBLL`VNPRNjPFVEjANDj@PCPKLC^BDJFFdCZDTGFGB@D@BFGVDH@\\BDD@HCHGHAFDBDBLB@DIJiHAHBTGJ@PDF^@HTCDK@KDCHADB@FBB\\PHJD@BEFEF@DBBLNNHALBLRDNLLJDJBPGNWZad]TUTIGGBCNI@ACUIKIUVCNDLKJITIhGVIPKJGLG\\]TGNANGJGLKJaHQTaPUJGVG"],"encodeOffsets":[[116269,37627]]},"properties":{"cp":[113.013556,36.491112],"name":"长治市","childNum":1}},{"id":"140500","geometry":{"type":"Polygon","coordinates":["@@EG@GDCHABCEG@E@APBJGHADAAEU@EAMCCE@EFCF@LFBOJM@IEUGIKUBMHQTaBIEMMG@EBAVEVKPQBEIGBKBCFCBI@iAAKAKDgA[DEFAFANOACDAFADEREBOGAQLSBQFKBECCKAEACSGIBKAAGCI@EMMKSOMOCO@KDGEOIOTS@ECG]@KJSEMCOAMGGBSGIACBKLMCGFCBYQU@ECCCGQEEKKEIAAGAQ@ECGMECmBCDIPMDaSAC@C^AZIDG@GQCELEHEA@IEGGCCK@IJIFIACAAIBYLMDUAEBAD@DCDQAQRCBI@CFC@GBOCGCSEKDY@CAFA@CAIBKAGCA@CFEAAGBC@BCAGJC@AECDA@AEEABADOFKG@FEDAAAADECCDADA@ABAACBAEAFEDCFHBBBACCF@@AACC@AECAEC@ADA@@GAABIEACDCCCAACHC@BEAQA@CBE@AEACDCAKBOC@C@OC@CFI@AAECCI@KEG@CDYLI@KEIBUFOPEBGHKCMF_LUCOESDC@MHI@AEIEHQACMICCBkAIBAD@BEFK@I@AGMICEBKBKHC@KCQGGCWACE@GFG@CGUGGGEAC_MIBQDQCCEa@UHABAJABGCQFM@]FGAAACKOIMMQAIE@GDEAEACIGGOEGMGWBEAMDQJK@GAKEISESE@M^BPJJAFQ@EBWR@HAFS@CFQHCDIBE\\ADGBE@CAGWC@CPDPABABC@ICIKIECEBI@CBCJCXCHUCCeK_FgCQ@ICAAAMQBSJQLE@SAQCGCC@UNMDIFCAIIKFKFGBG@IGCAXWBUFK@IE]]QGQBcCK@IDSCSDG@YGI@A@AFDFDFVhDLEDI@CAQQECkAWEMEcFKBCB@DFFBDGNEB[@SDcP_DmJUGKCAACBCBABCD@BJB@DUDUHMBWEQBODETNDJRDLATILOJABAFDN@BEF]JYDEFAFBPFLHHFfMLQH]DOLURS^CRAbQfGPEDKXETJP\\XEjHjKLM@IHC~K`BJXPJLBjJH\\DXF\\R``RLHNJ`EJQRERFN\\RTJLNCTGPGJQRINCPDJFDDJC\\DXFJNFjevW[jEfAfBdJRP@PGV]bE@GDCDEJEFMB[OGPE`EDKBCBARFJJEJAT@RFP@B@FJJFPE`SLAJ@dMP@dLXBVCVGZC`AXJPBbCfE\\B`Rb`hV`R^`NTPFFFXGXApKVTP¼`XBdPRALIVGVSBGHQ^_HMNEvTPEVYNIVGzINEXIL@NFPJNBJ@RCXKTCT@HAFEDMBSAGKU@KHKHETEjCj@ZDpLJGLARB`RRBHGFMJIRGPCPOJQNINC@TCRCf_PEHBDJHLbPfLLHHQRAdHLBHARM^eLCPCRFZRdRLDRDP@XGHCNIN[ESBMHGNKREPARA`DNLXhHHJDTBjGLCHELCLEPAV@VDRELGPMnYLA"],"encodeOffsets":[[116312,36686]]},"properties":{"cp":[112.651274,35.597553],"name":"晋城市","childNum":1}},{"id":"140600","geometry":{"type":"Polygon","coordinates":["@@@GDE@OGAM@KEKOAOJQ\\UJKBMIM[AQ@UAKGEEBIHCAAGACGLOEIDINADEBGDC@ASE@EFCBIJENALELDHEHADC@CUG@GAAFGBCFCBABOFIDCREF[FCHEBOI]EKGIE[COEKCOIcIOW[IMBOH_FaAYEWQg@GHSJMJC`IDOEyBY^KJEDEDIHElLNHHFFJDPRFhMPGpKJDDHB`\\DbAv@XDGJBNLLPH~BPFJFHJANHLTFLDN@PDTTDBVDFPBTBBLGRGJBBHLPDFEJOVEBMDEBCD@HCBFF@FGL@LFFFDH@ZOP@J@XFlB`A`HJ@bAdEGf@fJRF`V`RLJJJ\\LJHNFNAVCZEhGVKNMdCJAjgNMHA^BTALWFENBHCNMHELOd]JKwM_Q_BOEikG@GMCAS@EAAEAEDELUHOFGJIdOZQbQDEHEFEFE@AAAAALKBIAEQQDGEAIGC@DGMMEG@INMBMUS@IPQPGPK^aPODIAKAKBIDEZ@\\EJGJWLQVGnkHQGSAMDSTYdWpUVKJIFSUAEGEKBa@GAC_[WKKWAMEKIKGOSGeDI@G@OGcCGG@MBMEAG@iXICGO]MKGGSECKBWNKLK@SCoFWAQBeCYFK@OAYKiYMCKB¡XKHWHMHSNBJHTBHKDAFeZaBKCEIE@GCaAIAEEAEBIACOMEGIACC@ISGiKoS]GmCeKIEOQAKGOIKKWWOEO@MGMMIiCeGIUAQEKIKECQ@MLEHMPKDI@UGKAQGGAOFO@@C@@JEJEFGA_GKOKEAQMWKWI]CWLEAWOIKAIFMGYEGWGWBOAMDGF]CG@MXDNCJIDUAIDGHGPCNKJQBSFS@YCMEsOGWGKBQNQDSBOCaKQAKD_V_LE@CEEAQBEACI@GDKAIQEIAKDEDEJAFBDBBRFHDDDBLCFGDM@eCG@GBCF@HHR@NCD@HNL@DC@IAAB@HAJCHWLKCG@EBE@MGICIAEDADBDLR@HCTCDQFMFBNBFADUN@FFbMZIJQDYLSFaBYCOCMIM]GEGCOFOVENGJENUNIBGNRFNJBDADUJEJCNJNIHGDWFIDGJCHCJ@HHJAF_^ABHRDNAJELEBKDAF@NQRET@NC@C@C@CEEACBIDULMNQFM@MGEAGBCFKBCHEJEPGPMTAF@DDRJHHD^J\\BTFrAhBPFNRuvGF_P[VERCTEHIHD@LXAJMF@FJHFNILMLENBDBD\\TFHHDJBJFHLVhINALDRDLAZ@HFFBNCLCVBRDJLDDDFBLHBFJH\\RLNNVRR@BNJFPDRDFB\\HFHTFFLFLDRRFJJ\\JNLXFFHFVZJJLXPNFHDF@LDNFDFHBNj`HRP@DBBFADLJ@TABABFFBPHFHHRJ@HRP@HLFFJBFFHBDJFHD@DCD@DCBDFEBDJEJ@D@BH@HRAJJFFBFFLBJHNHH@NFBBDHBBVHLPPJENMJXTBJHNFHDLCDN@PDH@JCX@HBNHNJLHVFNF\\XZLLDJPCRKDGFCREXKZQ^GL@ZChINIH@jQTAfM"],"encodeOffsets":[[115328,41203]]},"properties":{"cp":[112.633387,39.531261],"name":"朔州市","childNum":1}},{"id":"140700","geometry":{"type":"Polygon","coordinates":["@@L@LDLCZ@DDBNNLbTRDJIFIHILGJIHELApATHPXBHJRZPJDTB^EJEFCLYACOGEE@KPYDWFCN@TEHIDGBeDGDKLINALBT@PGHCLQ@SKmI[EYAKBIDOFIJELGfQJEFGEYBKFODEbUJIJWdoJI`UHGBE@]DMNSFK^QPQJUlE^BPODILKxEVBdAtJPAJCXUPEdCPBHFFFbBFFAJBFHFHBbD\\BXCHCPAFCDGFYJC`NXFFx^LL\\TXBT@VEpQtYPIPCPBHFBJHjTARRP^DLAXIJEHIjIXCPGPMH]COEMG[[aCK@KPeCIEKIMosQ[kyokQiBOEeAMCKQUOEQ@[QSSSoE]BQEMOMQCkSWOKMCKB[GaGQGGGMAM@]_[YIIIas@]IOW@OCQMUEM@YGKML{BQGOIIEMEMAIHMNKPEX@DI@YGIUWGQNSZMHKGMQMEKCM]MCIJQHUHIL@FDDA@KIGAI\\oDYEOIIEAG@EDIBACAGJICKE@@HIJMACCCMEEIAIBCF@FEBIB@LBNANEHE@KCIDCBEHOCKEIKCMOQKICUDMP[CIIGEQJQDOOEQ@QC]OYScUUISBOJ[@[GKCKOaLIHW`SjIbKLIHMHMBSH[^KHIHOLUJgHSJIJKLMCUDJVJLDV@BMJADHHSJSVc^YbMXOHIAICKKCMKQKAGBMMAKCAE@EFAFC@GI[OAA@ECAGBCD@LCLSD@GE]OCI@SHGAGBIjCJA@AKACECGBGHGDC@AC@[CGHUAEC@A@EHSHYCcDEECI]AKDOLODi@MCiBUFOEiQMMO_UKKEA]E_HMVYPGLBLLVBL@^UVDNFJFVCPMNcDSNSZYHOASCQ@MFIJCVCHUPENCFGD[CMDBlIPUVMLQFSAODQB[RMNSJIBKAGE@U[AQEIMKMGECGGEG@cLMBSFW@C@ADEXCFGDSAEBCB@FFL@FADEBSAQFG@ECGEKCOAGAEBMEC@WDACDKJGPER@TENGDQDaCSEKBIXMPQJWDME[HMTE`@RIHYEMKM]MQCQAMDKFMJODGAMKKCWWKESCaBcXIDeB[HO@IAICEGKOECIAIBEDMROL_NOLEJKJOFcBIBWNGFKfIFKDUC]AQ@KCKGKSSGG@QIGOG@QHSK]EeAQBYCAMFK^_RO@ICOEGMGKSHINIJIACMQQCKAU@]NO@MGEGFKFKGUKSKIDG@GCMBIEGeOGO@[BCHCBEIW@KBAPBJUPOBECIQO@_EeDSAGKGOCQJMJUNKJ[LODMBMCUD{CaHBGAECEYGG@CBDJJH@FCFQBMIOJWEQEWEgROJGDGAKESCcCSIUCMJQPQFSQSGCIBSL]^]TMNePo`QJKNgnIRE\\HLNBDHGJGFADI@@GIAEJGFI@CCAKAECCC@ABADBREBEHERE@EA@GMi]MMAMB[J[R[^MHCTBLANDNL@ANDJH@HDDADCB@`BLFBDDPLPpJDBBLDBZPPBZARDRH\\TPRFBPBRLBDCB[PM@GGC@EBKHG@EDANBVAJCBGDEHKJEHGFM@KTORzPJADACG@MFINGHAHDHFLAHCdWNEXCfODC@MBCJCLAJBBBDZHJFH\\@BBHPD@PGF@DBDFBHCLBJLLTB\\BRDb@DJFHRHTJPVJVHPHDLHFLAJGRIN@RFATPJNDJFTbFBBTHFFLLJNJTFHLJdDhJNDLNRFPEXAhBHDHRJDJEHAF@NEFCBUD@LBFNBN@BED@\\BBB@DHB@BDRDHD@BCBKB@D@DNDBL@DADGZB@FIN@DDFH@FIDKDAN@HDDHBBXFBDAPDPRLNNDHDDPBRBTGBAAOHIHE^CDCDMAQBGVGJGDARL@FLLDJDDNFDJNLBFFHHFRHRLLL@DAFFDVJFDDH@JDHHDRXBJVPPPFNARBZJLXTVNrLR@HFBBFBFTJ@FHTAHDDFDHAJHTRAJDdCCQBEHODAJCTFH@DADCHCXADFDTBBHNJ@VCNODCPBDDHJNAHBNDL@HBBBDF@RAbBFDBV@THPABBDFF@ZCLGtKDFCPBBFFZHVBLBFHDHYDCJAJKLDj@HENKRCNCB@DGASDEBBZCXBLPHJBRAZDLFBD@LCBMDGDEJ@J@BNDBJ@HBBTDDBDF@H@HABKJBJBFPF^BLBDRBXTJHJ@DEBCF@XADGFCHGH@FDDNDTNNHNN@FQ\\@HFNHHLFDDBNDF\\BCPBBL@PCLDFJHDFF@TFJHDTHN@FAXMNMH@@HELGL@JMR@TIPBBJNND@HAFOLAD@DHHRRFJJHLPLJZLJFBD@FGJBHJHF@DHD@FAFINCPAFGFCT@bNH@LADCLC`HNBfKJDJNFBLJDFBLJHF@NENMDEJEZBFFBXHBLBFLJBKRCBMFFFNLJD^A\\CJDHHFDH@"],"encodeOffsets":[[115781,38970]]},"properties":{"cp":[112.936465,37.296495],"name":"晋中市","childNum":1}},{"id":"140800","geometry":{"type":"Polygon","coordinates":["@@T]VQPK^CRGNKEeGGEKAKBIFEZC^IFE@ACMBEBAPIJKBSCKIQMCFS@CACEGBAXKFERgBGAUDG@EECUIQOUCKGCE@GBGVYVcHOAGKKBELA@CUAIBGNU@EAOBOAGQWGAGFMABBCJCFKDIFCFAD@FABCBI@EACCEAaHWCEDQRMFODkBCACEEGKIIDQLCBIASOEAgNECKKEEE@CDYCQEMMIMAUFE@EC@KCCKI[DKAICEE@ICCkAEBGAMIO@C@OScAGCAE@APMFGDG@MDGDG@EGE[OG@MBOCMOKIIQEBEA@E@MGWCCEAM@WMCGC[AKCGGE@CCCMGGGGAKFCD@FIDKBM@OCKAIEOMMAAGIKIAU@MEI@KBG@YRCBWDAAEGACECQEGBE@KGKKQEGBCAGDSDGBM@MDIFEJCBIBIASOKEMASGWMICOF[RMFE@KEEGSiECQCI@EBCDILGFKBQBWAIDSRGDG@ICMKKKMSMWIeCCGE«I_I]KcQsICI@CDW\\MLUJS@KAEGAEDS@_IY[o_gYKE@]JK@KEIIKIKEGA[PUNILiPSBWCECAIIKOKSEGGGOEUEEEAIBMLE@KKIW[IK@YLGHmROBGAaG_UGMCODULi\\YP]NOBMAKC_cOMIEQAQDyVaJWDDUDMHSLSRSZO`M^ETDZFVNZLh@`EVIZevETHrdpN^BL@FCFKF@D@PBFHPBD@FEHADBJDLBFDDJBPJP^NTZXXZT\\JTH^H`H^Pfh¾Jf\\ðLdJPJR\\ZRVztHPràFLJH^LHLNHNFPF\\RzHTv¢\\~BDRLJ@HInABQDCDAHB^AFCDMHAJGLAJFR@NCP@NH@FD\\NDFHDBDF@FL@FD@F@DDHLDFHZPFTDVATINMFQVBVGDICGWKIO@QJInRrHTFJ@PIJMPGNA`AZGHBT@NENANBHAJAVKfGRK`YNCNBZX`JPJJPBLCDCVAXD^DLC`V`LJPDP[@YHWPQDK@SDOFGN@PFRBZAXBHFF@HNBPZ`N\\V`RXVN^BfQ\\_HMHYHERGJGHSBI@gNWbMbKNETYFKHILANBLFHNb^PHnJTAJEDSAUFEFCHI@QIBiLQ@KAECEAOACEDIJKHSACCCSGAAHEBCAGGEE@GFOFKGA[AAAGB[P[PQDGEIICIKDGpeLAJA\\FZLFJFHXHLAJGHDTFDHFDX@ZJLJB@@GBEVK\\JJAH@HCLpP\\@`EnMZUF@XJAXDTJLHHJNBP@RBVDRDJLLBLMZN@FLBHDJAFECO@EDAZBdFTBREZYVORSPGVCMZHbEP@AEIGQEKKEICU@IDEJIDEPAR@HEZCJBF@FAFEJ@HCJBDADA@@AC@ABAAI@AIAAABMSOCGACC@KLEBKCCDeIAICCBG@AIGCE@KDGSACGAKFI@GFIAICCG@CCBECCIBCACEAGMAACDIR@DAD@LJFBF@FMHAFE@IFGBGAYRAHKzG^@vHRAPFTT^f"],"encodeOffsets":[[114662,36282]]},"properties":{"cp":[111.203957,35.222778],"name":"运城市","childNum":1}},{"id":"140900","geometry":{"type":"Polygon","coordinates":["@@JGFGDSFQ\\U`OHEvuMQOEgAqBSE[A]IGCIGCQ@CBENSHOFOJQLADEBALBNHN@RENMVKJCDAFBDFD@D@D@@MFSRQ@MBELCFAFKBICMGQBA`]BEGI@GDIDGHIJCXEHCJGIMDMFIVIBCACMIQEHMJAVMFMHIFMPUPEHDHFN^NJPDZDbATEZKRCJINYEa@EVMBCAEAMNEREDCDS@GKQACBCFCJBJDNHF@FAH@LDXKDGBI@GBAJBD@@CMK@GDC@MGQ@GDEHAH@fDN@HCDEAKCCGCQECEBEFIFCLCJBRFBJCL@HDJFBRAFBDFF@`K`ULCRBbLPDTARCRMLAXHPHtNFZDT@TERALIDMHOHGJCVBJCDICMNWH@^DHENCPBXAXHFHHZENBJJLXPFBXK^DXJXLRNFBPLHLB`EHIFIF@@@DP@PEHBRHLBVHJ@LCNOFGNKR@FDJLFLBRJVfHjDNJHN@NFPXPLXJLHPBLPRJFfLnD^HpTjLTH@JDDJBFHPNBDAJBFFFJBbBHDF@FJLDbAfYBELCAGGSAITMNGXGLG¢WLANDjZZLPBL@ZEfDRAXBpETDL@LKXMLAFDHTLH^NHPJDjWH@FBAN@NHHdDPHH@J@fCTHHPJLFLBNLXXL`\\BD@HAbHRDBVBRFFAHILULC^L~N^IRKdIPATDRDNB^E`IFEROHOFKNOXINCEVE HN@LCDE@ECMCG@UJK\\UNKPIVQJ[JGNIJCHEBICQ@MOeaACCIFGLLY@YBML[FYYMKMISIMEOS@mJSEEMAMKMOG[SUQ_SomgAGBMEOaCUJsF]BM@wNOPKDKFILKNIRGVEPAj[DUGO[OGKAQ@QHS@USCWD]JMIYmEOIeGGQGc@MLSJQBMGCIAKF_@gGOOGUEoCiD]HQAUKEOKmBQHKEQEKMKMIIEcKIQAM@cEQEGWBQCc@MCUI]Ia@SDoVI@MAoQ]QcMSaOMC_OGGKYEEMGcGoUOGcKCEGC]@KBUAICC@UFIAEGGJEBcH]ASCWEGEC@ACDCFS@ECCQEEESDKCCCEAYIEGEQEAICCC@GCCECGECEEC@CGCMEMDECI@GDEJ@PADCBIEMQE@KQMGWCSAECKISIOEOBSKSAOEUAOEMG_]MOAEECAQYWkI]CWEI@GBABE@GGEAOHSBABKCS@AA@IGAGBGAQJIDGDgFE@CA@AHMD@DM@GECEEKMMGMICAO@MFQDOGG@WDIBCDIHINLPBLADKBEDADBFAFGDKBABBHCFSJIJAAAA@eCAWEMOI@YLG@OCMLMBEBGVKLCTEFKDI@]KICGIEAQBYP]@MDIJGNURGJEBQBIDGHKAUGSDKFWBCDIOYMQO@GBEDEVKJ@HEBEACK@}MYI@KLQJKROPIFGF]@KFEH@JCDK@KCKEGGUGQGEQCCCIEQBIFG@ICAADWEDGHIHMARgECEIEIDEHKHCJEDGBKLIFQD[EIHC@QFGFE@MIE@iRSDGDCJE@GAKISAGCOEIBOGEKIAG@WTGDIAOFO@cbUDCEKEM@IFEJJfEHGB]JE@CCCKBALCDC@CGCM@]DG@EAYPEVCFSFWRCLANARDZCRDDXBfLH@RGVDHDPJADBZADYJGFEPDLHNKXDPOLOBIFKLKDED@DBJHJ@FGHCH@DCDENBDTNFF@JEDAFAFDD@FKLKFaZKL}nKLBHBHJFTNNFND`PCVKZWlUZIB]NSAEEQaIMQOOGcKWCeOeIIIQG_U]UMGOCIBWJIJOPKBGAKKCI@KDA@YEUWTIJeX[\\GNEX@XCJBJEDIFKBD]AUDMNGB[LCJDRCFO@WGgCYGQ@UBEDGHa|CNBR@LAHCFcLGHCLAP@TIjKRCHQJ_BKKCMG_WOC_SE_WWMSEQIY@IBGFSXINEDUB_CSFGHADBJDJNL@D@H@LCFON\\bFLHHAJEHIJALBDFFLFPBLHJPJT@LP\\RPHJBH@HAFY\\CJBBFDLFPLHLBLALELCNB\\ALAHQ\\IZCDSJCBELDLbjZLbXVH^D\\@\\FRDJF^XNHnfLTDLBPCPBFBDXJHHLXDNHP@HEHIHEF@HVj\\`PhTTCLTLHNDL@DGJCHBLFRNRFNHFLDHFHLFD@DK@_@KAM@_LSNKPEJ@DDFZRBJGHEDG@WIEEAIAACAGAEBEDCFBHHZ@JGLCBI@WCUAKFAHBHRR^lDDbJPNJFLANEN@XDNFFBDAPGdCFBTBJDJB^ELGH@FBFD\\DbCXB^JNLFNDPBVAJ@JRX`ZpRF@H@JBFDJJ@FFR@FGPMLAF@FHPNXDN@VBHJT@FCJQTAF@FBDHFL@FAFCLUHCD@FBDHB\\ADMDO@IDIN@LRA^HlV^J^DT@rSV@F@FEJKDChDNCXMVEN@LPFBZDLER@^MNEPAZMHCRUNIbEXKVE\\@LID@H@RLNDLLLFB@FDJJB@DFRHNB\\MN@NATMBFJHHBFCNJF@VED@BDH@JGHC"],"encodeOffsets":[[114617,40563]]},"properties":{"cp":[112.433538,38.71769],"name":"忻州市","childNum":1}},{"id":"141000","geometry":{"type":"Polygon","coordinates":["@@NG\\]\\Q\\INANB^NNj@HFBF@FQFGFAAQBCBAD@DDBFBLDDJ@HEFIJB@HJ@BCHEHICGMAGKF[JQhmLMRIp_fONM^S^]TKJAHDRTETORIRDNVTJdDTDLFHBHCPIhQXFRFXFPINJRADE@EIGCIDAH@ZHDFBFAHbG|DVCNDNAPC\\KLIVMNIRIPDLHBHJ@XCLMFOB_VSLODNIFGJEVGJ@PAJEFCLaP[JKn]HIRGZGPGLWLiPmFIBE^yFITOBRINILIXYRK^ONETCNCJMJSPEDlCxAFAFCDGDMAUHEHABAAEAAIC@CNKDEHGRJD@@AACECEIAKFQACJExKFEGHBHD`^JBF@BUKeKMCYBWH[BWAaGIAGH_HODMASAGGGYMeQUI[KUKGIGQFILMDK@IAQFIfCLUBoHWEWEESO_M]_QgUa__Q[AeFaDOAWI_BYDUHUDWAcKO@cNI@KB_TOFIEEIA@O@QES@IBIFEIBQDALAFCF_HO\\PNAFEFIDCHCF@^aHU@OQOcIeAeBiF\\uXifMEEICWD[CIECCIDOJMRQHIHODSKMSI[QEMFQRQFII_GMQK__[QWE[CIGAiIKWOAIL_D}JGN@LKGiFi[WIOFSLWFCHOReBaDQ@Q]eSSOEQBuG]@yHGLQBBZAHEH@JEFGBENE@EAKIC@CBQ@CH@BBDNBBHDFDBJADDAFDDH@DDBJEJ@HEJBLDHTBCH@LDFJH@BAHDDBJfJDCLDFALKD@BDDHTPANBBJB@BBJAB@BBDCBCBIAGDI@EFEBE@IAYDGFQ@OBCFIJCF@JDVFJLLRFJHBFO@aFYGNUDOHQTUPYZQFSAcEYACB@FDPEFIBGCKA@EYMNAKKKCICQAU@QAOIMGGIKCSBWOEMCYVmN_F[@oOKGDG@IB[IULAF@HA@KIYIW@ECCGSEGCIHKBWGEGEIYK[EIBKBofCHJLJDFJCHORO\\A\\BHBBB\\LHPEHEF@HFBHADGFBBTHDDBDGTILCJDFPBFBFDLBR@jKJA@RGJEDEFBVCTIFSBmIOGa]GMKEMAKBGJELSZMFaLaNMX@hAJGTIHQHGFGZGN[`OJUH]AUMQWU_M[Y_AOGME@GEWAYBQAOEM@EHCP@TCLORGX@ZO\\OCKIU_D_CKC]BWDUDCAKIOOI_IYWMAMD_ZQLeHULIBGBMAMBMFS@GAYH_BMBOHINOJI@SEqGmQIJ@RJPXLDHCJUHUAERMNSJUBSCOEGYCEGKCCE@C@@EEKE@ACGCCE[MECG@Cb@T@HCFQXAF@FBHHHDJ@PAJENGNOJEHCF@HANB^BT@DCDMDIAOEE@UDID@D@DDFDV@FCRDLDNAFCFMNADENAJDHHFJDDDD\\EHGDOFGDITAFLRBHGPCNAXIVKPENIJKT@DFPATSVCFI^GZ@TEhFVP^DJ@J@HKPAH@HDJbhFJFR@HCPBVADMTADBLHJDF@DEJKJIRAH@HDJLPDHATBPPPTb@LBJH\\@J@HCFYTGR@JDFFHdZJLDJBHAPBVCRB`ALCFSVAFBPFPJNBDCJCBOF_TcdKPcGJGH_NOJIHCHAH@HDHNHF@L@FCFELOFENCFBFBDJ@HERAJBHDH^`BLEHEBMAKIGMGEIAKDAD@D@DDFTNJJBHCJKLGFMDMBeBEBABCLDDLBVEJDJLRdH\\@H@FGFOBEBABAFDFNDHFHNB\\AHGFWLMB[@GBGDCBEH@DDFFD\\@LBFBNLDPHANCJGLOD@F@HDHFFBDAJEJBDANMDIJ@HDRFTAHAJID@T@NCTCFKDEDCDADD@FAF@DXJD@BAHKHAHBFGB@\\HRBBHNHR@PCRAPJDJ@FNRAN@`FPJJJHFDN@RCP@^DLDN@LGDGDOFSONEFEPiPONGPAJBHAVILA^BJD^HfPdFDVFD^FZHHLLL^EhOPBLDLHFH@BKT@PDFDBHAJCFE@OHK@AEGGAAA@A@EBA^DBDAJF@BBDBBBCF@JZ@@B@BFDBFHADB@JTAzFDGFE@ELEFG@CACKAEC@AACAGAODEACOGACCMASCCAQHAHEVMDGPGH@DFF@F@NGB@LJNDNHLAJAN@F@HED@NBJDHHF@BAAEHCBCEGBKCEBGFC@CFCNKLKFYFOBWHsRMR@LNRTJBbARDFC@IDGEICIBAZAHDLCP@DBLFFGLC@FHB@B@HCL@FLFB@BCHEFAfHBF@BIDABJLD@JCDBBFCFADDHVHHF^X`L"],"encodeOffsets":[[114089,37688]]},"properties":{"cp":[111.417973,36.28415],"name":"临汾市","childNum":1}},{"id":"141100","geometry":{"type":"Polygon","coordinates":["@@AECAGAIKCEFIA@GAGAEBE@@ABECAMBGAGEGBEMGCIBMAIHIBKG_CMEAEFQCIeaOOIEUA]OQEOGc[OCUAMAoAQCQIWIAUEEGCaGACBIKKAEHKPKMQEGAIBIDKHKDCHCBAHEFG@[DEFC@CBUDKLKFMFGFCTGFAJQEK@GJOBEACIGOCQKUGJERCHCBC@QDODOHGB@HBJJRFbATHL@PCNHD@HAHGJ@XN`AHFJRbJNALGPBNCPAH@DCCQBKPMLILCDAAIBGBATGT@DADENEHAJEJGFGDI@IDEPEbDXA\\@XCHBJFPFNAJEFECK@KDCLGBIAIFI@CHKNMFICOBC^HH@FEFMJQHEP@`NLDhANFDGPOLET@LBhLV@HCJATFB@^cDALDD@FKLGhGHEBGLEPABAACCABAHAEOEE@GDO@WBCZKHIHMHALIHSFARCFCFEFWHUFGTGR@P@hHPBDABEBU@GUSOKAEAKP@D@@CXAF@@ECIDIJAR@DCBC@MCA[ASG@CXQbGBCAI@AXMBEEQ@AEAAAGEQ@qKUMWSIKAYBQEMOOUOAIQWGCCG@ICGECUIECBE@CKKQKQGGEEGAEMKCIMECCCIKK@EQKCBIHUHAHBRCNCD]DGFGJBPABSHQAOACCCGMMQKCOBOACWEAACGGCM@CBCLEJG@CE@CJM@EYACHCBK@CACMC@A@ALADC@CGCQ@AGA@CAA[AC@AFM@MAAE@KVCDAFE@MBEFGCIQICGAGBgFWEOMQCKIMCgIcGKSEMIKIEKGEASEASaIEMCOIBSQEM@QJIHKBGECKOGUGUIOSIQGEGCIa@QC[ASAKKAIDKAGCECAE@OHC@GOAA[@EGGICYAAIAKBIDAD@NCDePWDMFcXGDKBGEGCGBMHEJ@NDHCBIByOPQLSN@HEFGLIFGHCDABIAUBMFCH@LGFAD@HHN@\\ODAACQKOAEAOQ[SQGQCYBOAYOCAAKCAoIKOCOACKE_AA@CDCBGCG@CIBMK@CMBMAKDSgO]WGEUGCGBCDEAECAIDC@IKBAJC@AAEeGEBGFADA@KE@EDK@G@AGA@CAAIDEHKECAO@KDGCYBABDJFJCH@JEDQCaBIAQSKMQ@QNGtAXEPEZKLMLED@DEDAHDFALFHADGDBFABE@GGICMAC@GFE@M@IBKBMGMCKIA@MHE@E@CEG@OHCHUNGFE@ABBRDDBTDNBDPHBDCFBPBHBD@BFDLBBD@DEHKF@FEFCHyESB@ICAGBAEEC@A@AY@@IDEAACAAAE@BIAC]CAB@F@BBBHBFH@BGL@PEFIDGBCACE@OLS@AEGKGKCOAgP]FKKGKYG]EECCUcEeO]GIC]AKBUJGBIAOBMHOPOjEFMFPETCPCHKHM@KC]CO@QDM@ECIGIIEO@_BMMQ@ECIOIQBODQ@MGAGQA[GA@EHGAGBGLABC@WI@CBE@ECCCBCDIRCBOBMDS@C@IJGBSBQEGCI@CJMNCBIAIFCBEAGEGCE@C@KPIHMDGBALDVHdDJJNDJBN@FENKTGNGJEFcLKJIPAJBFFDFD\\BLALAHC\\ULCR@NFDFBHADEFEBgDMHAFBHHHRFLB\\ALBJDNLT^VTFJPTRLhRFFHJDFCbBNDFHHpbZXPP~b^P^VRFNBRDLDFHFfAFBJDDF@H@JUXCJ@FBF`PJNDLBHCHIFYHODM@_DUFMLGNAVBRBNP^FbDJHFLDHBrBPDxFJDdBJBHDDDHTHNBF@HCPDdLTLNBHCZBDRJLHHLJJBHAHelGJ@HBZCTAFEHELAFBJDHDDPBR@HDJFHPAHYTQRKFQDkFKFiRKJEN@LHLRJNPRBLGJg^UJUFZ]VINA\\QfW\\GDADBHEFCHIHepKbMTKHMFMJ]DYH]RGDKHGLCJ@LBJRXDF@FCHKTEDSHGJEV@L@HDPJT@L@LCNKV@PBJflBJALSbCNAR@ZBTBNHPHJNLRDhELBNHDFDVAV@NLlAZBTHPNNNFTBEZBRFPJNTRZdbJHLDfDXFHDHHDHBFANFVHNTVJ^H^FJLHTHdANCHAJGVKJ@JBjVHDFF@FGVAJDfGP@P@BTLF@JAR@LBJJDH@JDJ@NAJCL@RBDRRDLAJQ@WHCDENBDAFY^AH@PLNDJL`DHZNJHDFBFAFEJCN@NDJFHLJJHLBLJNTPMDE@K@G@CMKCIAIBCHGTE`DVAFCJMTWHEJAZ@RJTFXN`XTF`PD`XNHLDL`ARIDGLQJi@SBODKHGdKDEBG@KAQDMb{HGFCVAR@ZHhDXHP@DECQDI\\KHANMVC^BCLAJEFCAIDI@WFWHM\\[fWJIXSFV@ZCB@LDJLLHBLAPOJIXIJAPDNH^V`VRHJJfJfPXDdLPHRPJNRbFFTB^MJAVYXkLYDU_OMCMESMIEAGAGLK~mLKbYLELK@ECCBEBEFC@IEESMACFMDC@CDGHG@EGIAI@CFCLCLKJEPAPKCOLWGMCKFOHEZIBCAYBCOIGCUCQHG@eKWACCDQCYD_DKXQTEDEFUHC"],"encodeOffsets":[[114502,39132]]},"properties":{"cp":[111.334335,37.524366],"name":"吕梁市","childNum":1}}],"UTF8Encoding":true});
}));