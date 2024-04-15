// Ideally this data would be from some API.
// Constructed manually this time...
// See also generators/generateItemsObject.tsx

import {
  Article,
  BuildCircle,
  ContentCut,
  ControlPointDuplicate,
  Delete,
  DoorSliding,
  Drafts,
  ElectricBolt,
  EventBusy,
  EventSeat,
  Gesture,
  Handyman,
  HomeRepairService,
  HourglassBottom,
  HourglassFull,
  Inventory,
  Inventory2,
  Kitchen,
  LocalFlorist,
  Park,
  Savings,
  Spa,
  TableRestaurant,
  TakeoutDining,
  Toys,
  WifiChannel,
} from '@mui/icons-material';
import { type itemInfo, type colors } from '../types/itemInfo.type';

// https://www.computerhope.com/htmcolor.htm#color-codes
const colors: colors = {
  drawer: '#931314', // Saffron Red
  flower: '#056608', // Deep Green
  barrel: '#7C9D8E', // Metallic Green
  toolbox: '#52595D', // Iron Gray
  car: '#FF6700', // Neon Orange
  vase: '#5CB3FF', // Crystal Blue
  bench: '#5C3317', // Bakers Brown
  blueChest: '#0909FF', // Bright Blue
  tree: '#3A5F0B', // Green Leaves
  energy: '#FFFF33', // Neon Yellow
  cabinet: '#DBF9DB', // Light Rose Green
  bank: '#FFFFCC', // Cream
  brownChest: '#966F33', // Wood
  bush: '#08A04B', // Irish Green
  goldRoot: '#FDD017', // Bright Gold
  thread: '#F778A1', // Carnation Pink
  timeSkip: '#7D0552', // Plum Velvet
  scissors: '#EDE275', // Harvest Gold
  empty: '#C83F49', // Strawberry Red
  workbench: '#3A3B3C', // Stormy Gray
  sewingkit: '#0C090A', // Night
  tools: '#A8A9AD', // Chrome Aluminum
  materials: '#98AFC7', // Blue Gray
  producerBooster: '#00A36C', //Jade
  holiday: '#FD1C03', // Neon Red
};

