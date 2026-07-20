// Military Data for all nations with flag codes
const nationsData = {
    "USA": {
        name: "United States",
        flag: "🇺🇸",
        countryCode: "us",
        rank: 1,
        budget: "$886B",
        nuclear: { status: true, warheads: 5500, type: "Confirmed" },
        personnel: { active: 1388100, reserve: 799500 },
        description: "The United States Armed Forces are the military forces of the United States. They consist of the Army, Marine Corps, Navy, Air Force, Space Force, and Coast Guard. The President is the Commander-in-Chief. With the world's largest defense budget and most advanced military technology, the U.S. maintains global power projection capabilities.",
        image: "US_details/US_flag.png",
        army: {
            tanks: 5500, apc: 45000, artillery: 3000, mlrs: 1366,
            name: "United States Army",
            founded: "June 14, 1775",
            motto: "This We'll Defend",
            description: "The United States Army is the land warfare service branch of the U.S. Armed Forces. It is the largest and oldest established branch, responsible for land-based military operations. The Army is organized into active duty, Army Reserve, and Army National Guard components, providing a rapid response capability to defend the nation and its interests worldwide.",
            image: "US_details/Usa_army_flag.png",
            equipment: [
                { name: "M1A2 Abrams", count: 2509, type: "Main Battle Tank", description: "Third-generation main battle tank with advanced armor and 120mm smoothbore cannon" },
                { name: "M2 Bradley", count: 4641, type: "Infantry Fighting Vehicle", description: "Armored fighting vehicle providing both transport and fire support" },
                { name: "Stryker", count: 4900, type: "Armored Fighting Vehicle", description: "Eight-wheeled armored combat vehicle for rapid deployment" },
                { name: "M109 Paladin", count: 950, type: "Self-Propelled Howitzer", description: "155mm self-propelled artillery piece with automated fire control" }
            ]
        },
        navy: {
            carriers: 11, submarines: 68, destroyers: 92, frigates: 0,
            name: "United States Navy",
            founded: "October 13, 1775",
            motto: "Semper Fortis (Always Courageous)",
            description: "The United States Navy is the maritime service branch of the U.S. Armed Forces. It is the world's most capable navy, operating globally with 11 nuclear-powered aircraft carriers, nuclear submarine fleet, and over 290 deployable combat vessels. The Navy maintains forward presence, deterrence, sea control, and power projection capabilities across all oceans.",
            image: "US_details/US_navy_flag.jpg"
            ,
            equipment: [
                { name: "Nimitz-class Carrier", count: 10, type: "Aircraft Carrier", description: "Nuclear-powered supercarrier carrying 90+ aircraft" },
                { name: "Gerald R. Ford Carrier", count: 1, type: "Aircraft Carrier", description: "Most advanced carrier with electromagnetic launch system" },
                { name: "Ohio-class SSBN", count: 14, type: "Ballistic Missile Submarine", description: "Nuclear submarine carrying Trident II ballistic missiles" },
                { name: "Virginia-class SSN", count: 23, type: "Attack Submarine", description: "Fast attack submarine for anti-submarine and strike missions" }
            ]
        },
        airforce: {
            fighters: 1957, bombers: 140, transport: 945, helicopters: 5463,
            name: "United States Air Force",
            founded: "September 18, 1947",
            motto: "Aim High...Fly-Fight-Win",
            description: "The United States Air Force is the aerial and space warfare service branch of the U.S. Armed Forces. It is the world's largest and most technologically advanced air force, operating over 5,000 aircraft. The USAF provides air superiority, global strike, rapid global mobility, and intelligence, surveillance, and reconnaissance capabilities.",
            image: "US_details/US_airforce_flag.jpg",
            equipment: [
                { name: "F-35 Lightning II", count: 450, type: "5th Gen Stealth Fighter", description: "Multi-role stealth fighter with advanced sensors and networking" },
                { name: "F-22 Raptor", count: 187, type: "Air Superiority Fighter", description: "5th generation stealth air dominance fighter" },
                { name: "F-16 Fighting Falcon", count: 936, type: "Multirole Fighter", description: "Highly maneuverable 4th generation fighter aircraft" },
                { name: "B-2 Spirit", count: 20, type: "Stealth Bomber", description: "Flying-wing strategic stealth bomber for nuclear/conventional strikes" }
            ]
        }
    },
    "Russia": {
        name: "Russia",
        flag: "🇷🇺",
        countryCode: "ru",
        rank: 2,
        budget: "$109B",
        nuclear: { status: true, warheads: 6257, type: "Confirmed" },
        personnel: { active: 1150000, reserve: 2000000 },
        description: "The Russian Armed Forces are the military of the Russian Federation. They comprise the Ground Forces, Aerospace Forces, Navy, Strategic Missile Troops, and Airborne Troops. Russia possesses the world's largest nuclear arsenal and maintains significant conventional forces designed for territorial defense and regional power projection.",
        image: "Russian_details/Russian_flag.jpg",
        army: {
            tanks: 12420, apc: 34000, artillery: 14564, mlrs: 3065,
            name: "Russian Ground Forces",
            founded: "May 7, 1992",
            motto: "Honor and Courage",
            description: "The Russian Ground Forces are the land forces of the Russian Federation. They possess one of the largest tank fleets in the world, with significant artillery and armored capabilities. The force emphasizes combined arms operations with mass artillery support and maintains a large reserve of armored vehicles.",
            image: "Russian_details/Russian_Ground_Forces_flag.jpg",
            equipment: [
                { name: "T-90M", count: 550, type: "Main Battle Tank", description: "Advanced main battle tank with Relikt ERA and improved fire control" },
                { name: "T-72B3", count: 2000, type: "Main Battle Tank", description: "Modernized T-72 with improved armor and thermal sights" },
                { name: "T-80BVM", count: 450, type: "Main Battle Tank", description: "Gas turbine-powered tank with modern electronics" },
                { name: "BMP-3", count: 700, type: "Infantry Fighting Vehicle", description: "Amphibious IFV with 100mm gun and ATGM capability" }
            ]
        },
        navy: {
            carriers: 1, submarines: 58, destroyers: 15, frigates: 11,
            name: "Russian Navy",
            founded: "October 30, 1696",
            motto: "Glory and Power on the Seas",
            description: "The Russian Navy is the naval warfare service branch of Russian Armed Forces. It operates four major fleets: Northern, Pacific, Black Sea, and Baltic. The Navy maintains Russia's nuclear triad through ballistic missile submarines and projecting power through surface combatants equipped with advanced cruise missiles.",
            image: "Russian_details/Russian_navy_flag.jpg",
            equipment: [
                { name: "Admiral Kuznetsov", count: 1, type: "Aircraft Carrier", description: "Heavy aircraft-carrying cruiser with Su-33 fighters" },
                { name: "Borei-class SSBN", count: 5, type: "Ballistic Missile Submarine", description: "Nuclear submarine carrying Bulava SLBMs" },
                { name: "Yasen-class SSN", count: 4, type: "Attack Submarine", description: "Advanced nuclear attack submarine with Kalibr missiles" },
                { name: "Admiral Gorshkov Frigate", count: 4, type: "Guided Missile Frigate", description: "Modern frigate with Zircon hypersonic missiles" }
            ]
        },
        airforce: {
            fighters: 1391, bombers: 181, transport: 445, helicopters: 1543,
            name: "Russian Aerospace Forces",
            founded: "August 1, 2015",
            motto: "To Defend and Protect the Skies",
            description: "The Russian Aerospace Forces are a branch of the Russian Armed Forces responsible for all aerial and space operations. They combine the former Air Force and Aerospace Defense Forces, operating advanced fighters, strategic bombers, and extensive air defense systems including the S-400 and S-500.",
            image: "Russian_details/Russian_airforce_flag.jpg",
            equipment: [
                { name: "Su-57", count: 22, type: "5th Gen Stealth Fighter", description: "Russia's first stealth multirole fighter aircraft" },
                { name: "Su-35S", count: 140, type: "Air Superiority Fighter", description: "Highly maneuverable 4++ generation fighter" },
                { name: "Su-34", count: 146, type: "Fighter-Bomber", description: "Twin-seat strike fighter for ground attack missions" },
                { name: "Tu-160M", count: 17, type: "Strategic Bomber", description: "Upgraded supersonic variable-sweep wing heavy bomber" }
            ]
        }
    },
    "China": {
        name: "China",
        flag: "🇨🇳",
        countryCode: "cn",
        rank: 3,
        budget: "$292B",
        nuclear: { status: true, warheads: 500, type: "Confirmed" },
        personnel: { active: 2035000, reserve: 510000 },
        description: "The People's Liberation Army (PLA) is the armed wing of the Chinese Communist Party and the world's largest military by active personnel. China has undergone a massive military modernization program, developing advanced weapons systems, expanding its navy, and building artificial islands in the South China Sea.",
        image: "Chinese_details/Chinese_flag.jpg",
        army: {
            tanks: 5800, apc: 35000, artillery: 5200, mlrs: 2990,
            name: "PLA Ground Force",
            founded: "August 1, 1927",
            motto: "Serve the People",
            description: "The PLA Ground Force is the land-based service branch of the People's Liberation Army. It is the largest standing ground force in the world, with approximately 975,000 active personnel organized into 13 group armies across five theater commands.",
            image: "Chinese_details/Pla_army_flag.png",
            equipment: [
                { name: "Type 99A", count: 1200, type: "Main Battle Tank", description: "China's most advanced MBT with composite/ERA armor, 125mm smoothbore gun, and laser warning system" },
                { name: "Type 96", count: 2500, type: "Main Battle Tank", description: "Cost-effective MBT forming the backbone of PLA armored forces with 125mm gun" },
                { name: "ZBD-04", count: 1500, type: "Infantry Fighting Vehicle", description: "Tracked amphibious IFV with 30mm autocannon and HJ-73 ATGM capability" },
                { name: "PLZ-05", count: 400, type: "Self-Propelled Howitzer", description: "155mm tracked self-propelled gun-howitzer with automated loading and fire control" }
            ]
        },
        navy: {
            carriers: 3, submarines: 78, destroyers: 52, frigates: 49,
            name: "PLA Navy",
            founded: "April 23, 1949",
            motto: "Defend the Seas",
            description: "The PLA Navy is the largest navy in the world by number of vessels. China has rapidly expanded its fleet with three aircraft carriers, advanced destroyers, and nuclear submarines, projecting power across the Western Pacific and into the Indian Ocean.",
            image: "Chinese_details/Pla_navy_flag.png",
            equipment: [
                { name: "Liaoning Carrier", count: 1, type: "Aircraft Carrier", description: "Refurbished Soviet Kuznetsov-class carrier operating J-15 fighters with ski-jump launch" },
                { name: "Shandong Carrier", count: 1, type: "Aircraft Carrier", description: "First domestically built carrier with improved design and increased aircraft capacity" },
                { name: "Fujian Carrier", count: 1, type: "Aircraft Carrier", description: "China's most advanced carrier featuring electromagnetic catapult launch system (EMALS)" },
                { name: "Type 094 SSBN", count: 6, type: "Ballistic Missile Submarine", description: "Nuclear-powered submarine carrying JL-2 submarine-launched ballistic missiles" }
            ]
        },
        airforce: {
            fighters: 1200, bombers: 231, transport: 286, helicopters: 912,
            name: "PLA Air Force",
            founded: "November 11, 1949",
            motto: "Sky Shield of the Nation",
            description: "The PLA Air Force is the third-largest air force in the world and the largest in Asia. It has rapidly modernized with 5th-generation stealth fighters, advanced early warning aircraft, and long-range strategic bombers capable of striking targets across the Pacific.",
            image: "Chinese_details/Pla_airforce_flag.png",
            equipment: [
                { name: "J-20", count: 200, type: "5th Gen Stealth Fighter", description: "Twin-engine stealth air superiority fighter with advanced sensors and supermaneuverability" },
                { name: "J-16", count: 300, type: "Multirole Strike Fighter", description: "Twin-seat heavy multirole fighter based on Su-30 with AESA radar and PL-15 missiles" },
                { name: "J-10C", count: 350, type: "Multirole Fighter", description: "Single-engine 4.5-gen delta-canard fighter with AESA radar for air superiority and ground attack" },
                { name: "H-6K", count: 180, type: "Strategic Bomber", description: "Modernized long-range bomber capable of carrying CJ-20 cruise missiles for stand-off strikes" }
            ]
        }
    },
    "India": {
        name: "Republic of India",
        flag: "🇮🇳",
        countryCode: "in",
        rank: 4,
        budget: "$83.6B",
        nuclear: { status: true, warheads: 172, type: "Confirmed" },
        personnel: { active: 1455550, reserve: 1155000 },
        description: "The Indian Armed Forces are the military forces of the Republic of India. They consist of the Indian Army, the Indian Navy, and the Indian Air Force. India maintains the world's fourth-largest military, with strong capabilities for conventional warfare, nuclear deterrence, and regional power projection across South Asia and the Indian Ocean.",
        image: "https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&h=400&fit=crop",
        army: {
            tanks: 4614, apc: 8600, artillery: 4200, mlrs: 374,
            name: "Indian Army",
            founded: "April 1, 1895",
            motto: "Service Before Self",
            description: "The Indian Army is the land-based branch and the largest component of the Indian Armed Forces. It is the world's second-largest standing army, with over 1.4 million active troops. The Indian Army is responsible for land-based military operations and maintaining territorial integrity along India's borders with Pakistan and China.",
            image: "Indian_details/Indian_army_flag.png",
            equipment: [
                { name: "T-90 Bhishma", count: 1200, type: "Main Battle Tank", description: "Russian-origin tank with Indian modifications and ERA armor" },
                { name: "Arjun MBT Mk.1A", count: 124, type: "Main Battle Tank", description: "Indigenous third-generation main battle tank" },
                { name: "BMP-2 Sarath", count: 2500, type: "Infantry Fighting Vehicle", description: "License-built IFV with 30mm cannon" },
                { name: "K9 Vajra-T", count: 100, type: "Self-Propelled Howitzer", description: "155mm howitzer built in collaboration with South Korea" }
            ]
        },
        navy: {
            carriers: 2, submarines: 18, destroyers: 11, frigates: 13,
            name: "Indian Navy",
            founded: "January 26, 1950",
            motto: "Sham No Varunah (May the Lord of Water be auspicious unto us)",
            description: "The Indian Navy is the naval branch of the Indian Armed Forces. It is a blue-water navy with significant capabilities for maritime security in the Indian Ocean region. The Indian Navy operates aircraft carriers, nuclear submarines, and modern destroyers, providing power projection across the Indo-Pacific.",
            image: "Indian_details/Indian_navy_flag.png",
            equipment: [
                { name: "INS Vikramaditya", count: 1, type: "Aircraft Carrier", description: "Modified Kiev-class carrier operating MiG-29K fighters" },
                { name: "INS Vikrant", count: 1, type: "Aircraft Carrier", description: "Indigenous aircraft carrier, India's first domestically built carrier" },
                { name: "INS Arihant", count: 2, type: "Ballistic Missile Submarine", description: "Nuclear-powered submarine carrying K-15 SLBMs" },
                { name: "Kolkata-class Destroyer", count: 4, type: "Guided Missile Destroyer", description: "Stealth destroyer with BrahMos supersonic missiles" }
            ]
        },
        airforce: {
            fighters: 538, bombers: 0, transport: 250, helicopters: 720,
            name: "Indian Air Force",
            founded: "October 8, 1932",
            motto: "Nabha Sprsham Deeptam (Touch the Sky with Glory)",
            description: "The Indian Air Force is the air arm of the Indian Armed Forces. It is the world's fourth-largest air force by fleet strength. The IAF provides air defense, tactical and strategic airlift, and close air support capabilities. Recent modernization includes the acquisition of Rafale fighters and development of indigenous Tejas aircraft.",
            image: "Indian_details/Indian_airforce_flag.png",
            equipment: [
                { name: "Su-30MKI", count: 260, type: "Air Superiority Fighter", description: "Heavy twin-engine fighter with thrust vectoring" },
                { name: "Dassault Rafale", count: 36, type: "Multirole Fighter", description: "French 4.5 generation omnirole combat aircraft" },
                { name: "MiG-29UPG", count: 66, type: "Multirole Fighter", description: "Upgraded twin-engine fighter with modern avionics" },
                { name: "HAL Tejas Mk.1", count: 40, type: "Light Combat Aircraft", description: "Indigenous single-engine multirole light fighter" }
            ]
        }
    },
    "UK": {
        name: "United Kingdom",
        flag: "🇬🇧",
        countryCode: "gb",
        rank: 5,
        budget: "$68.4B",
        nuclear: { status: true, warheads: 225, type: "Confirmed" },
        personnel: { active: 148500, reserve: 37000 },
        description: "The British Armed Forces are the military forces of the United Kingdom. The UK maintains a blue-water navy with global reach, nuclear deterrent, and expeditionary capabilities. As a founding member of NATO, the UK plays a central role in European and global security.",
        image: "UK_details/UK_flag.jpg",
        army: {
            tanks: 227, apc: 5015, artillery: 236, mlrs: 44,
            name: "British Army",
            founded: "1660",
            motto: "Be the Best",
            description: "The British Army is the principal land warfare force of the United Kingdom. It has served in conflicts worldwide and specializes in expeditionary operations, armored warfare, and counterinsurgency.",
            image: "UK_details/British_army_flag.webp",
            equipment: [
                { name: "Challenger 2", count: 227, type: "Main Battle Tank", description: "British MBT with Chobham/Dorchester armor and 120mm rifled gun, proven in Iraq" },
                { name: "Warrior IFV", count: 450, type: "Infantry Fighting Vehicle", description: "Tracked armored vehicle carrying infantry with 30mm Rarden cannon" },
                { name: "Ajax", count: 400, type: "Armored Reconnaissance", description: "Next-gen armored fighting vehicle family for reconnaissance and fire support" },
                { name: "AS-90", count: 89, type: "Self-Propelled Howitzer", description: "155mm self-propelled artillery with automated loading and burst fire capability" }
            ]
        },
        navy: {
            carriers: 2, submarines: 11, destroyers: 6, frigates: 12,
            name: "Royal Navy",
            founded: "1546",
            motto: "Si vis pacem, para bellum (If you wish peace, prepare for war)",
            description: "The Royal Navy is the UK's principal naval warfare force. It operates two Queen Elizabeth-class aircraft carriers, nuclear submarines, and maintains the UK's continuous at-sea nuclear deterrent.",
            image: "UK_details/Royal_navy_flag.png",
            equipment: [
                { name: "Queen Elizabeth Carrier", count: 2, type: "Aircraft Carrier", description: "65,000-ton STOVL carriers with twin-island design carrying F-35B fighters" },
                { name: "Vanguard-class SSBN", count: 4, type: "Ballistic Missile Submarine", description: "Nuclear deterrent submarine carrying Trident II D5 missiles" },
                { name: "Astute-class SSN", count: 6, type: "Attack Submarine", description: "Nuclear-powered hunter-killer submarine with Tomahawk cruise missiles" },
                { name: "Type 45 Destroyer", count: 6, type: "Air Defence Destroyer", description: "Daring-class destroyer with Sea Viper air defense system" }
            ]
        },
        airforce: {
            fighters: 137, bombers: 0, transport: 78, helicopters: 272,
            name: "Royal Air Force",
            founded: "April 1, 1918",
            motto: "Per Ardua Ad Astra (Through Adversity to the Stars)",
            description: "The Royal Air Force is the UK's aerial warfare force and the world's oldest independent air force. It operates Typhoon and F-35B fighters, strategic transport, and supports nuclear deterrence.",
            image: "UK_details/Royal_airforce_flag.png",
            equipment: [
                { name: "F-35B Lightning II", count: 33, type: "5th Gen STOVL Fighter", description: "Stealth multirole fighter with short take-off and vertical landing for carrier operations" },
                { name: "Typhoon FGR4", count: 137, type: "Multirole Fighter", description: "Twin-engine 4.5-gen fighter for air superiority, ground attack, and QRA duties" },
                { name: "A400M Atlas", count: 22, type: "Strategic Transport", description: "Four-engine turboprop military transport aircraft for heavy airlift" },
                { name: "AH-64E Apache", count: 50, type: "Attack Helicopter", description: "Twin-engine attack helicopter with Hellfire missiles and 30mm chain gun" }
            ]
        }
    },
    "France": {
        name: "France",
        flag: "🇫🇷",
        countryCode: "fr",
        rank: 7,
        budget: "$53.6B",
        nuclear: { status: true, warheads: 290, type: "Confirmed" },
        personnel: { active: 203250, reserve: 35000 },
        description: "The French Armed Forces maintain full-spectrum military capabilities including nuclear deterrence, a nuclear-powered aircraft carrier, and expeditionary forces deployed across Africa and the Middle East. France has the strongest military in the European Union.",
        image: "France_details/France_flag.png",
        army: {
            tanks: 222, apc: 6000, artillery: 301, mlrs: 13,
            name: "French Army (Armée de Terre)",
            founded: "1445",
            motto: "Honneur et Patrie (Honor and Fatherland)",
            description: "The French Army is one of NATO's most experienced land forces, regularly deployed in overseas operations across Africa and the Middle East. It is currently undergoing the Scorpion modernization program.",
            image: "France_details/French_army_flag.png",
            equipment: [
                { name: "Leclerc MBT", count: 222, type: "Main Battle Tank", description: "French 3rd-gen MBT with modular composite armor, 120mm smoothbore gun, and autoloader" },
                { name: "VBCI", count: 630, type: "Infantry Fighting Vehicle", description: "8x8 wheeled armored IFV with 25mm cannon for mechanized infantry" },
                { name: "VAB", count: 2700, type: "Armored Personnel Carrier", description: "4x4/6x6 amphibious APC widely used in French overseas deployments" },
                { name: "CAESAR", count: 77, type: "Self-Propelled Howitzer", description: "155mm wheeled self-propelled gun-howitzer with rapid deployment capability, combat-proven in Ukraine" }
            ]
        },
        navy: {
            carriers: 1, submarines: 10, destroyers: 11, frigates: 11,
            name: "French Navy (Marine Nationale)",
            founded: "1624",
            motto: "Honneur, Patrie, Valeur, Discipline",
            description: "The French Navy operates the only nuclear-powered aircraft carrier outside the US Navy — the Charles de Gaulle. It maintains nuclear submarine deterrence and projects power globally.",
            image: "France_details/French_navy_flag.png",
            equipment: [
                { name: "Charles de Gaulle", count: 1, type: "Nuclear Aircraft Carrier", description: "42,500-ton nuclear-powered carrier with catapult launch system for Rafale-M fighters" },
                { name: "Triomphant-class SSBN", count: 4, type: "Ballistic Missile Submarine", description: "Nuclear deterrent submarine carrying M51 submarine-launched ballistic missiles" },
                { name: "Suffren-class SSN", count: 3, type: "Attack Submarine", description: "Barracuda-class nuclear attack submarine with MdCN cruise missiles" },
                { name: "Horizon-class Destroyer", count: 2, type: "Air Defence Destroyer", description: "Franco-Italian air defense destroyer with Aster missile system" }
            ]
        },
        airforce: {
            fighters: 234, bombers: 0, transport: 139, helicopters: 360,
            name: "French Air and Space Force",
            founded: "1909",
            motto: "Faire face (Face the Challenge)",
            description: "The French Air and Space Force operates the Rafale omnirole fighter and maintains France's airborne nuclear deterrent. It has extensive experience in combat operations across Libya, Mali, and Syria.",
            image: "France_details/French_airforce_flag.png",
            equipment: [
                { name: "Rafale", count: 234, type: "Omnirole Fighter", description: "Twin-engine 4.5-gen fighter with nuclear strike, air dominance, and reconnaissance capability" },
                { name: "A400M Atlas", count: 18, type: "Strategic Transport", description: "Four-engine turboprop transport for tactical and strategic airlift operations" },
                { name: "Tiger HAD", count: 67, type: "Attack Helicopter", description: "Eurocopter twin-engine attack helicopter with Hellfire/Mistral missiles" },
                { name: "NH90", count: 100, type: "Medium Transport Helicopter", description: "NATO multi-role military helicopter for tactical transport and naval operations" }
            ]
        }
    },
    "Germany": {
        name: "Germany",
        flag: "🇩🇪",
        countryCode: "de",
        rank: 9,
        budget: "$66.8B",
        nuclear: { status: false },
        personnel: { active: 183500, reserve: 30000 },
        description: "The Bundeswehr is undergoing a major rearmament following the 2022 €100 billion special fund. Germany is the backbone of NATO's conventional defense in Central Europe with world-class armored vehicles and the Eurofighter fleet.",
        image: "Germany_details/Germany_flag.jpg",
        army: {
            tanks: 266, apc: 4800, artillery: 121, mlrs: 38,
            name: "German Army (Heer)",
            founded: "November 12, 1955",
            motto: "Schützen, Helfen, Vermitteln, Kämpfen (Protect, Help, Mediate, Fight)",
            description: "The German Army is the land component of the Bundeswehr. It produces some of the world's finest armored vehicles including the Leopard 2 tank and Puma IFV, which are exported to many NATO allies.",
            image: "Germany_details/German_army_flag.png",
            equipment: [
                { name: "Leopard 2A7", count: 266, type: "Main Battle Tank", description: "World-leading MBT with modular armor, 120mm L55A1 gun, and urban warfare package" },
                { name: "Puma IFV", count: 350, type: "Infantry Fighting Vehicle", description: "Heavily armored tracked IFV with 30mm autocannon and Spike ATGM" },
                { name: "Boxer", count: 1000, type: "Armored Personnel Carrier", description: "8x8 modular wheeled APC with interchangeable mission modules" },
                { name: "PzH 2000", count: 108, type: "Self-Propelled Howitzer", description: "155mm tracked SPH with exceptional range and rate of fire, combat-proven in Ukraine" }
            ]
        },
        navy: {
            carriers: 0, submarines: 6, destroyers: 0, frigates: 11,
            name: "German Navy (Deutsche Marine)",
            founded: "November 12, 1955",
            motto: "Wir. Dienen. Deutschland. (We. Serve. Germany.)",
            description: "The German Navy focuses on Baltic Sea defense and NATO maritime operations. It operates advanced conventional submarines and frigates specialized in air defense and anti-submarine warfare.",
            image: "Germany_details/German_navy_flag.png",
            equipment: [
                { name: "Type 212A Submarine", count: 6, type: "Attack Submarine", description: "Air-independent propulsion submarine — world's first production fuel cell sub" },
                { name: "F125 Frigate", count: 4, type: "Stabilization Frigate", description: "Baden-Württemberg-class designed for sustained low-intensity operations" },
                { name: "F124 Frigate", count: 3, type: "Air Defence Frigate", description: "Sachsen-class with SMART-L radar and SM-2 missiles for fleet air defense" },
                { name: "K130 Corvette", count: 5, type: "Corvette", description: "Braunschweig-class multipurpose corvette with RBS-15 anti-ship missiles" }
            ]
        },
        airforce: {
            fighters: 229, bombers: 0, transport: 56, helicopters: 266,
            name: "German Air Force (Luftwaffe)",
            founded: "November 12, 1955",
            motto: "Suum Cuique (To Each His Own)",
            description: "The modern Luftwaffe operates Eurofighter Typhoons and Tornado strike aircraft. It is transitioning to the F-35A for nuclear sharing and participating in the Franco-German FCAS program.",
            image: "Germany_details/German_airforce_flag.png",
            equipment: [
                { name: "Eurofighter Typhoon", count: 140, type: "Multirole Fighter", description: "Twin-engine 4.5-gen delta-canard fighter for air superiority and ground attack" },
                { name: "Tornado", count: 89, type: "Strike Fighter", description: "Variable-geometry strike/reconnaissance aircraft, nuclear strike capable" },
                { name: "A400M Atlas", count: 45, type: "Strategic Transport", description: "Tactical/strategic transport aircraft replacing C-160 Transall" },
                { name: "Tiger UHT", count: 51, type: "Attack Helicopter", description: "Fire-support variant of Eurocopter Tiger with PARS 3 anti-tank missiles" }
            ]
        }
    },
    "Japan": {
        name: "Japan",
        flag: "🇯🇵",
        countryCode: "jp",
        rank: 8,
        budget: "$54B",
        nuclear: { status: false },
        personnel: { active: 247150, reserve: 56000 },
        description: "The Japan Self-Defense Forces are one of the most technologically advanced militaries in Asia. Japan has recently revised its pacifist defense policies, adopting counterstrike capabilities and doubling its defense budget to counter threats from China and North Korea.",
        image: "Japan_details/Japan_flag.jpg",
        army: {
            tanks: 561, apc: 2000, artillery: 590, mlrs: 99,
            name: "Japan Ground Self-Defense Force",
            founded: "July 1, 1954",
            motto: "Defend the Nation",
            description: "The JGSDF is Japan's land warfare branch, specializing in island defense and anti-amphibious operations. It maintains advanced indigenous tanks and is developing rapid deployment capabilities for remote island defense.",
            image: "Japan_details/Japanese_army_flag.png",
            equipment: [
                { name: "Type 10 MBT", count: 120, type: "Main Battle Tank", description: "Indigenous 4th-gen MBT with modular composite armor and C4I network integration" },
                { name: "Type 90 MBT", count: 340, type: "Main Battle Tank", description: "Japanese MBT with Rheinmetall 120mm gun and automatic loader" },
                { name: "Type 16 MCV", count: 200, type: "Mobile Combat Vehicle", description: "8x8 wheeled tank destroyer with 105mm gun for rapid island deployment" },
                { name: "Type 99 SPH", count: 140, type: "Self-Propelled Howitzer", description: "155mm tracked self-propelled howitzer with automated fire control system" }
            ]
        },
        navy: {
            carriers: 0, submarines: 22, destroyers: 36, frigates: 4,
            name: "Japan Maritime Self-Defense Force",
            founded: "July 1, 1954",
            motto: "Guardian of the Sea",
            description: "The JMSDF is one of the most powerful navies in the Pacific. It operates helicopter carriers being converted for F-35B, advanced Aegis destroyers, and the world's most capable conventional submarine fleet.",
            image: "Japan_details/Japanese_navy_flag.jpg",
            equipment: [
                { name: "Izumo-class Carrier", count: 2, type: "Light Aircraft Carrier", description: "27,000-ton helicopter destroyer being converted to carry F-35B fighters" },
                { name: "Soryu-class Submarine", count: 12, type: "Attack Submarine", description: "Diesel-electric submarine with Stirling AIP and lithium-ion battery variants" },
                { name: "Taigei-class Submarine", count: 3, type: "Attack Submarine", description: "Next-gen submarine with lithium-ion batteries for extended underwater endurance" },
                { name: "Maya-class Destroyer", count: 2, type: "Guided Missile Destroyer", description: "Aegis BMD destroyer with cooperative engagement capability and SM-3 missiles" }
            ]
        },
        airforce: {
            fighters: 289, bombers: 0, transport: 59, helicopters: 456,
            name: "Japan Air Self-Defense Force",
            founded: "July 1, 1954",
            motto: "Defend the Sky",
            description: "The JASDF operates 5th-gen F-35A stealth fighters and F-15J Eagles. Japan is developing the next-gen F-X fighter and investing heavily in stand-off missile capabilities.",
            image: "Japan_details/Japanese_airforce_flag.png",
            equipment: [
                { name: "F-35A Lightning II", count: 42, type: "5th Gen Stealth Fighter", description: "Stealth multirole fighter with integrated sensor suite and data-linking" },
                { name: "F-15J Eagle", count: 155, type: "Air Superiority Fighter", description: "Twin-engine air superiority fighter with Japanese-upgraded avionics and radar" },
                { name: "F-2", count: 91, type: "Multirole Fighter", description: "Japanese-developed fighter based on F-16 with AESA radar and ASM-2 anti-ship missiles" },
                { name: "AH-64D Apache", count: 12, type: "Attack Helicopter", description: "Twin-engine attack helicopter with Longbow radar and Hellfire missiles" }
            ]
        }
    },
    "SouthKorea": {
        name: "Republic Of Korea",
        flag: "🇰🇷",
        countryCode: "kr",
        rank: 6,
        budget: "$46.4B",
        nuclear: { status: false },
        personnel: { active: 500000, reserve: 3100000 },
        description: "The Republic of Korea Armed Forces maintain a massive standing army and reserve force to deter North Korea. South Korea is also a major defense exporter, selling the K2 tank, K9 howitzer, KF-21 fighter, and FA-50 trainer globally.",
        image: "ROK_details/ROK_flag.jpg",
        army: {
            tanks: 2130, apc: 5100, artillery: 6350, mlrs: 584,
            name: "Republic of Korea Army",
            founded: "September 5, 1948",
            motto: "Win in Every Battle",
            description: "The ROK Army is one of the largest and most well-equipped in the world, maintaining readiness against the North Korean threat. It has developed world-class indigenous weapons systems.",
            image: "ROK_details/ROK_army_flag.jpg",
            equipment: [
                { name: "K2 Black Panther", count: 260, type: "Main Battle Tank", description: "Advanced indigenous MBT with composite/ERA armor, 120mm gun, and active protection system" },
                { name: "K1A2", count: 1027, type: "Main Battle Tank", description: "Upgraded K1 MBT with improved fire control, thermal sights, and 120mm gun" },
                { name: "K21 IFV", count: 470, type: "Infantry Fighting Vehicle", description: "Amphibious IFV with 40mm autocannon and advanced digital fire control" },
                { name: "K9 Thunder", count: 1136, type: "Self-Propelled Howitzer", description: "155mm SPH exported to 8+ countries, known for exceptional rate of fire and accuracy" }
            ]
        },
        navy: {
            carriers: 0, submarines: 19, destroyers: 12, frigates: 18,
            name: "Republic of Korea Navy",
            founded: "November 11, 1945",
            motto: "Protect the Seas, Serve the Nation",
            description: "The ROK Navy operates advanced Aegis destroyers, domestically-built submarines, and is developing a light aircraft carrier. It focuses on defending Korean waters and projecting power regionally.",
            image: "ROK_details/ROK_navy_flag.jpg",
            equipment: [
                { name: "Sejong the Great Destroyer", count: 3, type: "Guided Missile Destroyer", description: "KDX-III Aegis destroyer with 128 VLS cells for air defense and ballistic missile defense" },
                { name: "Son Won-il Submarine", count: 9, type: "Attack Submarine", description: "Type 214 AIP submarine with fuel cell propulsion for extended underwater operations" },
                { name: "Dosan Ahn Changho Submarine", count: 3, type: "Attack Submarine", description: "3,000-ton indigenous submarine with vertical launch system for cruise missiles" },
                { name: "Daegu-class Frigate", count: 8, type: "Guided Missile Frigate", description: "FFX-II multipurpose frigate with reduced radar signature and advanced sensors" }
            ]
        },
        airforce: {
            fighters: 410, bombers: 0, transport: 70, helicopters: 740,
            name: "Republic of Korea Air Force",
            founded: "October 1, 1949",
            motto: "We Fly and Fight",
            description: "The ROKAF operates F-35A stealth fighters and is developing the indigenous KF-21 Boramae 4.5-gen fighter. It maintains a strong fighter force for air superiority over the Korean Peninsula.",
            image: "ROK_details/ROK_airforce_flag.jpg",
            equipment: [
                { name: "F-35A Lightning II", count: 60, type: "5th Gen Stealth Fighter", description: "Stealth multirole fighter enhancing ROKAF's air dominance and strike capabilities" },
                { name: "KF-21 Boramae", count: 6, type: "4.5 Gen Fighter", description: "Indigenous twin-engine fighter with AESA radar, first Korean-developed fighter jet" },
                { name: "F-15K Slam Eagle", count: 59, type: "Strike Fighter", description: "Twin-engine heavy strike fighter with SLAM-ER precision missiles" },
                { name: "FA-50 Fighting Eagle", count: 60, type: "Light Combat Aircraft", description: "Korean-developed supersonic light fighter/trainer exported globally" }
            ]
        }
    },
    "Turkey": {
        name: "Turkey",
        flag: "🇹🇷",
        countryCode: "tr",
        rank: 11,
        budget: "$19.6B",
        nuclear: { status: false },
        personnel: { active: 425000, reserve: 378700 },
        description: "Turkey has NATO's second-largest military and has developed a robust indigenous defense industry producing drones, armored vehicles, and naval vessels. Turkish combat drones have changed the nature of modern warfare.",
        image: "Turkey_details/turkey_flag.png",
        army: {
            tanks: 2200, apc: 7550, artillery: 1430, mlrs: 350,
            name: "Turkish Land Forces",
            founded: "1920",
            motto: "Strong Army, Peaceful Nation",
            description: "The Turkish Land Forces are one of the largest armies in NATO, experienced in counterinsurgency operations. Turkey is developing the indigenous Altay main battle tank.",
            image: "Turkey_details/turkey_army_flag.png",
            equipment: [
                { name: "Leopard 2A4", count: 354, type: "Main Battle Tank", description: "German-built MBT with 120mm gun, the most modern tank in Turkish inventory" },
                { name: "M60T Sabra", count: 170, type: "Main Battle Tank", description: "Israeli-upgraded M60 Patton with modern fire control and armor package" },
                { name: "Altay MBT", count: 20, type: "Main Battle Tank", description: "Indigenous next-gen MBT based on K2 Black Panther platform with local systems" },
                { name: "T-155 Firtina", count: 350, type: "Self-Propelled Howitzer", description: "155mm SPH based on K9 Thunder platform, license-produced in Turkey" }
            ]
        },
        navy: {
            carriers: 1, submarines: 12, destroyers: 0, frigates: 16,
            name: "Turkish Naval Forces",
            founded: "1920",
            motto: "Denizlerin Hakimi (Sovereign of the Seas)",
            description: "The Turkish Navy operates the TCG Anadolu amphibious assault ship designed to carry Bayraktar TB3 drones and F-35Bs. It operates advanced Type 214 submarines and indigenous MILGEM corvettes.",
            image: "Turkey_details/turkey_navy_flag.png",
            equipment: [
                { name: "TCG Anadolu LHD", count: 1, type: "Amphibious Assault Ship", description: "27,000-ton LHD serving as drone carrier for Bayraktar TB3 UCAVs" },
                { name: "Type 214 Submarine", count: 6, type: "Attack Submarine", description: "German-designed AIP submarine with fuel cell propulsion" },
                { name: "Reis-class Submarine", count: 4, type: "Attack Submarine", description: "Extended Type 214 variant with indigenous combat systems" },
                { name: "MILGEM Corvette", count: 8, type: "Anti-Submarine Corvette", description: "Indigenous stealth corvette with anti-submarine warfare capability" }
            ]
        },
        airforce: {
            fighters: 305, bombers: 0, transport: 82, helicopters: 485,
            name: "Turkish Air Force",
            founded: "June 1, 1911",
            motto: "Yurtta Sulh, Cihanda Sulh (Peace at Home, Peace in the World)",
            description: "The Turkish Air Force operates F-16 fighters and is developing the indigenous KAAN 5th-gen stealth fighter. Turkey's Bayraktar drones have become a global sensation.",
            image: "Turkey_details/turkey_airforce_flag.png",
            equipment: [
                { name: "F-16 Fighting Falcon", count: 245, type: "Multirole Fighter", description: "Block 50+ variant with CCIP upgrades, backbone of Turkish airpower" },
                { name: "KAAN (Development)", count: 1, type: "5th Gen Stealth Fighter", description: "Indigenous twin-engine stealth fighter under development, first flown 2024" },
                { name: "T129 ATAK", count: 60, type: "Attack Helicopter", description: "Turkish-Italian twin-engine attack helicopter with anti-tank missiles" },
                { name: "Bayraktar TB2", count: 200, type: "UCAV Drone", description: "Combat-proven medium-altitude UAV with MAM-L/MAM-C precision munitions" }
            ]
        }
    },
    "NorthKorea": {
        name: "Democratic Peoples Republic of Korea",
        flag: "🇰🇵",
        countryCode: "kp",
        rank: 30,
        budget: "$4B (est.)",
        nuclear: { status: true, warheads: 50, type: "Confirmed" },
        personnel: { active: 1280000, reserve: 600000 },
        description: "The Korean People's Army is one of the world's largest military forces by personnel. Despite aging equipment, North Korea possesses nuclear weapons, ballistic missiles, and the world's largest artillery force positioned to threaten Seoul.",
        image: "DPRK_details/Northkorea_flag.png",
        army: {
            tanks: 5895, apc: 6000, artillery: 21100, mlrs: 5500,
            name: "Korean People's Army Ground Force",
            founded: "February 8, 1948",
            motto: "Defend the Fatherland",
            description: "The KPA Ground Force is the fourth-largest army in the world, maintaining massive artillery concentrations along the DMZ. Most equipment is Soviet/Chinese-origin from the Cold War era.",
            image: "DPRK_details/Northkorea_army_flag.png",
            equipment: [
                { name: "Chonma-ho", count: 1000, type: "Main Battle Tank", description: "Indigenous MBT derived from T-62 with local modifications and ERA armor" },
                { name: "Pokpung-ho", count: 200, type: "Main Battle Tank", description: "Most advanced North Korean tank combining T-72/Type 88 features with composite armor" },
                { name: "T-62", count: 800, type: "Main Battle Tank", description: "Soviet-era tank with 115mm smoothbore gun, still in active frontline service" },
                { name: "Koksan SPG", count: 500, type: "Self-Propelled Gun", description: "170mm self-propelled gun with 60km range, capable of striking Seoul from the DMZ" }
            ]
        },
        navy: {
            carriers: 0, submarines: 83, destroyers: 0, frigates: 14,
            name: "Korean People's Navy",
            founded: "June 5, 1946",
            motto: "Defend the Coastal Waters",
            description: "The KPN operates one of the largest submarine fleets in the world, though mostly coastal midget and coastal submarines. It is developing submarine-launched ballistic missile capability.",
            image: "DPRK_details/Northkorea_navy_flag.png",
            equipment: [
                { name: "Sinpo-class Submarine", count: 3, type: "Ballistic Missile Submarine", description: "2,000-ton submarine capable of launching Pukguksong submarine-launched ballistic missiles" },
                { name: "Romeo-class Submarine", count: 20, type: "Attack Submarine", description: "Soviet-designed diesel-electric submarine license-built in North Korea" },
                { name: "Sang-O Submarine", count: 40, type: "Coastal Submarine", description: "Indigenous 325-ton coastal submarine for infiltration and mine-laying" },
                { name: "Najin-class Frigate", count: 2, type: "Frigate", description: "1,500-ton escort frigate with anti-ship missiles and naval guns" }
            ]
        },
        airforce: {
            fighters: 458, bombers: 80, transport: 200, helicopters: 202,
            name: "Korean People's Air Force",
            founded: "August 20, 1947",
            motto: "Guard the Skies of the Revolution",
            description: "The KPAF operates one of the largest air forces in Asia by number, but most aircraft are obsolete Soviet and Chinese designs. The MiG-29 is the most modern fighter in service.",
            image: "DPRK_details/Northkorea_airforce_flag.png",
            equipment: [
                { name: "MiG-29", count: 40, type: "Air Superiority Fighter", description: "Most advanced NK fighter, 4th-gen twin-engine interceptor with limited modern weapons" },
                { name: "MiG-23", count: 56, type: "Interceptor", description: "Variable-geometry 3rd-gen fighter used for air defense and ground attack" },
                { name: "MiG-21", count: 150, type: "Light Interceptor", description: "Aging but numerous 2nd-gen supersonic fighter, backbone of KPAF" },
                { name: "Il-28 Beagle", count: 80, type: "Tactical Bomber", description: "Soviet-era twin-engine jet bomber capable of delivering nuclear weapons" }
            ]
        }
    },
    "Italy": {
        name: "Italy",
        flag: "🇮🇹",
        countryCode: "it",
        rank: 10,
        budget: "$32.9B",
        nuclear: { status: false },
        personnel: { active: 175300, reserve: 20000 },
        description: "The Italian Armed Forces are a strong NATO member with significant naval and air capabilities. Italy is a key partner in European defense projects and maintains expeditionary forces deployed across the Mediterranean and beyond.",
        image: "Italy_details/italy_flag.jpg",
        army: {
            tanks: 200, apc: 4500, artillery: 108, mlrs: 22,
            name: "Italian Army (Esercito Italiano)",
            founded: "May 4, 1861",
            motto: "Per l'Italia (For Italy)",
            description: "The Italian Army is organized for rapid overseas deployment and NATO duties. It operates the Ariete MBT and the Centauro wheeled tank destroyer, optimized for rapid deployment in diverse terrains.",
            image: "Italy_details/italy_army_flag.png",
            equipment: [
                { name: "Ariete C1", count: 200, type: "Main Battle Tank", description: "Italian MBT with composite armor, 120mm smoothbore gun, and HITFIST turret" },
                { name: "Centauro II", count: 150, type: "Wheeled Tank Destroyer", description: "8x8 wheeled armored vehicle with 120mm gun for rapid deployment" },
                { name: "Freccia IFV", count: 249, type: "Infantry Fighting Vehicle", description: "8x8 wheeled IFV with 25mm Oerlikon autocannon and Spike ATGM" },
                { name: "PzH 2000", count: 70, type: "Self-Propelled Howitzer", description: "155mm tracked SPH jointly operated with German Army" }
            ]
        },
        navy: {
            carriers: 2, submarines: 8, destroyers: 4, frigates: 11,
            name: "Italian Navy (Marina Militare)",
            founded: "March 17, 1861",
            motto: "Patria e Onore (Fatherland and Honor)",
            description: "The Marina Militare operates two aircraft carriers and a large fleet of FREMM frigates. Italy is a major naval shipbuilder through Fincantieri, supplying warships to navies worldwide.",
            image: "Italy_details/italy_navy_flag.png",
            equipment: [
                { name: "Cavour Carrier", count: 1, type: "Light Aircraft Carrier", description: "27,100-ton STOVL carrier operating F-35B and AV-8B Harrier" },
                { name: "Trieste LHD", count: 1, type: "Amphibious Assault Ship", description: "33,000-ton multi-role amphibious ship, largest Italian warship since WWII" },
                { name: "Todaro-class Submarine", count: 4, type: "Attack Submarine", description: "Type 212A diesel-electric submarine with fuel cell AIP technology" },
                { name: "FREMM Frigate", count: 10, type: "Multipurpose Frigate", description: "Franco-Italian frigate with anti-submarine and air defense variants" }
            ]
        },
        airforce: {
            fighters: 219, bombers: 0, transport: 32, helicopters: 326,
            name: "Italian Air Force (Aeronautica Militare)",
            founded: "March 28, 1923",
            motto: "Virtute Siderum Tenus (With Valor to the Stars)",
            description: "The Aeronautica Militare operates Eurofighter Typhoons and F-35 stealth fighters, and is a key participant in European air policing missions across NATO's southern flank.",
            image: "Italy_details/italy_airforce_flag.png",
            equipment: [
                { name: "F-35A/B Lightning II", count: 30, type: "5th Gen Stealth Fighter", description: "Stealth multirole fighter in both CTOL and STOVL variants for land and carrier operations" },
                { name: "Eurofighter Typhoon", count: 94, type: "Multirole Fighter", description: "Twin-engine 4.5-gen fighter for air superiority, ground attack, and QRA duties" },
                { name: "Tornado", count: 71, type: "Strike Fighter", description: "Variable-geometry interdictor/strike aircraft for deep strike missions" },
                { name: "AW129 Mangusta", count: 48, type: "Attack Helicopter", description: "Italian twin-engine light attack helicopter with TOW missiles" }
            ]
        }
    },
    "Poland": {
        name: "Poland",
        flag: "🇵🇱",
        countryCode: "pl",
        rank: 21,
        budget: "$31.6B",
        nuclear: { status: false },
        personnel: { active: 150000, reserve: 0 },
        description: "Poland is undertaking the largest military modernization in Europe, spending 4% of GDP on defense. It is acquiring K2 tanks, K9 howitzers, HIMARS, Abrams tanks, and F-35s to build NATO's strongest land force on the eastern flank.",
        image: "Poland_details/poland_flag.jpg",
        army: {
            tanks: 863, apc: 2600, artillery: 575, mlrs: 257,
            name: "Polish Land Forces",
            founded: "1918",
            motto: "Bóg, Honor, Ojczyzna (God, Honor, Fatherland)",
            description: "The Polish Land Forces are rapidly modernizing with Korean K2 tanks and K9 howitzers, and American Abrams M1A2 SEPv3 tanks. Poland aims to field Europe's most powerful army by 2030.",
            image: "Poland_details/poland_army_flag.png",
            equipment: [
                { name: "Leopard 2PL", count: 247, type: "Main Battle Tank", description: "Modernized Leopard 2A4 with upgraded fire control, armor, and thermal sights" },
                { name: "PT-91 Twardy", count: 232, type: "Main Battle Tank", description: "Polish-upgraded T-72M1 with ERA armor, new fire control system, and engine" },
                { name: "K2 Black Panther", count: 180, type: "Main Battle Tank", description: "Korean MBT acquired for Poland's massive armored force expansion" },
                { name: "K9 Thunder", count: 212, type: "Self-Propelled Howitzer", description: "155mm SPH acquired from South Korea to replace Soviet-era artillery" }
            ]
        },
        navy: {
            carriers: 0, submarines: 3, destroyers: 0, frigates: 2,
            name: "Polish Navy",
            founded: "1918",
            motto: "Chwała Marynarce (Glory to the Navy)",
            description: "The Polish Navy operates in the Baltic Sea and is planning major modernization with new submarines and frigates under the Miecznik program.",
            image: "Poland_details/poland_navy_flag.jpg",
            equipment: [
                { name: "Orzel Submarine", count: 1, type: "Attack Submarine", description: "Kilo-class diesel-electric submarine for Baltic operations" },
                { name: "Kobben-class", count: 2, type: "Coastal Submarine", description: "Norwegian-origin coastal submarine for shallow water operations" },
                { name: "Oliver H. Perry Frigate", count: 2, type: "Guided Missile Frigate", description: "US-transferred frigate with SM-1 missiles and anti-submarine capability" },
                { name: "Kormoran II Minehunter", count: 3, type: "Mine Countermeasures", description: "Modern mine countermeasures vessel with composite hull" }
            ]
        },
        airforce: {
            fighters: 91, bombers: 0, transport: 47, helicopters: 160,
            name: "Polish Air Force",
            founded: "1918",
            motto: "Love Demands Sacrifice",
            description: "The Polish Air Force operates F-16 fighters and is transitioning to F-35A stealth fighters. It has also acquired FA-50 light fighters from South Korea.",
            image: "Poland_details/poland_airforce_flag.jpg",
            equipment: [
                { name: "F-16C/D", count: 48, type: "Multirole Fighter", description: "Block 52+ variant with conformal fuel tanks and advanced avionics" },
                { name: "FA-50", count: 48, type: "Light Combat Aircraft", description: "Korean-built supersonic trainer/light fighter for gap-fill role" },
                { name: "MiG-29", count: 28, type: "Air Superiority Fighter", description: "Soviet-era twin-engine interceptor, being retired in favor of F-35A" },
                { name: "AW149", count: 32, type: "Medium Transport Helicopter", description: "Leonardo twin-engine multi-role helicopter for troop transport" }
            ]
        }
    },
    "Ukraine": {
        name: "Ukraine",
        flag: "🇺🇦",
        countryCode: "ua",
        rank: 18,
        budget: "$8.9B",
        nuclear: { status: false },
        personnel: { active: 900000, reserve: 400000 },
        description: "The Armed Forces of Ukraine have become one of the most combat-experienced militaries in the world since 2022. They operate a mix of Soviet-era and Western-donated equipment and have pioneered modern drone warfare and combined arms tactics.",
        image: "Ukraine_details/ukraine_flag.jpg",
        army: {
            tanks: 1890, apc: 8400, artillery: 2200, mlrs: 491,
            name: "Ukrainian Ground Forces",
            founded: "December 6, 1991",
            motto: "For Honor! For Glory! For the People!",
            description: "The Ukrainian Ground Forces have been battle-hardened since 2022, employing a diverse mix of Soviet-legacy and Western-donated armor, artillery, and vehicles in combined arms warfare.",
            image: "Ukraine_details/ukraine_army_flag.jpg",
            equipment: [
                { name: "T-64BV", count: 600, type: "Main Battle Tank", description: "Soviet-era MBT with composite armor and 125mm gun, Ukraine's workhorse tank" },
                { name: "Leopard 2A6", count: 71, type: "Main Battle Tank", description: "German-donated advanced MBT with 120mm L55 gun and improved armor" },
                { name: "Challenger 2", count: 14, type: "Main Battle Tank", description: "British-donated MBT with Chobham armor, first Western tanks in Ukrainian service" },
                { name: "M109 Paladin", count: 45, type: "Self-Propelled Howitzer", description: "US-donated 155mm SPH providing long-range fire support with NATO ammunition" }
            ]
        },
        navy: {
            carriers: 0, submarines: 0, destroyers: 0, frigates: 1,
            name: "Ukrainian Navy",
            founded: "April 1, 1992",
            motto: "Vira! (Heave-ho!)",
            description: "The Ukrainian Navy was largely destroyed when Russia seized Crimea but has rebuilt using fast attack craft and unmanned naval drones that have successfully struck Russian warships.",
            image: "Ukraine_details/ukraine_navy_flag.png",
            equipment: [
                { name: "Hetman Sahaidachny Frigate", count: 1, type: "Frigate", description: "Krivak III-class frigate, flagship of the Ukrainian Navy" },
                { name: "Gyurza-M Gunboat", count: 18, type: "Armored Gunboat", description: "Indigenous river/coastal gunboat with 30mm cannon and Barrier missiles" },
                { name: "Island-class Cutter", count: 2, type: "Patrol Boat", description: "US Coast Guard-transferred patrol boats for coastal defense" },
                { name: "Centaur Assault Boat", count: 15, type: "Assault Craft", description: "Indigenous high-speed landing craft for riverine and coastal operations" }
            ]
        },
        airforce: {
            fighters: 67, bombers: 0, transport: 52, helicopters: 112,
            name: "Ukrainian Air Force",
            founded: "March 17, 1992",
            motto: "Proud to Serve the Fatherland",
            description: "The Ukrainian Air Force operates Soviet-era fighters supplemented by incoming F-16s from Western allies. It has maintained air defense despite facing a much larger Russian air force.",
            image: "Ukraine_details/ukraine_airforce_flag.jpg",
            equipment: [
                { name: "MiG-29", count: 32, type: "Air Superiority Fighter", description: "Soviet 4th-gen twin-engine interceptor, augmented with Western-donated units" },
                { name: "Su-27", count: 20, type: "Air Superiority Fighter", description: "Heavy twin-engine fighter for air defense and escort missions" },
                { name: "Su-24", count: 12, type: "Attack Aircraft", description: "Variable-geometry strike bomber adapted for Storm Shadow cruise missiles" },
                { name: "F-16 (ordered)", count: 80, type: "Multirole Fighter", description: "Western 4th-gen fighter being delivered from Denmark, Netherlands, and Norway" }
            ]
        }
    },
    "Spain": {
        name: "Spain",
        flag: "🇪🇸",
        countryCode: "es",
        rank: 19,
        budget: "$20.3B",
        nuclear: { status: false },
        personnel: { active: 122550, reserve: 15000 },
        description: "The Spanish Armed Forces focus on Mediterranean security and maintain expeditionary capabilities. Spain operates the Juan Carlos I LHD and is building the new S-80 submarine class, the largest conventional submarine in Europe.",
        image: "Spain_details/spain_flag.jpg",
        army: {
            tanks: 327, apc: 2000, artillery: 96, mlrs: 0,
            name: "Spanish Army (Ejército de Tierra)",
            founded: "1482",
            motto: "La Patria, Mi Honor (The Fatherland, My Honor)",
            description: "The Spanish Army operates Leopard 2 tanks and is modernizing with new IFVs. It contributes to NATO missions and EU battlegroups.",
            image: "Spain_details/spain_army_flag.png",
            equipment: [
                { name: "Leopard 2E", count: 239, type: "Main Battle Tank", description: "Spanish-built variant of Leopard 2A6 with local fire control upgrades" },
                { name: "Leopard 2A4", count: 108, type: "Main Battle Tank", description: "Earlier Leopard 2 variant used as reserve and training tank" },
                { name: "Pizarro IFV", count: 212, type: "Infantry Fighting Vehicle", description: "Spanish variant of ASCOD IFV with 30mm autocannon" },
                { name: "Centauro", count: 84, type: "Wheeled Tank Destroyer", description: "Italian 8x8 wheeled armored vehicle with 105mm gun for rapid deployment" }
            ]
        },
        navy: {
            carriers: 1, submarines: 4, destroyers: 0, frigates: 11,
            name: "Spanish Navy (Armada Española)",
            founded: "1248",
            motto: "Pro Maris Liberis (For Free Seas)",
            description: "The Armada Española operates the Juan Carlos I multipurpose assault ship and is deploying new S-80 Plus submarines. Spain is one of Europe's major naval powers in the Mediterranean.",
            image: "Spain_details/spain_navy_flag.png",
            equipment: [
                { name: "Juan Carlos I LHD", count: 1, type: "Amphibious Assault Ship", description: "26,000-ton LHD capable of operating AV-8B Harrier and F-35B fighters" },
                { name: "S-80 Plus Submarine", count: 4, type: "Attack Submarine", description: "Indigenous AIP submarine, largest conventional sub in Europe at 3,000 tons" },
                { name: "Álvaro de Bazán Frigate", count: 5, type: "Aegis Frigate", description: "F100-class Aegis combat system frigate with SPY-1D radar" },
                { name: "Santa María Frigate", count: 6, type: "Guided Missile Frigate", description: "Spanish variant of US Oliver Hazard Perry-class with SM-1 missiles" }
            ]
        },
        airforce: {
            fighters: 136, bombers: 0, transport: 52, helicopters: 134,
            name: "Spanish Air Force (Ejército del Aire)",
            founded: "October 7, 1939",
            motto: "Per Aspera ad Astra (Through Hardship to the Stars)",
            description: "The Spanish Air Force operates Eurofighter Typhoons and EF-18 Hornets for air defense. It participates in NATO air policing missions and is a partner in the FCAS future fighter program.",
            image: "Spain_details/spain_airforce_flag.png",
            equipment: [
                { name: "Eurofighter Typhoon", count: 70, type: "Multirole Fighter", description: "Twin-engine 4.5-gen fighter for air superiority and QRA missions" },
                { name: "EF-18 Hornet", count: 66, type: "Multirole Fighter", description: "US-designed twin-engine fighter adapted for Spanish operations" },
                { name: "A400M Atlas", count: 14, type: "Strategic Transport", description: "Four-engine turboprop transport, assembled at the Seville AIRBUS plant" },
                { name: "Tiger HAD", count: 24, type: "Attack Helicopter", description: "Eurocopter attack helicopter with anti-tank and fire-support capability" }
            ]
        }
    },
    "Netherlands": {
        name: "Netherlands",
        flag: "🇳🇱",
        countryCode: "nl",
        rank: 25,
        budget: "$15.6B",
        nuclear: { status: false },
        personnel: { active: 42000, reserve: 5000 },
        description: "The Royal Netherlands Armed Forces punch above their weight with advanced F-35 fighters, Apache helicopters, and a capable navy. The Netherlands closely cooperates with Germany in the 1 (German/Netherlands) Corps.",
        image: "Netherlands_details/netherlands_flag.jpg",
        army: {
            tanks: 18, apc: 1400, artillery: 54, mlrs: 22,
            name: "Royal Netherlands Army",
            founded: "January 9, 1814",
            motto: "Je Maintiendrai (I Will Maintain)",
            description: "The Royal Netherlands Army focuses on mechanized infantry and airmobile operations. It closely integrates with the German Bundeswehr under joint formations.",
            image: "Netherlands_details/netherlands_army_flag.jpg",
            equipment: [
                { name: "Leopard 2A6 (leased)", count: 18, type: "Main Battle Tank", description: "German MBT leased from Germany for training and NATO commitments" },
                { name: "CV90", count: 145, type: "Infantry Fighting Vehicle", description: "Swedish IFV with 35mm Bushmaster III cannon and advanced protection" },
                { name: "Boxer", count: 200, type: "Armored Personnel Carrier", description: "8x8 modular wheeled APC jointly developed with Germany" },
                { name: "PzH 2000", count: 54, type: "Self-Propelled Howitzer", description: "155mm SPH shared with German forces in joint formations" }
            ]
        },
        navy: {
            carriers: 0, submarines: 4, destroyers: 0, frigates: 6,
            name: "Royal Netherlands Navy",
            founded: "January 11, 1488",
            motto: "Patet Omnibus Mare (The Sea is Open to All)",
            description: "The Royal Netherlands Navy operates globally with De Zeven Provinciën-class frigates, Walrus-class submarines, and the Karel Doorman joint support ship.",
            image: "Netherlands_details/netherlands_navy_flag.png",
            equipment: [
                { name: "Walrus-class Submarine", count: 4, type: "Attack Submarine", description: "Diesel-electric submarine with advanced sonar and torpedo systems" },
                { name: "De Zeven Provinciën Frigate", count: 4, type: "Air Defence Frigate", description: "LCF-class frigate with Thales SMART-L radar and SM-2 missiles" },
                { name: "Karel Doorman JSS", count: 1, type: "Joint Support Ship", description: "28,000-ton logistics and amphibious support ship with helicopter deck" },
                { name: "Holland-class OPV", count: 4, type: "Offshore Patrol Vessel", description: "3,750-ton ocean-going patrol vessel for constabulary and maritime security" }
            ]
        },
        airforce: {
            fighters: 52, bombers: 0, transport: 4, helicopters: 45,
            name: "Royal Netherlands Air Force",
            founded: "July 1, 1913",
            motto: "Luctandum et Vigilandum (Strive and Watch)",
            description: "The Royal Netherlands Air Force is transitioning entirely to the F-35A, making it one of the first NATO air forces to operate an all-stealth fighter fleet.",
            image: "Netherlands_details/netherlands_airforce_flag.jpg",
            equipment: [
                { name: "F-35A Lightning II", count: 52, type: "5th Gen Stealth Fighter", description: "Stealth multirole fighter replacing F-16, nuclear-sharing capable" },
                { name: "C-130H Hercules", count: 4, type: "Tactical Transport", description: "Four-engine turboprop tactical transport for air logistics" },
                { name: "AH-64E Apache", count: 28, type: "Attack Helicopter", description: "Latest Apache variant with improved sensors and Longbow radar" },
                { name: "CH-47F Chinook", count: 14, type: "Heavy Transport Helicopter", description: "Twin-rotor heavy-lift helicopter for troop and cargo transport" }
            ]
        }
    },
    "Sweden": {
        name: "Sweden",
        flag: "🇸🇪",
        countryCode: "se",
        rank: 31,
        budget: "$9.7B",
        nuclear: { status: false },
        personnel: { active: 24000, reserve: 32000 },
        description: "Sweden is NATO's newest major member, bringing advanced indigenous defense systems including the Gripen fighter, the CV90 IFV, and the Gotland-class submarine that famously 'sank' a US carrier in exercises.",
        image: "Sweden_details/sweden_flag.jpg",
        army: {
            tanks: 120, apc: 600, artillery: 48, mlrs: 24,
            name: "Swedish Army (Armén)",
            founded: "1521",
            motto: "Skyldighet framför allt (Duty Before All)",
            description: "The Swedish Army specializes in Nordic and Arctic warfare. It produces world-class armored vehicles including the CV90 IFV, exported to 7 countries, and the Archer artillery system.",
            image: "Sweden_details/sweden_army_flag.png",
            equipment: [
                { name: "Stridsvagn 122 (Leopard 2)", count: 120, type: "Main Battle Tank", description: "Swedish Leopard 2A5 variant with additional composite armor and French thermal sights" },
                { name: "CV90", count: 509, type: "Infantry Fighting Vehicle", description: "Indigenous tracked IFV family in multiple variants — exported to 7+ nations" },
                { name: "Patria AMV", count: 113, type: "Armored Personnel Carrier", description: "Finnish 8x8 wheeled APC used for troop transport and fire support" },
                { name: "Archer SPG", count: 48, type: "Self-Propelled Howitzer", description: "155mm wheeled SPH with automated loading, shoot-and-scoot capability in 30 seconds" }
            ]
        },
        navy: {
            carriers: 0, submarines: 5, destroyers: 0, frigates: 0,
            name: "Swedish Navy (Marinen)",
            founded: "1522",
            motto: "With Strength and Vigilance",
            description: "The Swedish Navy specializes in Baltic Sea littoral warfare with world-class stealth corvettes and submarines. The Gotland-class submarine is legendary for defeating US carrier groups in exercises.",
            image: "Sweden_details/sweden_navy_flag.png",
            equipment: [
                { name: "Gotland-class Submarine", count: 2, type: "Attack Submarine", description: "World's first AIP submarine with Stirling engines — famously 'sank' USS Ronald Reagan in exercises" },
                { name: "Blekinge-class Submarine", count: 2, type: "Attack Submarine", description: "Next-gen submarine replacing Gotland with enhanced stealth and endurance" },
                { name: "Visby-class Corvette", count: 5, type: "Stealth Corvette", description: "Carbon-fiber stealth corvette with minimal radar signature for littoral warfare" },
                { name: "Luleå-class Minelayer", count: 2, type: "Minelayer", description: "Mine warfare vessel for offensive and defensive mine operations in the Baltic" }
            ]
        },
        airforce: {
            fighters: 98, bombers: 0, transport: 8, helicopters: 48,
            name: "Swedish Air Force (Flygvapnet)",
            founded: "July 1, 1926",
            motto: "Med Vingarna Som Vapen (With Wings as Weapons)",
            description: "The Flygvapnet operates the indigenous Gripen fighter, designed for dispersed highway operations in wartime. The Gripen is one of the most cost-effective fighters in the world.",
            image: "Sweden_details/sweden_airforce_flag.png",
            equipment: [
                { name: "JAS 39 Gripen C/D", count: 71, type: "Multirole Fighter", description: "Swedish single-engine fighter designed for highway operations and rapid turnaround" },
                { name: "JAS 39 Gripen E", count: 27, type: "Multirole Fighter", description: "Latest Gripen variant with AESA radar, increased range, and new avionics" },
                { name: "C-130H Hercules", count: 6, type: "Tactical Transport", description: "Four-engine tactical transport for air logistics and parachute operations" },
                { name: "UH-60M Black Hawk", count: 15, type: "Utility Helicopter", description: "American medium-lift helicopter for troop transport and medevac" }
            ]
        }
    },
    "Australia": {
        name: "Australia",
        flag: "🇦🇺",
        countryCode: "au",
        rank: 13,
        budget: "$32.3B",
        nuclear: { status: false },
        personnel: { active: 58600, reserve: 29560 },
        description: "The Australian Defence Force is modernizing rapidly under AUKUS, acquiring nuclear-powered submarines, long-range missiles, and expanding its F-35 fleet. Australia is a key US ally in the Indo-Pacific region.",
        image: "Australia_details/australia_flag.jpg",
        army: {
            tanks: 59, apc: 1600, artillery: 75, mlrs: 0,
            name: "Australian Army",
            founded: "March 1, 1901",
            motto: "By Land",
            description: "The Australian Army is modernizing under the LAND 400 program, replacing aging vehicles with Boxer CRV and acquiring HIMARS for long-range strike capability.",
            image: "Australia_details/australia_army_flag.jpg",
            equipment: [
                { name: "M1A2 Abrams", count: 59, type: "Main Battle Tank", description: "US-built MBT with depleted uranium armor and 120mm smoothbore gun" },
                { name: "ASLAV", count: 257, type: "Light Armored Vehicle", description: "8x8 wheeled reconnaissance vehicle based on LAV-25 platform" },
                { name: "Boxer CRV", count: 211, type: "Combat Reconnaissance Vehicle", description: "8x8 modular wheeled vehicle replacing ASLAV under LAND 400 Phase 2" },
                { name: "M777 Howitzer", count: 54, type: "Towed Howitzer", description: "Ultra-lightweight 155mm towed howitzer with titanium and aluminum construction" }
            ]
        },
        navy: {
            carriers: 2, submarines: 6, destroyers: 3, frigates: 8,
            name: "Royal Australian Navy",
            founded: "July 10, 1911",
            motto: "Per Mare Per Terram (By Sea By Land)",
            description: "The RAN is set for massive expansion under AUKUS, acquiring SSN-AUKUS nuclear attack submarines. It currently operates Hobart-class Aegis destroyers and Collins-class submarines.",
            image: "Australia_details/australia_navy_flag.jpg",
            equipment: [
                { name: "Canberra-class LHD", count: 2, type: "Amphibious Assault Ship", description: "27,000-ton landing helicopter dock based on Spanish Juan Carlos I design" },
                { name: "Collins-class Submarine", count: 6, type: "Attack Submarine", description: "Diesel-electric submarine being replaced by AUKUS nuclear-powered subs" },
                { name: "Hobart-class Destroyer", count: 3, type: "Aegis Destroyer", description: "Air warfare destroyer with Aegis combat system and SM-2 missiles" },
                { name: "Anzac-class Frigate", count: 8, type: "General Purpose Frigate", description: "MEKO 200-based frigate being replaced by Hunter-class frigates" }
            ]
        },
        airforce: {
            fighters: 79, bombers: 0, transport: 34, helicopters: 155,
            name: "Royal Australian Air Force",
            founded: "March 31, 1921",
            motto: "Per Ardua Ad Astra (Through Adversity to the Stars)",
            description: "The RAAF operates the largest F-35A fleet outside the US and is the only country operating the EA-18G Growler electronic warfare aircraft besides America.",
            image: "Australia_details/australia_airforce_flag.jpg",
            equipment: [
                { name: "F-35A Lightning II", count: 72, type: "5th Gen Stealth Fighter", description: "Stealth multirole fighter — Australia's primary air superiority platform" },
                { name: "F/A-18F Super Hornet", count: 24, type: "Multirole Fighter", description: "Twin-engine naval fighter serving as bridge capability before full F-35 transition" },
                { name: "EA-18G Growler", count: 11, type: "Electronic Warfare Aircraft", description: "Specialized electronic attack aircraft — only non-US operator globally" },
                { name: "MRH-90 Taipan", count: 41, type: "Medium Transport Helicopter", description: "NH90 variant for tactical troop transport and logistics" }
            ]
        }
    },
    "Israel": {
        name: "Israel",
        flag: "🇮🇱",
        countryCode: "il",
        rank: 17,
        budget: "$24.4B",
        nuclear: { status: true, warheads: 90, type: "Undeclared" },
        personnel: { active: 173000, reserve: 465000 },
        description: "The Israel Defense Forces are among the most combat-experienced and technologically advanced in the world. Israel has pioneered Iron Dome, Trophy APS, and has an undeclared nuclear arsenal. Mandatory conscription ensures a massive reserve force.",
        image: "Israel_details/israel_flag.jpg",
        army: {
            tanks: 1370, apc: 8500, artillery: 650, mlrs: 100,
            name: "Israel Defense Forces - Ground Command",
            founded: "May 26, 1948",
            motto: "Israel's Shield",
            description: "The IDF Ground Command operates the world-renowned Merkava MBT series and Namer IFV, both featuring revolutionary front-engine design and Trophy active protection system.",
            image: "Israel_details/israel_army_flag.jpg",
            equipment: [
                { name: "Merkava IV", count: 660, type: "Main Battle Tank", description: "Israel's indigenous MBT with Trophy APS, front-mounted engine, and troop compartment" },
                { name: "Merkava III", count: 400, type: "Main Battle Tank", description: "Earlier Merkava variant still in active service with modular armor" },
                { name: "Namer IFV", count: 200, type: "Infantry Fighting Vehicle", description: "World's heaviest IFV based on Merkava hull with Trophy APS and 60-ton weight" },
                { name: "M109 Doher", count: 600, type: "Self-Propelled Howitzer", description: "Israeli-modified M109 with improved fire control and autonomous operation" }
            ]
        },
        navy: {
            carriers: 0, submarines: 5, destroyers: 0, frigates: 0,
            name: "Israeli Navy",
            founded: "March 17, 1948",
            motto: "Onward to the Sea",
            description: "The Israeli Navy operates Dolphin-class submarines believed to be nuclear-capable, and Sa'ar 6 corvettes with Iron Dome missile defense. It focuses on coastal defense and submarine deterrence.",
            image: "Israel_details/israel_navy_flag.jpg",
            equipment: [
                { name: "Dolphin-class Submarine", count: 5, type: "Attack Submarine", description: "German-built diesel-electric submarine widely believed to carry nuclear-capable cruise missiles" },
                { name: "Sa'ar 6 Corvette", count: 4, type: "Guided Missile Corvette", description: "German-designed corvette with C-Dome (naval Iron Dome) air defense system" },
                { name: "Sa'ar 5 Corvette", count: 3, type: "Guided Missile Corvette", description: "Stealth corvette with Barak-8 SAM and anti-ship missile capability" },
                { name: "Shaldag MkV Patrol", count: 12, type: "Fast Patrol Craft", description: "High-speed patrol boat for coastal defense and special operations insertion" }
            ]
        },
        airforce: {
            fighters: 241, bombers: 0, transport: 60, helicopters: 127,
            name: "Israeli Air Force",
            founded: "May 28, 1948",
            motto: "The Best to Flight",
            description: "The Israeli Air Force is one of the most experienced and capable in the world. It operates the unique F-35I Adir with Israeli modifications and has extensive combat experience in precision strikes.",
            image: "Israel_details/israel_airforce_flag.jpg",
            equipment: [
                { name: "F-35I Adir", count: 50, type: "5th Gen Stealth Fighter", description: "Israeli-modified F-35A with indigenous EW, sensors, and weapons integration" },
                { name: "F-15I Ra'am", count: 25, type: "Strike Fighter", description: "Long-range strike variant of F-15E with conformal fuel tanks and Israeli avionics" },
                { name: "F-16I Sufa", count: 100, type: "Multirole Fighter", description: "Israeli Block 52+ F-16 with conformal fuel tanks and dorsal spine for avionics" },
                { name: "AH-64D Apache", count: 48, type: "Attack Helicopter", description: "Saraf variant with Israeli modifications and combat-proven in multiple conflicts" }
            ]
        }
    },
    "Egypt": {
        name: "Egypt",
        flag: "🇪🇬",
        countryCode: "eg",
        rank: 15,
        budget: "$4.6B",
        nuclear: { status: false },
        personnel: { active: 438500, reserve: 479000 },
        description: "The Egyptian Armed Forces are the largest military in Africa and the Arab world. Egypt operates a diverse fleet from both Western and Russian sources, including M1 Abrams tanks, Rafale fighters, and Mistral helicopter carriers.",
        image: "Egypt_details/egypt_flag.jpg",
        army: {
            tanks: 4295, apc: 11000, artillery: 1665, mlrs: 1100,
            name: "Egyptian Army",
            founded: "1820",
            motto: "Victory or Martyrdom",
            description: "The Egyptian Army is the largest in the Middle East with a massive tank fleet combining American Abrams, Russian T-90S, and thousands of older M60 Pattons.",
            image: "Egypt_details/egypt_army_flag.jpg",
            equipment: [
                { name: "M1A1 Abrams", count: 1130, type: "Main Battle Tank", description: "US-built MBT co-produced in Egypt, backbone of Egyptian armored forces" },
                { name: "T-90S", count: 500, type: "Main Battle Tank", description: "Russian MBT acquired to diversify tank fleet with Kontakt-5 ERA armor" },
                { name: "M60 Patton", count: 1700, type: "Main Battle Tank", description: "Aging but numerous US-origin tank making up the bulk of reserve formations" },
                { name: "M109 SPH", count: 200, type: "Self-Propelled Howitzer", description: "155mm self-propelled artillery providing fire support for armored divisions" }
            ]
        },
        navy: {
            carriers: 2, submarines: 8, destroyers: 0, frigates: 9,
            name: "Egyptian Navy",
            founded: "1820",
            motto: "Defend the Seas of Egypt",
            description: "The Egyptian Navy is the largest in the Middle East and Africa, operating two Mistral-class helicopter carriers purchased from France and a mixed fleet of submarines and frigates.",
            image: "Egypt_details/egypt_navy_flag.jpg",
            equipment: [
                { name: "Mistral-class LHD", count: 2, type: "Helicopter Carrier", description: "French-built 21,000-ton amphibious assault ship with 16 helicopters" },
                { name: "Type 209 Submarine", count: 4, type: "Attack Submarine", description: "German-designed diesel-electric submarine for Mediterranean operations" },
                { name: "Type 033 Submarine", count: 4, type: "Coastal Submarine", description: "Chinese-origin diesel-electric submarine for coastal defense" },
                { name: "FREMM Frigate", count: 2, type: "Multipurpose Frigate", description: "Franco-Italian frigate with Aster missiles for area air defense" }
            ]
        },
        airforce: {
            fighters: 337, bombers: 0, transport: 82, helicopters: 280,
            name: "Egyptian Air Force",
            founded: "1930",
            motto: "Higher and Higher for the Sake of Glory",
            description: "The Egyptian Air Force operates a diverse fleet from multiple sources — American F-16s, French Rafales, and Russian MiG-29s — giving it the largest fighter force in Africa.",
            image: "Egypt_details/egypt_airforce_flag.jpg",
            equipment: [
                { name: "F-16C/D", count: 220, type: "Multirole Fighter", description: "Block 40/52 variants forming the backbone of Egyptian airpower" },
                { name: "Rafale", count: 54, type: "Omnirole Fighter", description: "French twin-engine fighter providing advanced air superiority capability" },
                { name: "MiG-29", count: 46, type: "Air Superiority Fighter", description: "Russian 4th-gen twin-engine interceptor diversifying Egypt's fighter fleet" },
                { name: "AH-64D Apache", count: 46, type: "Attack Helicopter", description: "Twin-engine attack helicopter with Hellfire missiles for anti-armor operations" }
            ]
        }
    },
    "Pakistan": {
        name: "Pakistan",
        flag: "🇵🇰",
        countryCode: "pk",
        rank: 9,
        budget: "$10.3B",
        nuclear: { status: true, warheads: 170, type: "Confirmed", firstTest: "May 28, 1998 (Chagai-I)" },
        personnel: { active: 654000, reserve: 550000, paramilitary: 420000 },
        description: "Pakistan's nuclear weapons program began in the 1970s under Prime Minister Zulfikar Ali Bhutto after India's first nuclear test (Smiling Buddha, 1974). China played a crucial role in Pakistan's nuclear development — providing a tested nuclear weapon design (believed to be the CHIC-4 compact fission design), highly enriched uranium, and assistance in building the Khushab plutonium production reactor. Additionally, Dr. Abdul Qadeer Khan brought uranium centrifuge enrichment technology from the Netherlands (URENCO) and established the Kahuta Research Laboratories. China also transferred M-11 ballistic missile technology, forming the basis of Pakistan's delivery systems. Pakistan conducted its first nuclear tests on May 28, 1998 (Chagai-I — 5 simultaneous detonations) and May 30, 1998 (Chagai-II), in direct response to India's Pokhran-II tests. Pakistan now possesses an estimated 170 nuclear warheads — the fastest-growing arsenal in the world — deliverable by Shaheen ballistic missiles, Ra'ad air-launched cruise missiles, and Babur-3 submarine-launched cruise missiles.",
        image: "https://images.unsplash.com/photo-1585593700906-99f2e15b7f73?w=800&h=400&fit=crop",
        army: {
            tanks: 3742, apc: 8500, artillery: 4472, mlrs: 560,
            name: "Pakistan Army",
            founded: "August 14, 1947",
            motto: "Faith, Piety, Jihad in the path of Allah",
            strength: "560,000 active",
            equipment: [
                { name: "Al-Khalid MBT", count: 600, type: "Main Battle Tank", description: "Jointly developed with China, featuring 125mm smoothbore gun and composite armor" },
                { name: "T-80UD", count: 320, type: "Main Battle Tank", description: "Ukrainian-built gas turbine tank with strong armor protection" },
                { name: "Type 85-IIAP", count: 300, type: "Main Battle Tank", description: "Chinese-origin MBT with 125mm gun" },
                { name: "M113 APC", count: 1800, type: "Armored Personnel Carrier", description: "Widely used tracked APC for infantry transport" }
            ]
        },
        navy: {
            carriers: 0, submarines: 8, destroyers: 0, frigates: 10,
            name: "Pakistan Navy",
            founded: "August 14, 1947",
            motto: "Power Through the Seas",
            strength: "30,000 active",
            equipment: [
                { name: "Agosta 90B Submarine", count: 3, type: "Attack Submarine", description: "French-designed AIP-equipped diesel submarine with SM39 Exocet capability" },
                { name: "Type 054A/P Frigate", count: 4, type: "Guided Missile Frigate", description: "Chinese-built modern frigate with HQ-16 SAM and anti-ship missiles" },
                { name: "Hangor-class Submarine", count: 8, type: "Attack Submarine", description: "Chinese Yuan-class submarine with AIP technology (on order)" },
                { name: "PNS Alamgir (F-260)", count: 1, type: "Frigate", description: "Ex-US Oliver Hazard Perry-class guided missile frigate" }
            ]
        },
        airforce: {
            fighters: 570, bombers: 0, transport: 228, helicopters: 380,
            name: "Pakistan Air Force",
            founded: "August 14, 1947",
            motto: "In God We Soar with Strength",
            strength: "70,000 active",
            equipment: [
                { name: "JF-17 Thunder", count: 150, type: "Multirole Fighter", description: "Jointly developed with China, lightweight single-engine multi-role combat aircraft" },
                { name: "F-16 Fighting Falcon", count: 85, type: "Multirole Fighter", description: "US-built 4th gen fighter, backbone of PAF air superiority" },
                { name: "J-10CE", count: 36, type: "Multirole Fighter", description: "Chinese 4.5-gen single-engine fighter with AESA radar" },
                { name: "Mirage III/V", count: 120, type: "Strike Fighter", description: "French-built delta wing fighter used for strike missions" }
            ]
        }
    },
    "Iran": {
        name: "Iran",
        flag: "🇮🇷",
        countryCode: "ir",
        rank: 14,
        budget: "$24.6B",
        nuclear: { status: false, warheads: 0, type: "Suspected Program" },
        personnel: { active: 610000, reserve: 350000, paramilitary: 220000 },
        description: "Iran wields significant asymmetric military capabilities through its ballistic missile arsenal and IRGC proxy network across the Middle East. Its drone technology has proven effective in multiple conflicts.",
        image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&h=400&fit=crop",
        army: {
            tanks: 1513, apc: 2500, artillery: 3668, mlrs: 1474,
            name: "Islamic Republic of Iran Army",
            founded: "April 18, 1925",
            motto: "For Allah, the Country, the Leader",
            strength: "420,000 active",
            equipment: [
                { name: "Karrar MBT", count: 100, type: "Main Battle Tank", description: "Domestically produced tank based on T-72 with advanced electronics and ERA" },
                { name: "T-72S", count: 480, type: "Main Battle Tank", description: "Russian-built main battle tank, backbone of Iranian armored forces" },
                { name: "Zulfiqar MBT", count: 150, type: "Main Battle Tank", description: "Indigenous MBT with 125mm smoothbore gun" },
                { name: "BMP-2", count: 400, type: "Infantry Fighting Vehicle", description: "Soviet-origin IFV with 30mm autocannon" }
            ]
        },
        navy: {
            carriers: 0, submarines: 19, destroyers: 0, frigates: 7,
            name: "Islamic Republic of Iran Navy",
            founded: "November 28, 1923",
            motto: "Power and Authority Over the Waters",
            strength: "28,000 active",
            equipment: [
                { name: "Kilo-class Submarine", count: 3, type: "Attack Submarine", description: "Russian-built diesel-electric submarine with torpedo and mine capability" },
                { name: "Ghadir-class Mini-Sub", count: 14, type: "Midget Submarine", description: "Domestically built coastal defense submarine" },
                { name: "Moudge-class Frigate", count: 3, type: "Frigate", description: "Indigenous light frigate with anti-ship and SAM missiles" },
                { name: "Shahid Mahdavi Destroyer", count: 1, type: "Destroyer", description: "New domestically built heavy warship" }
            ]
        },
        airforce: {
            fighters: 345, bombers: 0, transport: 130, helicopters: 334,
            name: "Islamic Republic of Iran Air Force",
            founded: "1924",
            motto: "Guardians of the Skies",
            strength: "52,000 active",
            equipment: [
                { name: "F-14 Tomcat", count: 40, type: "Interceptor", description: "US-built twin-engine interceptor with AWG-9 radar, modernized with domestic avionics" },
                { name: "Kowsar Fighter", count: 15, type: "Multirole Fighter", description: "Domestically produced 4th-gen fighter based on F/A-18 design" },
                { name: "MiG-29", count: 36, type: "Air Superiority Fighter", description: "Russian-built twin-engine air superiority fighter" },
                { name: "Shahed-136 Drone", count: 1000, type: "Loitering Munition", description: "Cheap kamikaze drone used extensively in regional conflicts" }
            ]
        }
    },
    "SaudiArabia": {
        name: "Saudi Arabia",
        flag: "🇸🇦",
        countryCode: "sa",
        rank: 22,
        budget: "$75.8B",
        nuclear: { status: false, warheads: 0, type: "No Program" },
        personnel: { active: 257000, reserve: 25000, paramilitary: 100000 },
        description: "Saudi Arabia possesses one of the world's best-funded militaries with cutting-edge Western equipment. It operates advanced US and European fighter jets, tanks, and air defense systems.",
        image: "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800&h=400&fit=crop",
        army: {
            tanks: 1062, apc: 5500, artillery: 680, mlrs: 322,
            name: "Royal Saudi Land Forces",
            founded: "1934",
            motto: "There is no god but God",
            strength: "160,000 active",
            equipment: [
                { name: "M1A2S Abrams", count: 373, type: "Main Battle Tank", description: "Saudi variant of the M1A2 with improved armor package" },
                { name: "AMX-30", count: 300, type: "Main Battle Tank", description: "French-built MBT being phased out" },
                { name: "LAV-25", count: 1117, type: "Armored Fighting Vehicle", description: "Eight-wheeled light armored vehicle for reconnaissance" },
                { name: "M2 Bradley", count: 400, type: "Infantry Fighting Vehicle", description: "US-built IFV for mechanized infantry" }
            ]
        },
        navy: {
            carriers: 0, submarines: 0, destroyers: 0, frigates: 7,
            name: "Royal Saudi Naval Forces",
            founded: "1960",
            motto: "Guardians of the Seas",
            strength: "15,000 active",
            equipment: [
                { name: "Al-Riyadh Frigate", count: 3, type: "Guided Missile Frigate", description: "French La Fayette-class with Aster 15 SAM and Exocet missiles" },
                { name: "Al-Madinah Frigate", count: 4, type: "Frigate", description: "French F-2000 type with Otomat anti-ship missiles" },
                { name: "Al-Siddiq Corvette", count: 9, type: "Missile Corvette", description: "US-built patrol corvettes with Harpoon anti-ship missiles" },
                { name: "Avante 2200 Corvette", count: 5, type: "Corvette", description: "Spanish-built modern multi-mission corvettes (on order)" }
            ]
        },
        airforce: {
            fighters: 348, bombers: 0, transport: 150, helicopters: 245,
            name: "Royal Saudi Air Force",
            founded: "1950",
            motto: "Soaring to Protect",
            strength: "45,000 active",
            equipment: [
                { name: "F-15SA Strike Eagle", count: 84, type: "Air Superiority Fighter", description: "Advanced variant of F-15 with fly-by-wire flight controls and AESA radar" },
                { name: "F-15S Eagle", count: 70, type: "Strike Fighter", description: "Saudi variant of the F-15E for air-to-ground missions" },
                { name: "Eurofighter Typhoon", count: 72, type: "Multirole Fighter", description: "European twin-engine 4.5-gen multi-role fighter" },
                { name: "Tornado IDS", count: 80, type: "Strike Aircraft", description: "European variable-sweep wing strike aircraft" }
            ]
        }
    },
    "Brazil": {
        name: "Brazil",
        flag: "🇧🇷",
        countryCode: "br",
        rank: 12,
        budget: "$22.2B",
        nuclear: { status: false, warheads: 0, type: "No Program" },
        personnel: { active: 360000, reserve: 1340000, paramilitary: 395000 },
        description: "Brazil is the dominant military power in Latin America with the largest armed forces in the region. It operates a carrier and maintains a nuclear submarine program.",
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&h=400&fit=crop",
        army: {
            tanks: 437, apc: 2400, artillery: 756, mlrs: 70,
            name: "Brazilian Army",
            founded: "April 19, 1648",
            motto: "Arm Strong, Friendly Hand",
            strength: "223,000 active",
            equipment: [
                { name: "Leopard 1A5 BR", count: 220, type: "Main Battle Tank", description: "Modernized German MBT with thermal imaging and fire control" },
                { name: "M60A3 TTS", count: 91, type: "Main Battle Tank", description: "American MBT with thermal targeting system" },
                { name: "VBTP-MR Guarani", count: 400, type: "Armored Personnel Carrier", description: "Modern 6x6 armored vehicle designed and built in Brazil" },
                { name: "ASTROS II", count: 70, type: "MLRS", description: "Brazilian-made multi-caliber rocket launcher system" }
            ]
        },
        navy: {
            carriers: 1, submarines: 5, destroyers: 0, frigates: 9,
            name: "Brazilian Navy",
            founded: "December 10, 1822",
            motto: "Homeland and Honor",
            strength: "80,000 active",
            equipment: [
                { name: "NAM Atlântico", count: 1, type: "Helicopter Carrier", description: "Multi-purpose amphibious assault ship (ex-HMS Ocean)" },
                { name: "Scorpène-class Submarine", count: 4, type: "Attack Submarine", description: "French-designed diesel-electric submarine built in Brazil" },
                { name: "Álvaro Alberto SSNB", count: 1, type: "Nuclear Submarine", description: "Under construction — Brazil's first nuclear-powered submarine" },
                { name: "Tamandaré-class Corvette", count: 4, type: "Corvette", description: "German-designed modern multi-mission corvettes (under construction)" }
            ]
        },
        airforce: {
            fighters: 210, bombers: 0, transport: 362, helicopters: 122,
            name: "Brazilian Air Force",
            founded: "January 20, 1941",
            motto: "Wings That Protect the Country",
            strength: "70,000 active",
            equipment: [
                { name: "Gripen E/F", count: 36, type: "Multirole Fighter", description: "Swedish 4.5-gen fighter with AESA radar and supercruise capability" },
                { name: "AMX A-1", count: 43, type: "Ground Attack Aircraft", description: "Italian-Brazilian subsonic attack aircraft" },
                { name: "A-29 Super Tucano", count: 99, type: "Light Attack/Trainer", description: "Brazilian-built turboprop counter-insurgency and training aircraft" },
                { name: "KC-390 Millennium", count: 6, type: "Transport Aircraft", description: "Brazilian-designed twin-jet military transport — most advanced in its class" }
            ]
        }
    },
    "Indonesia": {
        name: "Indonesia",
        flag: "🇮🇩",
        countryCode: "id",
        rank: 16,
        budget: "$9.4B",
        nuclear: { status: false, warheads: 0, type: "No Program" },
        personnel: { active: 395000, reserve: 400000, paramilitary: 280000 },
        description: "Indonesia commands the largest military in Southeast Asia, strategically positioned across thousands of islands controlling vital sea lanes including the Strait of Malacca.",
        image: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?w=800&h=400&fit=crop",
        army: {
            tanks: 396, apc: 1089, artillery: 283, mlrs: 36,
            name: "Indonesian Army (TNI-AD)",
            founded: "October 5, 1945",
            motto: "Kartika Eka Paksi (Unrivaled Single Bird)",
            strength: "300,000 active",
            equipment: [
                { name: "Leopard 2A4", count: 61, type: "Main Battle Tank", description: "German-built 3rd gen MBT for heavy armored operations" },
                { name: "Leopard 2 Revolution", count: 42, type: "Main Battle Tank", description: "Upgraded Leopard 2 with enhanced urban warfare protection" },
                { name: "Marder 1A3 IFV", count: 50, type: "Infantry Fighting Vehicle", description: "German IFV with 20mm autocannon" },
                { name: "Anoa 6x6 APC", count: 150, type: "Armored Personnel Carrier", description: "Domestically built Indonesian armored vehicle" }
            ]
        },
        navy: {
            carriers: 0, submarines: 5, destroyers: 0, frigates: 8,
            name: "Indonesian Navy (TNI-AL)",
            founded: "September 10, 1945",
            motto: "Jalesveva Jayamahe (At Sea We Triumph)",
            strength: "65,000 active",
            equipment: [
                { name: "Type 209/1400 Submarine", count: 2, type: "Attack Submarine", description: "German-built diesel-electric submarine for patrol operations" },
                { name: "Scorpène-class Submarine", count: 2, type: "Attack Submarine", description: "French-designed submarine (on order)" },
                { name: "SIGMA-class Frigate", count: 2, type: "Guided Missile Frigate", description: "Dutch-built modern frigate with Exocet missiles" },
                { name: "Ahmad Yani-class Frigate", count: 6, type: "Frigate", description: "Ex-Dutch Van Speijk-class refurbished frigates" }
            ]
        },
        airforce: {
            fighters: 133, bombers: 0, transport: 112, helicopters: 197,
            name: "Indonesian Air Force (TNI-AU)",
            founded: "April 9, 1946",
            motto: "Swa Bhuwana Paksa (Wings of the Motherland)",
            strength: "35,000 active",
            equipment: [
                { name: "Su-27/30 Flanker", count: 16, type: "Air Superiority Fighter", description: "Russian heavy twin-engine fighter with long range and BVR capability" },
                { name: "F-16 C/D Block 52", count: 33, type: "Multirole Fighter", description: "Upgraded US-built 4th gen multirole fighter" },
                { name: "KF-21 Boramae", count: 0, type: "4.5 Gen Fighter (on order)", description: "Indonesian-Korean jointly developed next-gen fighter — 50 on order" },
                { name: "T-50i Golden Eagle", count: 16, type: "Lead-In Fighter Trainer", description: "Korean-built advanced jet trainer and light combat aircraft" }
            ]
        }
    },
    "Canada": {
        name: "Canada",
        flag: "🇨🇦",
        countryCode: "ca",
        rank: 27,
        budget: "$26.9B",
        nuclear: { status: false, warheads: 0, type: "No Program" },
        personnel: { active: 68000, reserve: 27000, paramilitary: 0 },
        description: "Canada's military is a well-trained NATO force focused on Arctic sovereignty, peacekeeping, and interoperability with the United States. It is modernizing its fleet and fighter aircraft.",
        image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?w=800&h=400&fit=crop",
        army: {
            tanks: 82, apc: 1800, artillery: 188, mlrs: 0,
            name: "Canadian Army",
            founded: "July 1, 1867",
            motto: "Vigilamus Pro Te (We Watch Over You)",
            strength: "42,000 active",
            equipment: [
                { name: "Leopard 2A6M CAN", count: 82, type: "Main Battle Tank", description: "German MBT modified for Canadian service with mine protection" },
                { name: "LAV 6.0", count: 550, type: "Armored Fighting Vehicle", description: "8x8 combat vehicle — backbone of Canadian mechanized forces" },
                { name: "M777 Howitzer", count: 37, type: "Towed Howitzer", description: "Ultra-lightweight 155mm field artillery" },
                { name: "TAPVs", count: 500, type: "Tactical Patrol Vehicle", description: "Protected mobility vehicles for light forces" }
            ]
        },
        navy: {
            carriers: 0, submarines: 4, destroyers: 0, frigates: 12,
            name: "Royal Canadian Navy",
            founded: "May 4, 1910",
            motto: "Ready Aye Ready",
            strength: "12,000 active",
            equipment: [
                { name: "Halifax-class Frigate", count: 12, type: "Multi-Role Frigate", description: "Modernized Canadian patrol frigate with Sea Sparrow and Harpoon missiles" },
                { name: "Victoria-class Submarine", count: 4, type: "Patrol Submarine", description: "Ex-British Upholder-class diesel-electric submarine" },
                { name: "Harry DeWolf-class AOPV", count: 6, type: "Arctic Patrol Vessel", description: "Ice-capable offshore patrol vessel for Arctic sovereignty" },
                { name: "CSC Frigate", count: 15, type: "Surface Combatant (planned)", description: "Future Canadian Surface Combatant — 15 ships planned to replace Halifax-class" }
            ]
        },
        airforce: {
            fighters: 94, bombers: 0, transport: 73, helicopters: 145,
            name: "Royal Canadian Air Force",
            founded: "April 1, 1924",
            motto: "Per Ardua Ad Astra (Through Adversity to the Stars)",
            strength: "14,500 active",
            equipment: [
                { name: "CF-18 Hornet", count: 76, type: "Multirole Fighter", description: "Modernized F/A-18A/B for air defense and strike missions" },
                { name: "F-35A Lightning II", count: 88, type: "5th Gen Stealth Fighter (on order)", description: "88 F-35A ordered to replace CF-18 fleet" },
                { name: "CC-177 Globemaster III", count: 5, type: "Strategic Transport", description: "Heavy strategic airlift aircraft" },
                { name: "CP-140 Aurora", count: 14, type: "Maritime Patrol", description: "Long-range maritime surveillance and ASW aircraft" }
            ]
        }
    },
    "Taiwan": {
        name: "Taiwan",
        flag: "🇹🇼",
        countryCode: "tw",
        rank: 23,
        budget: "$19.1B",
        nuclear: { status: false, warheads: 0, type: "No Program" },
        personnel: { active: 190000, reserve: 1657000, paramilitary: 17000 },
        description: "Taiwan maintains strong defensive capabilities to deter a potential Chinese invasion. It operates modern US-made equipment and is developing asymmetric warfare strategies.",
        image: "https://images.unsplash.com/photo-1470004914212-05527e49370b?w=800&h=400&fit=crop",
        army: {
            tanks: 1100, apc: 2600, artillery: 1600, mlrs: 57,
            name: "Republic of China Army",
            founded: "June 16, 1924",
            motto: "Defend the Nation",
            strength: "130,000 active",
            equipment: [
                { name: "M1A2T Abrams", count: 108, type: "Main Battle Tank", description: "US-built MBT purchased for Taiwan with advanced armor and electronics" },
                { name: "CM-11 Brave Tiger", count: 450, type: "Main Battle Tank", description: "Domestically assembled MBT based on M48/M60 design" },
                { name: "CM-32 Clouded Leopard", count: 600, type: "Infantry Fighting Vehicle", description: "Indigenous 8x8 armored vehicle family" },
                { name: "Thunderbolt-2000 MLRS", count: 57, type: "MLRS", description: "Domestically developed multiple launch rocket system" }
            ]
        },
        navy: {
            carriers: 0, submarines: 4, destroyers: 4, frigates: 22,
            name: "Republic of China Navy",
            founded: "December 1, 1924",
            motto: "Seas of Honor",
            strength: "40,000 active",
            equipment: [
                { name: "Hai Kun-class Submarine", count: 1, type: "Indigenous Submarine", description: "Taiwan's first domestically built submarine (commissioned 2025)" },
                { name: "Kee Lung-class Destroyer", count: 4, type: "Guided Missile Destroyer", description: "Ex-US Kidd-class with SM-2 SAMs and Harpoon missiles" },
                { name: "Cheng Kung-class Frigate", count: 8, type: "Guided Missile Frigate", description: "Taiwan-built Perry-class with SM-1 and Hsiung Feng missiles" },
                { name: "Tuo Chiang-class Corvette", count: 6, type: "Stealth Corvette", description: "Fast catamaran stealth corvette with anti-ship missiles" }
            ]
        },
        airforce: {
            fighters: 286, bombers: 0, transport: 68, helicopters: 256,
            name: "Republic of China Air Force",
            founded: "August 1, 1920",
            motto: "Above the Heavens",
            strength: "35,000 active",
            equipment: [
                { name: "F-16V Viper", count: 141, type: "Multirole Fighter", description: "Upgraded Block 70/72 F-16 with AESA radar — most advanced F-16 variant" },
                { name: "Mirage 2000-5", count: 47, type: "Multirole Fighter", description: "French-built delta-wing fighter with MICA missiles" },
                { name: "AIDC F-CK-1 Ching-kuo", count: 127, type: "Light Fighter", description: "Indigenous defense fighter for air defense and ground attack" },
                { name: "E-2K Hawkeye", count: 6, type: "AEW&C", description: "US-built airborne early warning aircraft for air battle management" }
            ]
        }
    },
    "Greece": {
        name: "Greece",
        flag: "🇬🇷",
        countryCode: "gr",
        rank: 28,
        budget: "$8.7B",
        nuclear: { status: false, warheads: 0, type: "No Program" },
        personnel: { active: 143000, reserve: 220000, paramilitary: 4000 },
        description: "Greece maintains one of the largest militaries in NATO Europe relative to population, driven by tensions with Turkey over the Aegean Sea and Cyprus.",
        image: "https://images.unsplash.com/photo-1503152394-c571994fd383?w=800&h=400&fit=crop",
        army: {
            tanks: 1367, apc: 3000, artillery: 1800, mlrs: 198,
            name: "Hellenic Army",
            founded: "1828",
            motto: "Freedom or Death",
            strength: "99,000 active",
            equipment: [
                { name: "Leopard 2A6 HEL", count: 170, type: "Main Battle Tank", description: "German-built heavy MBT with L/55 120mm gun" },
                { name: "Leopard 2A4", count: 183, type: "Main Battle Tank", description: "German MBT forming backbone of armored forces" },
                { name: "Leopard 1A5", count: 501, type: "Main Battle Tank", description: "Older German MBT still in service" },
                { name: "M270 MLRS", count: 36, type: "MLRS", description: "US-built multiple launch rocket system with ATACMS capability" }
            ]
        },
        navy: {
            carriers: 0, submarines: 11, destroyers: 0, frigates: 13,
            name: "Hellenic Navy",
            founded: "1821",
            motto: "My Country, Right or Wrong",
            strength: "19,000 active",
            equipment: [
                { name: "Type 214 Submarine", count: 4, type: "AIP Submarine", description: "German-built air-independent propulsion submarine with stealth features" },
                { name: "Type 209 Submarine", count: 7, type: "Attack Submarine", description: "German-designed patrol submarine" },
                { name: "Hydra-class Frigate", count: 4, type: "Guided Missile Frigate", description: "MEKO 200 design with Harpoon and Sea Sparrow" },
                { name: "FDI HN Frigate", count: 3, type: "Modern Frigate (on order)", description: "French Belharra-class with Aster-30 SAM — cutting edge European design" }
            ]
        },
        airforce: {
            fighters: 243, bombers: 0, transport: 52, helicopters: 214,
            name: "Hellenic Air Force",
            founded: "November 11, 1930",
            motto: "Always Dare",
            strength: "26,600 active",
            equipment: [
                { name: "F-16 Block 52+/Viper", count: 154, type: "Multirole Fighter", description: "84 upgraded to Viper configuration with AESA radar" },
                { name: "Rafale F3R", count: 24, type: "Multirole Fighter", description: "French 4.5-gen omnirole fighter with Meteor missiles" },
                { name: "Mirage 2000-5", count: 25, type: "Air Defense Fighter", description: "French interceptor with MICA missiles" },
                { name: "F-35A Lightning II", count: 40, type: "5th Gen Fighter (on order)", description: "40 F-35A approved for purchase — will transform Greek air power" }
            ]
        }
    },
    "Vietnam": {
        name: "Vietnam",
        flag: "🇻🇳",
        countryCode: "vn",
        rank: 20,
        budget: "$7.9B",
        nuclear: { status: false, warheads: 0, type: "No Program" },
        personnel: { active: 482000, reserve: 5000000, paramilitary: 40000 },
        description: "Vietnam's military is battle-hardened and focused on territorial defense, particularly in the South China Sea against Chinese encroachment. It operates a growing submarine fleet.",
        image: "https://images.unsplash.com/photo-1557750255-c76072572da6?w=800&h=400&fit=crop",
        army: {
            tanks: 2575, apc: 2500, artillery: 2700, mlrs: 468,
            name: "Vietnam People's Army",
            founded: "December 22, 1944",
            motto: "Determined to Win",
            strength: "412,000 active",
            equipment: [
                { name: "T-90S/SK", count: 64, type: "Main Battle Tank", description: "Russian 3rd-gen MBT with modern fire control and Shtora APS" },
                { name: "T-54/55/M3", count: 1400, type: "Main Battle Tank", description: "Modernized Cold War-era tanks with improved electronics" },
                { name: "BMP-1/2", count: 600, type: "Infantry Fighting Vehicle", description: "Soviet-era armored vehicles upgraded for modern combat" },
                { name: "BM-21 Grad", count: 350, type: "MLRS", description: "122mm multiple rocket launcher on truck chassis" }
            ]
        },
        navy: {
            carriers: 0, submarines: 6, destroyers: 0, frigates: 6,
            name: "Vietnam People's Navy",
            founded: "May 7, 1955",
            motto: "Defend the Seas",
            strength: "40,000 active",
            equipment: [
                { name: "Kilo-class Submarine", count: 6, type: "Attack Submarine", description: "Russian 'Black Hole' diesel-electric sub with Kalibr cruise missile capability" },
                { name: "Gepard-class Frigate", count: 4, type: "Guided Missile Frigate", description: "Russian-built light frigate with Kh-35 anti-ship missiles" },
                { name: "Molniya-class Corvette", count: 10, type: "Missile Corvette", description: "Russian fast attack craft with Kh-35 anti-ship missiles" },
                { name: "BPS-500 Corvette", count: 2, type: "Corvette", description: "Domestically built patrol corvette" }
            ]
        },
        airforce: {
            fighters: 217, bombers: 0, transport: 60, helicopters: 160,
            name: "Vietnam People's Air Force",
            founded: "March 3, 1955",
            motto: "Masters of the Sky",
            strength: "30,000 active",
            equipment: [
                { name: "Su-30MK2V", count: 36, type: "Multirole Fighter", description: "Russian twin-engine heavy fighter with anti-ship capability" },
                { name: "Su-27SK/UBK", count: 12, type: "Air Superiority Fighter", description: "Russian air dominance fighter with BVR missiles" },
                { name: "S-300PMU1", count: 12, type: "SAM System (batteries)", description: "Russian long-range air defense system" },
                { name: "Yak-130", count: 12, type: "Advanced Jet Trainer", description: "Russian trainer and light combat aircraft" }
            ]
        }
    },
    "Singapore": {
        name: "Singapore",
        flag: "🇸🇬",
        countryCode: "sg",
        rank: 42,
        budget: "$16.1B",
        nuclear: { status: false, warheads: 0, type: "No Program" },
        personnel: { active: 72000, reserve: 300000, paramilitary: 93000 },
        description: "Despite its tiny size, Singapore fields one of the most technologically advanced militaries in Asia with heavy defense spending per capita and cutting-edge equipment.",
        image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=400&fit=crop",
        army: {
            tanks: 212, apc: 2200, artillery: 283, mlrs: 18,
            name: "Singapore Army",
            founded: "1965",
            motto: "Training to Fight, Fighting to Win",
            strength: "50,000 active",
            equipment: [
                { name: "Leopard 2SG", count: 96, type: "Main Battle Tank", description: "Upgraded Leopard 2A4 with AMAP composite armor package" },
                { name: "Hunter AFV", count: 100, type: "Infantry Fighting Vehicle", description: "Domestically developed next-gen IFV with 30mm cannon and ATGM" },
                { name: "Bionix 25/40 IFV", count: 400, type: "Infantry Fighting Vehicle", description: "Singapore-built tracked IFV with 25mm/40mm cannon variants" },
                { name: "HIMARS", count: 18, type: "MLRS", description: "US-built High Mobility Artillery Rocket System" }
            ]
        },
        navy: {
            carriers: 0, submarines: 4, destroyers: 0, frigates: 6,
            name: "Republic of Singapore Navy",
            founded: "1967",
            motto: "Defending Our Shores",
            strength: "9,000 active",
            equipment: [
                { name: "Invincible-class Submarine", count: 4, type: "AIP Submarine", description: "Type 218SG — Germany's most advanced export submarine with AIP" },
                { name: "Formidable-class Frigate", count: 6, type: "Stealth Frigate", description: "French La Fayette-derived stealth frigate with Aster SAM" },
                { name: "Independence-class LMV", count: 8, type: "Littoral Mission Vessel", description: "Multi-role naval vessel for maritime security" },
                { name: "Endurance-class LST", count: 4, type: "Landing Ship", description: "Amphibious transport dock for sealift operations" }
            ]
        },
        airforce: {
            fighters: 98, bombers: 0, transport: 40, helicopters: 80,
            name: "Republic of Singapore Air Force",
            founded: "September 1, 1968",
            motto: "Above All",
            strength: "13,500 active",
            equipment: [
                { name: "F-15SG Strike Eagle", count: 40, type: "Air Superiority Fighter", description: "Advanced variant of F-15E with conformal fuel tanks and AESA radar" },
                { name: "F-16D+ Block 52", count: 60, type: "Multirole Fighter", description: "Two-seat variant with conformal fuel tanks and advanced avionics" },
                { name: "F-35B Lightning II", count: 12, type: "5th Gen STOVL Fighter", description: "Short takeoff/vertical landing stealth fighter (first batch delivered)" },
                { name: "G550 AEW", count: 4, type: "AEW&C", description: "Gulfstream-based airborne early warning aircraft with EL/W-2085 radar" }
            ]
        }
    },
    "UAE": {
        name: "United Arab Emirates",
        flag: "🇦🇪",
        countryCode: "ae",
        rank: 37,
        budget: "$23.5B",
        nuclear: { status: false, warheads: 0, type: "No Program" },
        personnel: { active: 63000, reserve: 0, paramilitary: 0 },
        description: "The UAE operates one of the most sophisticated and well-equipped militaries in the Middle East, with advanced Western and indigenous weapons systems and combat experience in Yemen.",
        image: "https://images.unsplash.com/photo-1546412414-e1885259563a?w=800&h=400&fit=crop",
        army: {
            tanks: 549, apc: 2600, artillery: 397, mlrs: 72,
            name: "UAE Land Forces",
            founded: "1971",
            motto: "Strength and Honor",
            strength: "44,000 active",
            equipment: [
                { name: "Leclerc MBT", count: 388, type: "Main Battle Tank", description: "French 3rd-gen MBT with autoloader, CITV, and composite armor — UAE is largest operator" },
                { name: "BMP-3", count: 700, type: "Infantry Fighting Vehicle", description: "Russian IFV with 100mm gun and ATGM" },
                { name: "Rabdan 8x8 IFV", count: 400, type: "Infantry Fighting Vehicle", description: "Domestically assembled modern IFV" },
                { name: "Jobaria MLRS", count: 72, type: "MLRS", description: "UAE-developed multi-barrel rocket launcher system" }
            ]
        },
        navy: {
            carriers: 0, submarines: 0, destroyers: 0, frigates: 4,
            name: "UAE Navy",
            founded: "1971",
            motto: "Shield of the Coast",
            strength: "6,500 active",
            equipment: [
                { name: "Gowind-class Corvette", count: 2, type: "Corvette", description: "French-built modern multi-mission corvette" },
                { name: "Abu Dhabi-class Corvette", count: 6, type: "Corvette", description: "Italian Falaj 2-class corvettes with Exocet missiles" },
                { name: "Baynunah-class Corvette", count: 6, type: "Missile Corvette", description: "French-designed indigenously built corvettes" },
                { name: "Ghannatha-class FAC", count: 12, type: "Fast Attack Craft", description: "Catamaran missile boats for coastal defense" }
            ]
        },
        airforce: {
            fighters: 164, bombers: 0, transport: 38, helicopters: 195,
            name: "UAE Air Force",
            founded: "1968",
            motto: "Strike with Precision",
            strength: "12,000 active",
            equipment: [
                { name: "F-16E/F Block 60 Desert Falcon", count: 80, type: "Multirole Fighter", description: "Most advanced F-16 variant with conformal fuel tanks and AESA radar" },
                { name: "Mirage 2000-9", count: 62, type: "Multirole Fighter", description: "Upgraded French fighter with advanced strike capability" },
                { name: "Dassault Rafale", count: 80, type: "Multirole Fighter (on order)", description: "French 4.5-gen omnirole fighter — 80 on order" },
                { name: "THAAD", count: 2, type: "Ballistic Missile Defense (batteries)", description: "US terminal high altitude area defense against ballistic missiles" }
            ]
        }
    },
    "SouthAfrica": {
        name: "South Africa",
        flag: "🇿🇦",
        countryCode: "za",
        rank: 33,
        budget: "$3.1B",
        nuclear: { status: false, warheads: 0, type: "Dismantled (had 6)" },
        personnel: { active: 73000, reserve: 15000, paramilitary: 0 },
        description: "South Africa is the most powerful military in sub-Saharan Africa. Once a nuclear weapon state, it voluntarily dismantled its arsenal. Its defense industry produces world-class armored vehicles and artillery.",
        image: "https://images.unsplash.com/photo-1484318571209-661cf29a69c3?w=800&h=400&fit=crop",
        army: {
            tanks: 195, apc: 2070, artillery: 1367, mlrs: 100,
            name: "South African Army",
            founded: "July 1, 1912",
            motto: "Ex Unitate Vires (From Unity, Strength)",
            strength: "40,100 active",
            equipment: [
                { name: "Olifant Mk2", count: 44, type: "Main Battle Tank", description: "Locally upgraded Centurion MBT with 105mm gun" },
                { name: "Ratel 20/90 IFV", count: 1300, type: "Infantry Fighting Vehicle", description: "South African mine-protected wheeled IFV" },
                { name: "Rooikat 76", count: 242, type: "Armored Car", description: "Fast 8x8 wheeled tank destroyer with 76mm gun" },
                { name: "G6 Rhino", count: 43, type: "Self-Propelled Howitzer", description: "6x6 wheeled 155mm howitzer — one of the best in the world" }
            ]
        },
        navy: {
            carriers: 0, submarines: 3, destroyers: 0, frigates: 4,
            name: "South African Navy",
            founded: "April 1, 1922",
            motto: "Ex Aequo Et Bono",
            strength: "7,500 active",
            equipment: [
                { name: "Type 209/1400 Submarine", count: 3, type: "Patrol Submarine", description: "German-built diesel-electric submarine" },
                { name: "Valour-class Frigate", count: 4, type: "Stealth Frigate", description: "German MEKO A-200 stealth frigate with Exocet and Umkhonto SAM" },
                { name: "SAS Drakensberg", count: 1, type: "Replenishment Ship", description: "Combat support ship for fleet replenishment" },
                { name: "Warrior-class OPV", count: 3, type: "Offshore Patrol Vessel", description: "Multi-role patrol vessel for maritime security" }
            ]
        },
        airforce: {
            fighters: 35, bombers: 0, transport: 89, helicopters: 77,
            name: "South African Air Force",
            founded: "February 1, 1920",
            motto: "Per Aspera Ad Astra (Through Hardship to the Stars)",
            strength: "10,300 active",
            equipment: [
                { name: "JAS-39 Gripen C/D", count: 26, type: "Multirole Fighter", description: "Swedish 4.5-gen fighter with Darter and A-Darter missiles" },
                { name: "BAE Hawk Mk120", count: 24, type: "Lead-In Fighter Trainer", description: "British jet trainer and light combat aircraft" },
                { name: "C-130BZ Hercules", count: 7, type: "Transport Aircraft", description: "Workhorse tactical transport aircraft" },
                { name: "Rooivalk CSH-2", count: 11, type: "Attack Helicopter", description: "Domestically built attack helicopter — Africa's only indigenous combat helicopter" }
            ]
        }
    },
    "Mexico": {
        name: "Mexico",
        flag: "🇲🇽",
        countryCode: "mx",
        rank: 34,
        budget: "$11.6B",
        nuclear: { status: false, warheads: 0, type: "No Program" },
        personnel: { active: 277000, reserve: 81000, paramilitary: 111000 },
        description: "Mexico's military is primarily focused on internal security, counter-narcotics, and disaster relief. It is modernizing with new naval vessels and expanding National Guard operations.",
        image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&h=400&fit=crop",
        army: {
            tanks: 0, apc: 700, artillery: 195, mlrs: 0,
            name: "Mexican Army (Ejército Mexicano)",
            founded: "1821",
            motto: "Fidelity, Patriotism, Honor",
            strength: "198,000 active",
            equipment: [
                { name: "DN-XI Caballo APC", count: 220, type: "Armored Personnel Carrier", description: "Domestically built 4x4/6x6 armored vehicle" },
                { name: "Oshkosh Sandcat", count: 250, type: "MRAP", description: "Mine-resistant vehicle for counter-narco operations" },
                { name: "AMX-VCI APC", count: 100, type: "Armored Personnel Carrier", description: "French-built tracked APC" },
                { name: "MD 530F Cayuse", count: 24, type: "Light Attack Helicopter", description: "Light helicopter armed for counter-narcotics" }
            ]
        },
        navy: {
            carriers: 0, submarines: 0, destroyers: 0, frigates: 6,
            name: "Mexican Navy (Armada de México)",
            founded: "November 23, 1821",
            motto: "Mexico, Homeland, Honor, Loyalty",
            strength: "63,000 active (incl. Marines)",
            equipment: [
                { name: "ARM Reformador Frigate", count: 4, type: "Frigate", description: "Locally built Oaxaca-class and Allende-class frigates" },
                { name: "POLA-class OPV", count: 8, type: "Offshore Patrol Vessel", description: "Domestically built 1,680-ton long-range patrol vessels" },
                { name: "Tenochtitlán-class Frigate", count: 2, type: "Guided Missile Frigate", description: "Domestically built SIGMA 10514-class frigate" },
                { name: "Damen Stan Patrol", count: 12, type: "Patrol Vessel", description: "Dutch-designed coastal patrol vessels" }
            ]
        },
        airforce: {
            fighters: 0, bombers: 0, transport: 149, helicopters: 365,
            name: "Mexican Air Force (Fuerza Aérea Mexicana)",
            founded: "February 10, 1915",
            motto: "Honor, Bravery, Loyalty",
            strength: "11,770 active",
            equipment: [
                { name: "T-6C Texan II", count: 6, type: "Trainer/Light Attack", description: "Advanced turboprop trainer for light strike missions" },
                { name: "PC-7 Pilatus", count: 60, type: "Trainer/COIN", description: "Swiss turboprop trainer for counter-narcotics" },
                { name: "C-130J Hercules", count: 4, type: "Transport Aircraft", description: "Tactical transport for logistics and disaster relief" },
                { name: "UH-60M Black Hawk", count: 20, type: "Utility Helicopter", description: "US-built utility helicopter for security operations" }
            ]
        }
    }
};

