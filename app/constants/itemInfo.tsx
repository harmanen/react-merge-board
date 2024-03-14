import {
  Article,
  BuildCircle,
  ContentCut,
  ControlPointDuplicate,
  Delete,
  Drafts,
  ElectricBolt,
  EventBusy,
  EventSeat,
  Fence,
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

interface item {
  itemType: string;
  icon: JSX.Element | null;
}

interface itemInfo {
  [key: string]: item;
}

const itemInfo: itemInfo = {
  '62': {
    itemType: 'Drawer_03',
    icon: <Article />,
  },
  '65': { itemType: 'Drawer_06', icon: <Article /> },
  '66': { itemType: 'Drawer_07', icon: <Article /> },
  '67': { itemType: 'Drawer_08', icon: <Article /> },
  '129': {
    itemType: 'Flowerpot_10',
    icon: <LocalFlorist />,
  },
  '181': {
    itemType: 'GardenToolBarrel_02',
    icon: <Delete />,
  },
  '183': {
    itemType: 'GardenToolBarrel_04',
    icon: <Delete />,
  },
  '185': {
    itemType: 'GardenToolBarrel_06',
    icon: <Delete />,
  },
  '186': {
    itemType: 'GardenToolBarrel_07',
    icon: <Delete />,
  },
  '187': {
    itemType: 'GardenToolBarrel_08',
    icon: <Delete />,
  },
  '190': {
    itemType: 'GardenToolBarrel_11',
    icon: <Delete />,
  },
  '542': {
    itemType: 'Toolbox_03',
    icon: <HomeRepairService />,
  },
  '544': {
    itemType: 'Toolbox_05',
    icon: <HomeRepairService />,
  },
  '546': {
    itemType: 'Toolbox_07',
    icon: <HomeRepairService />,
  },
  '548': {
    itemType: 'Toolbox_09',
    icon: <HomeRepairService />,
  },
  '574': { itemType: 'ToyCar_05', icon: <Toys /> },
  '575': { itemType: 'ToyCar_06', icon: <Toys /> },
  '576': { itemType: 'ToyCar_07', icon: <Toys /> },
  '579': { itemType: 'ToyCar_10', icon: <Toys /> },
  '607': { itemType: 'Vase_08', icon: <TakeoutDining /> },
  '610': { itemType: 'Vase_11', icon: <TakeoutDining /> },
  '727': {
    itemType: 'GardenBench_08',
    icon: <EventSeat />,
  },
  '870': {
    itemType: 'FancyBlueChest_01',
    icon: <Inventory />,
  },
  '935': { itemType: 'Tree_06', icon: <Park /> },
  '1081': {
    itemType: 'Energy_02',
    icon: <ElectricBolt />,
  },
  '1084': {
    itemType: 'Energy_05',
    icon: <ElectricBolt />,
  },
  '1170': {
    itemType: 'BroomCabinet_01',
    icon: <Kitchen />,
  },
  '1171': {
    itemType: 'BroomCabinet_02',
    icon: <Kitchen />,
  },
  '1173': {
    itemType: 'BroomCabinet_04',
    icon: <Kitchen />,
  },
  '1174': {
    itemType: 'BroomCabinet_05',
    icon: <Kitchen />,
  },
  '1177': {
    itemType: 'BroomCabinet_08',
    icon: <Kitchen />,
  },
  '1179': {
    itemType: 'BroomCabinet_10',
    icon: <Kitchen />,
  },
  '1261': { itemType: 'PiggyBank_02', icon: <Savings /> },
  '1320': {
    itemType: 'BrownChest_01',
    icon: <Inventory2 />,
  },
  '1354': { itemType: 'PlantedBush_05', icon: <Spa /> },
  '1356': { itemType: 'PlantedBush_07', icon: <Spa /> },
  '1357': { itemType: 'PlantedBush_08', icon: <Spa /> },
  '1358': { itemType: 'PlantedBush_09', icon: <Spa /> },
  '1447': {
    itemType: 'GoldRoot_08',
    icon: <WifiChannel />,
  },
  '1660': { itemType: 'Thread_11', icon: <Gesture /> },
  '1800': {
    itemType: 'TimeSkipBooster_01',
    icon: <HourglassFull />,
  },
  '7050': {
    itemType: 'TimeSkipBoosterSingle_01',
    icon: <HourglassBottom />,
  },
  '7080': {
    itemType: 'LevelDownBoosterScissors_01',
    icon: <ContentCut />,
  },
  '13998': {
    itemType: 'ConservatorySeedlingKitEmpty_01',
    icon: <EventBusy />,
  },
  '14101': {
    itemType: 'Workbench_05',
    icon: <TableRestaurant />,
  },
  '14103': {
    itemType: 'Workbench_07',
    icon: <TableRestaurant />,
  },
  '14115': { itemType: 'Sewingkit_07', icon: <Drafts /> },
  '14126': {
    itemType: 'MaintenanceTools_08',
    icon: <Handyman />,
  },
  '14128': {
    itemType: 'MaintenanceTools_10',
    icon: <Handyman />,
  },
  '14129': {
    itemType: 'MaintenanceTools_11',
    icon: <Handyman />,
  },
  '14127': {
    itemType: 'MaintenanceTools_09',
    icon: <Handyman />,
  },
  '14286': {
    itemType: 'MaintenanceMaterials_07',
    icon: <BuildCircle />,
  },
  '49840131': {
    itemType: 'ProducerBoosterActivated_01',
    icon: <ControlPointDuplicate />,
  },
  '82229624': {
    itemType: 'LDE_HolidayCarols2023_EntranceEnter_01',
    icon: <Fence />,
  },
};

export default itemInfo;
