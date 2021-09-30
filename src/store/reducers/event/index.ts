import {EventAction, EventActionEnum, EventState} from "./types";


const initialState: EventState = {
    events: [
        {
            "id": "1",
            "name": "Наименование1",
            "count": "10",
            "distance": "1225"
        },
        {
            "id": "2",
            "name": "Наименование2",
            "count": "11",
            "distance": "1275"
        },
        {
            "id": "3",
            "name": "Наименование3",
            "count": "12",
            "distance": "1325"
        },
        {
            "id": "4",
            "name": "Наименование4",
            "count": "13",
            "distance": "1375"
        },
        {
            "id": "5",
            "name": "Наименование5",
            "count": "14",
            "distance": "1425"
        },
        {
            "id": "6",
            "name": "Наименование6",
            "count": "15",
            "distance": "1475"
        },
        {
            "id": "7",
            "name": "Наименование7",
            "count": "16",
            "distance": "1525"
        },
        {
            "id": "8",
            "name": "Наименование8",
            "count": "17",
            "distance": "1575"
        },
        {
            "id": "9",
            "name": "Наименование9",
            "count": "18",
            "distance": "1625"
        },
        {
            "id": "10",
            "name": "Наименование10",
            "count": "19",
            "distance": "1675"
        },
        {
            "id": "11",
            "name": "Наименование11",
            "count": "20",
            "distance": "1725"
        },
        {
            "id": "12",
            "name": "Наименование12",
            "count": "21",
            "distance": "1775"
        },
        {
            "id": "13",
            "name": "Наименование13",
            "count": "22",
            "distance": "1825"
        },
        {
            "id": "14",
            "name": "Наименование14",
            "count": "23",
            "distance": "1875"
        },
        {
            "id": "15",
            "name": "Наименование15",
            "count": "24",
            "distance": "1925"
        },
        {
            "id": "16",
            "name": "Наименование16",
            "count": "25",
            "distance": "1975"
        },
        {
            "id": "17",
            "name": "Наименование17",
            "count": "26",
            "distance": "2025"
        },
        {
            "id": "18",
            "name": "Наименование18",
            "count": "27",
            "distance": "2075"
        },
        {
            "id": "19",
            "name": "Наименование19",
            "count": "28",
            "distance": "2125"
        },
        {
            "id": "20",
            "name": "Наименование20",
            "count": "29",
            "distance": "2175"
        },
        {
            "id": "21",
            "name": "Наименование21",
            "count": "30",
            "distance": "2225"
        },
        {
            "id": "22",
            "name": "Наименование22",
            "count": "31",
            "distance": "2275"
        },
        {
            "id": "23",
            "name": "Наименование23",
            "count": "32",
            "distance": "2325"
        },
        {
            "id": "24",
            "name": "Наименование24",
            "count": "33",
            "distance": "2375"
        },
        {
            "id": "25",
            "name": "Наименование25",
            "count": "34",
            "distance": "2425"
        },
        {
            "id": "26",
            "name": "Наименование26",
            "count": "35",
            "distance": "2475"
        },
        {
            "id": "27",
            "name": "Наименование27",
            "count": "36",
            "distance": "2525"
        },
        {
            "id": "28",
            "name": "Наименование28",
            "count": "37",
            "distance": "2575"
        },
        {
            "id": "29",
            "name": "Наименование29",
            "count": "38",
            "distance": "2625"
        },
        {
            "id": "30",
            "name": "Наименование30",
            "count": "39",
            "distance": "2675"
        },
        {
            "id": "31",
            "name": "Наименование31",
            "count": "40",
            "distance": "2725"
        },
        {
            "id": "32",
            "name": "Наименование32",
            "count": "41",
            "distance": "2775"
        },
        {
            "id": "33",
            "name": "Наименование33",
            "count": "42",
            "distance": "2825"
        },
        {
            "id": "34",
            "name": "Наименование34",
            "count": "43",
            "distance": "2875"
        },
        {
            "id": "35",
            "name": "Наименование35",
            "count": "44",
            "distance": "2925"
        },
        {
            "id": "36",
            "name": "Наименование36",
            "count": "45",
            "distance": "2975"
        },
        {
            "id": "37",
            "name": "Наименование37",
            "count": "46",
            "distance": "3025"
        },
        {
            "id": "38",
            "name": "Наименование38",
            "count": "47",
            "distance": "3075"
        },
        {
            "id": "39",
            "name": "Наименование39",
            "count": "48",
            "distance": "3125"
        },
        {
            "id": "40",
            "name": "Наименование40",
            "count": "49",
            "distance": "3175"
        },
        {
            "id": "41",
            "name": "Наименование41",
            "count": "50",
            "distance": "3225"
        },
        {
            "id": "42",
            "name": "Наименование42",
            "count": "51",
            "distance": "3275"
        },
        {
            "id": "43",
            "name": "Наименование43",
            "count": "52",
            "distance": "3325"
        },
        {
            "id": "44",
            "name": "Наименование44",
            "count": "53",
            "distance": "3375"
        },
        {
            "id": "45",
            "name": "Наименование45",
            "count": "54",
            "distance": "3425"
        },
        {
            "id": "46",
            "name": "Наименование46",
            "count": "55",
            "distance": "3475"
        },
        {
            "id": "47",
            "name": "Наименование47",
            "count": "56",
            "distance": "3525"
        },
        {
            "id": "48",
            "name": "Наименование48",
            "count": "57",
            "distance": "3575"
        },
        {
            "id": "49",
            "name": "Наименование49",
            "count": "58",
            "distance": "3625"
        },
        {
            "id": "50",
            "name": "Наименование50",
            "count": "59",
            "distance": "3675"
        },
        {
            "id": "51",
            "name": "Наименование51",
            "count": "60",
            "distance": "3725"
        },
        {
            "id": "52",
            "name": "Наименование52",
            "count": "61",
            "distance": "3775"
        },
        {
            "id": "53",
            "name": "Наименование53",
            "count": "62",
            "distance": "3825"
        },
        {
            "id": "54",
            "name": "Наименование54",
            "count": "63",
            "distance": "3875"
        },
        {
            "id": "55",
            "name": "Наименование55",
            "count": "64",
            "distance": "3925"
        },
        {
            "id": "56",
            "name": "Наименование56",
            "count": "65",
            "distance": "3975"
        },
        {
            "id": "57",
            "name": "Наименование57",
            "count": "66",
            "distance": "4025"
        },
        {
            "id": "58",
            "name": "Наименование58",
            "count": "67",
            "distance": "4075"
        },
        {
            "id": "59",
            "name": "Наименование59",
            "count": "68",
            "distance": "4125"
        },
        {
            "id": "60",
            "name": "Наименование60",
            "count": "69",
            "distance": "4175"
        },
        {
            "id": "61",
            "name": "Наименование61",
            "count": "70",
            "distance": "4225"
        },
        {
            "id": "62",
            "name": "Наименование62",
            "count": "71",
            "distance": "4275"
        },
        {
            "id": "63",
            "name": "Наименование63",
            "count": "72",
            "distance": "4325"
        },
        {
            "id": "64",
            "name": "Наименование64",
            "count": "73",
            "distance": "4375"
        },
        {
            "id": "65",
            "name": "Наименование65",
            "count": "74",
            "distance": "4425"
        },
        {
            "id": "66",
            "name": "Наименование66",
            "count": "75",
            "distance": "4475"
        },
        {
            "id": "67",
            "name": "Наименование67",
            "count": "76",
            "distance": "4525"
        },
        {
            "id": "68",
            "name": "Наименование68",
            "count": "77",
            "distance": "4575"
        },
        {
            "id": "69",
            "name": "Наименование69",
            "count": "78",
            "distance": "4625"
        },
        {
            "id": "70",
            "name": "Наименование70",
            "count": "79",
            "distance": "4675"
        },
        {
            "id": "71",
            "name": "Наименование71",
            "count": "80",
            "distance": "4725"
        },
        {
            "id": "72",
            "name": "Наименование72",
            "count": "81",
            "distance": "4775"
        },
        {
            "id": "73",
            "name": "Наименование73",
            "count": "82",
            "distance": "4825"
        },
        {
            "id": "74",
            "name": "Наименование74",
            "count": "83",
            "distance": "4875"
        },
        {
            "id": "75",
            "name": "Наименование75",
            "count": "84",
            "distance": "4925"
        },
        {
            "id": "76",
            "name": "Наименование76",
            "count": "85",
            "distance": "4975"
        },
        {
            "id": "77",
            "name": "Наименование77",
            "count": "86",
            "distance": "5025"
        },
        {
            "id": "78",
            "name": "Наименование78",
            "count": "87",
            "distance": "5075"
        },
        {
            "id": "79",
            "name": "Наименование79",
            "count": "88",
            "distance": "5125"
        },
        {
            "id": "80",
            "name": "Наименование80",
            "count": "89",
            "distance": "5175"
        },
        {
            "id": "81",
            "name": "Наименование81",
            "count": "90",
            "distance": "5225"
        },
        {
            "id": "82",
            "name": "Наименование82",
            "count": "91",
            "distance": "5275"
        },
        {
            "id": "83",
            "name": "Наименование83",
            "count": "92",
            "distance": "5325"
        },
        {
            "id": "84",
            "name": "Наименование84",
            "count": "93",
            "distance": "5375"
        },
        {
            "id": "85",
            "name": "Наименование85",
            "count": "94",
            "distance": "5425"
        },
        {
            "id": "86",
            "name": "Наименование86",
            "count": "95",
            "distance": "5475"
        },
        {
            "id": "87",
            "name": "Наименование87",
            "count": "96",
            "distance": "5525"
        },
        {
            "id": "88",
            "name": "Наименование88",
            "count": "97",
            "distance": "5575"
        },
        {
            "id": "89",
            "name": "Наименование89",
            "count": "98",
            "distance": "5625"
        },
        {
            "id": "90",
            "name": "Наименование90",
            "count": "99",
            "distance": "5675"
        },
        {
            "id": "91",
            "name": "Наименование91",
            "count": "100",
            "distance": "5725"
        },
        {
            "id": "92",
            "name": "Наименование92",
            "count": "101",
            "distance": "5775"
        },
        {
            "id": "93",
            "name": "Наименование93",
            "count": "102",
            "distance": "5825"
        },
        {
            "id": "94",
            "name": "Наименование94",
            "count": "103",
            "distance": "5875"
        },
        {
            "id": "95",
            "name": "Наименование95",
            "count": "104",
            "distance": "5925"
        },
        {
            "id": "96",
            "name": "Наименование96",
            "count": "105",
            "distance": "5975"
        },
        {
            "id": "97",
            "name": "Наименование97",
            "count": "106",
            "distance": "6025"
        },
        {
            "id": "98",
            "name": "Наименование98",
            "count": "107",
            "distance": "6075"
        },
        {
            "id": "99",
            "name": "Наименование99",
            "count": "108",
            "distance": "6125"
        },
        {
            "id": "100",
            "name": "Наименование100",
            "count": "109",
            "distance": "6175"
        },
        {
            "id": "101",
            "name": "Наименование101",
            "count": "110",
            "distance": "6225"
        },
        {
            "id": "102",
            "name": "Наименование102",
            "count": "111",
            "distance": "6275"
        },
        {
            "id": "103",
            "name": "Наименование103",
            "count": "112",
            "distance": "6325"
        },
        {
            "id": "104",
            "name": "Наименование104",
            "count": "113",
            "distance": "6375"
        },
        {
            "id": "105",
            "name": "Наименование105",
            "count": "114",
            "distance": "6425"
        },
        {
            "id": "106",
            "name": "Наименование106",
            "count": "115",
            "distance": "6475"
        },
        {
            "id": "107",
            "name": "Наименование107",
            "count": "116",
            "distance": "6525"
        },
        {
            "id": "108",
            "name": "Наименование108",
            "count": "117",
            "distance": "6575"
        },
        {
            "id": "109",
            "name": "Наименование109",
            "count": "118",
            "distance": "6625"
        },
        {
            "id": "110",
            "name": "Наименование110",
            "count": "119",
            "distance": "6675"
        },
        {
            "id": "111",
            "name": "Наименование111",
            "count": "120",
            "distance": "6725"
        },
        {
            "id": "112",
            "name": "Наименование112",
            "count": "121",
            "distance": "6775"
        },
        {
            "id": "113",
            "name": "Наименование113",
            "count": "122",
            "distance": "6825"
        },
        {
            "id": "114",
            "name": "Наименование114",
            "count": "123",
            "distance": "6875"
        },
        {
            "id": "115",
            "name": "Наименование115",
            "count": "124",
            "distance": "6925"
        },
        {
            "id": "116",
            "name": "Наименование116",
            "count": "125",
            "distance": "6975"
        },
        {
            "id": "117",
            "name": "Наименование117",
            "count": "126",
            "distance": "7025"
        },
        {
            "id": "118",
            "name": "Наименование118",
            "count": "127",
            "distance": "7075"
        },
        {
            "id": "119",
            "name": "Наименование119",
            "count": "128",
            "distance": "7125"
        }
    ],
    typeFilter: '',
    conditionFilter: '',
    textFilter: ''
}

export default function EventReducer(state = initialState, action: EventAction): EventState {
    switch (action.type) {
        case EventActionEnum.SET_EVENTS:
            return {...state, events: action.payload}
        case EventActionEnum.SET_TYPE:
            return {...state, typeFilter: action.payload}
        case EventActionEnum.SET_TEXT:
            return {...state, textFilter: action.payload}
        case EventActionEnum.SET_CONDITION:
            return {...state, conditionFilter: action.payload}
        default:
            return state;
    }
}