// Country coordinates for map markers
const countryCoords = {
    "USA": [39.8, -98.5],
    "Russia": [61.5, 105.3],
    "China": [35.8, 104.1],
    "India": [20.5, 78.9],
    "UK": [55.3, -3.4],
    "France": [46.2, 2.2],
    "Germany": [51.1, 10.4],
    "Japan": [36.2, 138.2],
    "SouthKorea": [35.9, 127.7],
    "Turkey": [38.9, 35.2],
    "NorthKorea": [40.3, 127.5],
    "Italy": [41.8, 12.5],
    "Poland": [51.9, 19.1],
    "Ukraine": [48.3, 31.1],
    "Spain": [40.4, -3.7],
    "Netherlands": [52.1, 5.2],
    "Sweden": [60.1, 18.6],
    "Australia": [-25.2, 133.7],
    "Israel": [31.0, 34.8],
    "Egypt": [26.8, 30.8],
    "Pakistan": [30.3, 69.3],
    "Iran": [32.4, 53.7],
    "SaudiArabia": [23.8, 45.0],
    "Brazil": [-14.2, -51.9],
    "Indonesia": [-0.8, 113.9],
    "Canada": [56.1, -106.3],
    "Taiwan": [23.7, 121.0],
    "Greece": [39.1, 21.8],
    "Vietnam": [14.0, 108.2],
    "Singapore": [1.3, 103.8],
    "UAE": [23.4, 53.8],
    "SouthAfrica": [-30.6, 22.9],
    "Mexico": [23.6, -102.5]
};

// Helper function to get flag image URL
function getFlagUrl(countryCode, size = 'w80') {
    return `https://flagcdn.com/${size}/${countryCode}.png`;
}

// Export for use
window.nationsData = nationsData;
window.countryCoords = countryCoords;
window.getFlagUrl = getFlagUrl;