const itemInfo: itemInfo = {
  '62': {
    itemType: 'Drawer_03',
    icon: <Article sx={{ color: colors.drawer }} />,
  },
  '65': {
    itemType: 'Drawer_06',
    icon: <Article sx={{ color: colors.drawer }} />,
  },
  '66': {
    itemType: 'Drawer_07',
    icon: <Article sx={{ color: colors.drawer }} />,
  },
  '67': {
    itemType: 'Drawer_08',
    icon: <Article sx={{ color: colors.drawer }} />,
  },
  '129': {
    itemType: 'Flowerpot_10',
    icon: <LocalFlorist sx={{ color: colors.flower }} />,
  },
  '181': {
    itemType: 'GardenToolBarrel_02',
    icon: <Delete sx={{ color: colors.barrel }} />,
  },
  '183': {
    itemType: 'GardenToolBarrel_04',
    icon: <Delete sx={{ color: colors.barrel }} />,
  },
  '185': {
    itemType: 'GardenToolBarrel_06',
    icon: <Delete sx={{ color: colors.barrel }} />,
  },
  '186': {
    itemType: 'GardenToolBarrel_07',
    icon: <Delete sx={{ color: colors.barrel }} />,
  },
  '187': {
    itemType: 'GardenToolBarrel_08',
    icon: <Delete sx={{ color: colors.barrel }} />,
  },
  '190': {
    itemType: 'GardenToolBarrel_11',
    icon: <Delete sx={{ color: colors.barrel }} />,
  },
  '542': {
    itemType: 'Toolbox_03',
    icon: <HomeRepairService sx={{ color: colors.toolbox }} />,
  },
  '544': {
    itemType: 'Toolbox_05',
    icon: <HomeRepairService sx={{ color: colors.toolbox }} />,
  },
  '546': {
    itemType: 'Toolbox_07',
    icon: <HomeRepairService sx={{ color: colors.toolbox }} />,
  },
  '548': {
    itemType: 'Toolbox_09',
    icon: <HomeRepairService sx={{ color: colors.toolbox }} />,
  },
  '574': { itemType: 'ToyCar_05', icon: <Toys sx={{ color: colors.car }} /> },
  '575': { itemType: 'ToyCar_06', icon: <Toys sx={{ color: colors.car }} /> },
  '576': { itemType: 'ToyCar_07', icon: <Toys sx={{ color: colors.car }} /> },
  '579': { itemType: 'ToyCar_10', icon: <Toys sx={{ color: colors.car }} /> },
  '607': {
    itemType: 'Vase_08',
    icon: <TakeoutDining sx={{ color: colors.vase }} />,
  },
  '610': {
    itemType: 'Vase_11',
    icon: <TakeoutDining sx={{ color: colors.vase }} />,
  },
  '727': {
    itemType: 'GardenBench_08',
    icon: <EventSeat sx={{ color: colors.bench }} />,
  },
  '870': {
    itemType: 'FancyBlueChest_01',
    icon: <Inventory sx={{ color: colors.blueChest }} />,
  },
  '935': { itemType: 'Tree_06', icon: <Park sx={{ color: colors.tree }} /> },
  '1081': {
    itemType: 'Energy_02',
    icon: <ElectricBolt sx={{ color: colors.energy }} />,
  },
  '1084': {
    itemType: 'Energy_05',
    icon: <ElectricBolt sx={{ color: colors.energy }} />,
  },
  '1170': {
    itemType: 'BroomCabinet_01',
    icon: <Kitchen sx={{ color: colors.cabinet }} />,
  },
  '1171': {
    itemType: 'BroomCabinet_02',
    icon: <Kitchen sx={{ color: colors.cabinet }} />,
  },
  '1173': {
    itemType: 'BroomCabinet_04',
    icon: <Kitchen sx={{ color: colors.cabinet }} />,
  },
  '1174': {
    itemType: 'BroomCabinet_05',
    icon: <Kitchen sx={{ color: colors.cabinet }} />,
  },
  '1177': {
    itemType: 'BroomCabinet_08',
    icon: <Kitchen sx={{ color: colors.cabinet }} />,
  },
  '1179': {
    itemType: 'BroomCabinet_10',
    icon: <Kitchen sx={{ color: colors.cabinet }} />,
  },
  '1261': {
    itemType: 'PiggyBank_02',
    icon: <Savings sx={{ color: colors.bank }} />,
  },
  '1320': {
    itemType: 'BrownChest_01',
    icon: <Inventory2 sx={{ color: colors.brownChest }} />,
  },
  '1354': {
    itemType: 'PlantedBush_05',
    icon: <Spa sx={{ color: colors.bush }} />,
  },
  '1356': {
    itemType: 'PlantedBush_07',
    icon: <Spa sx={{ color: colors.bush }} />,
  },
  '1357': {
    itemType: 'PlantedBush_08',
    icon: <Spa sx={{ color: colors.bush }} />,
  },
  '1358': {
    itemType: 'PlantedBush_09',
    icon: <Spa sx={{ color: colors.bush }} />,
  },
  '1447': {
    itemType: 'GoldRoot_08',
    icon: <WifiChannel sx={{ color: colors.goldRoot }} />,
  },
  '1660': {
    itemType: 'Thread_11',
    icon: <Gesture sx={{ color: colors.thread }} />,
  },
  '1800': {
    itemType: 'TimeSkipBooster_01',
    icon: <HourglassFull sx={{ color: colors.timeSkip }} />,
  },
  '7050': {
    itemType: 'TimeSkipBoosterSingle_01',
    icon: <HourglassBottom sx={{ color: colors.timeSkip }} />,
  },
  '7080': {
    itemType: 'LevelDownBoosterScissors_01',
    icon: <ContentCut sx={{ color: colors.scissors }} />,
  },
  '13998': {
    itemType: 'ConservatorySeedlingKitEmpty_01',
    icon: <EventBusy sx={{ color: colors.empty }} />,
  },
  '14101': {
    itemType: 'Workbench_05',
    icon: <TableRestaurant sx={{ color: colors.workbench }} />,
  },
  '14103': {
    itemType: 'Workbench_07',
    icon: <TableRestaurant sx={{ color: colors.workbench }} />,
  },
  '14115': {
    itemType: 'Sewingkit_07',
    icon: <Drafts sx={{ color: colors.sewingkit }} />,
  },
  '14126': {
    itemType: 'MaintenanceTools_08',
    icon: <Handyman sx={{ color: colors.tools }} />,
  },
  '14128': {
    itemType: 'MaintenanceTools_10',
    icon: <Handyman sx={{ color: colors.tools }} />,
  },
  '14129': {
    itemType: 'MaintenanceTools_11',
    icon: <Handyman sx={{ color: colors.tools }} />,
  },
  '14127': {
    itemType: 'MaintenanceTools_09',
    icon: <Handyman sx={{ color: colors.tools }} />,
  },
  '14286': {
    itemType: 'MaintenanceMaterials_07',
    icon: <BuildCircle sx={{ color: colors.materials }} />,
  },
  '49840131': {
    itemType: 'ProducerBoosterActivated_01',
    icon: <ControlPointDuplicate sx={{ color: colors.producerBooster }} />,
  },
  '82229624': {
    itemType: 'LDE_HolidayCarols2023_EntranceEnter_01',
    icon: <DoorSliding sx={{ color: colors.holiday }} />,
  },
};

export default itemInfo;

export const itemLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const itemTypes = [
  'BroomCabinet',
  'Vase',
  'PlantedBush',
  'LevelDownBoosterScissors',
  'ConservatorySeedlingKitEmpty',
  'Toolbox',
  'MaintenanceTools',
  'MaintenanceMaterials',
  'Drawer',
  'FancyBlueChest',
  'Thread',
  'Energy',
  'LDE',
  'PiggyBank',
  'Workbench',
  'Sewingkit',
  'ProducerBoosterActivated',
  'TimeSkipBooster',
  'GardenToolBarrel',
  'GardenBench',
  'TimeSkipBoosterSingle',
  'ToyCar',
  'BrownChest',
  'GoldRoot',
  'Flowerpot',
  'Tree',
];

export const chainIds = [
  'BroomCabinet',
  'Vase',
  'PlantedBush',
  'LevelDownBoosterScissors',
  'ConservatorySeedlingKitEmpty',
  'Toolbox',
  'MaintenanceTools',
  'MaintenanceMaterials',
  'Drawer',
  'FancyBlueChest',
  'Thread',
  'Energy',
  'LDE_HolidayCarols2023_EntranceEnter',
  'PiggyBank',
  'Workbench',
  'Sewingkit',
  'ProducerBooster',
  'TimeSkipBooster',
  'GardenToolBarrel',
  'GardenBench',
  'TimeSkipBoosterSingle',
  'ToyCar',
  'BrownChest',
  'GoldRoot',
  'Flowerpot',
  'Tree',
];
