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
    icon: <Article className="item-icon" />,
  },
  '65': { itemType: 'Drawer_06', icon: <Article className="item-icon" /> },
  '66': { itemType: 'Drawer_07', icon: <Article className="item-icon" /> },
  '67': { itemType: 'Drawer_08', icon: <Article className="item-icon" /> },
  '129': {
    itemType: 'Flowerpot_10',
    icon: <LocalFlorist className="item-icon" />,
  },
  '181': {
    itemType: 'GardenToolBarrel_02',
    icon: <Delete className="item-icon" />,
  },
  '183': {
    itemType: 'GardenToolBarrel_04',
    icon: <Delete className="item-icon" />,
  },
  '185': {
    itemType: 'GardenToolBarrel_06',
    icon: <Delete className="item-icon" />,
  },
  '186': {
    itemType: 'GardenToolBarrel_07',
    icon: <Delete className="item-icon" />,
  },
  '187': {
    itemType: 'GardenToolBarrel_08',
    icon: <Delete className="item-icon" />,
  },
  '190': {
    itemType: 'GardenToolBarrel_11',
    icon: <Delete className="item-icon" />,
  },
  '542': {
    itemType: 'Toolbox_03',
    icon: <HomeRepairService className="item-icon" />,
  },
  '544': {
    itemType: 'Toolbox_05',
    icon: <HomeRepairService className="item-icon" />,
  },
  '546': {
    itemType: 'Toolbox_07',
    icon: <HomeRepairService className="item-icon" />,
  },
  '548': {
    itemType: 'Toolbox_09',
    icon: <HomeRepairService className="item-icon" />,
  },
  '574': { itemType: 'ToyCar_05', icon: <Toys className="item-icon" /> },
  '575': { itemType: 'ToyCar_06', icon: <Toys className="item-icon" /> },
  '576': { itemType: 'ToyCar_07', icon: <Toys className="item-icon" /> },
  '579': { itemType: 'ToyCar_10', icon: <Toys className="item-icon" /> },
  '607': { itemType: 'Vase_08', icon: <TakeoutDining className="item-icon" /> },
  '610': { itemType: 'Vase_11', icon: <TakeoutDining className="item-icon" /> },
  '727': {
    itemType: 'GardenBench_08',
    icon: <EventSeat className="item-icon" />,
  },
  '870': {
    itemType: 'FancyBlueChest_01',
    icon: <Inventory className="item-icon" />,
  },
  '935': { itemType: 'Tree_06', icon: <Park className="item-icon" /> },
  '1081': {
    itemType: 'Energy_02',
    icon: <ElectricBolt className="item-icon" />,
  },
  '1084': {
    itemType: 'Energy_05',
    icon: <ElectricBolt className="item-icon" />,
  },
  '1170': {
    itemType: 'BroomCabinet_01',
    icon: <Kitchen className="item-icon" />,
  },
  '1171': {
    itemType: 'BroomCabinet_02',
    icon: <Kitchen className="item-icon" />,
  },
  '1173': {
    itemType: 'BroomCabinet_04',
    icon: <Kitchen className="item-icon" />,
  },
  '1174': {
    itemType: 'BroomCabinet_05',
    icon: <Kitchen className="item-icon" />,
  },
  '1177': {
    itemType: 'BroomCabinet_08',
    icon: <Kitchen className="item-icon" />,
  },
  '1179': {
    itemType: 'BroomCabinet_10',
    icon: <Kitchen className="item-icon" />,
  },
  '1261': { itemType: 'PiggyBank_02', icon: <Savings className="item-icon" /> },
  '1320': {
    itemType: 'BrownChest_01',
    icon: <Inventory2 className="item-icon" />,
  },
  '1354': { itemType: 'PlantedBush_05', icon: <Spa className="item-icon" /> },
  '1356': { itemType: 'PlantedBush_07', icon: <Spa className="item-icon" /> },
  '1357': { itemType: 'PlantedBush_08', icon: <Spa className="item-icon" /> },
  '1358': { itemType: 'PlantedBush_09', icon: <Spa className="item-icon" /> },
  '1447': {
    itemType: 'GoldRoot_08',
    icon: <WifiChannel className="item-icon" />,
  },
  '1660': { itemType: 'Thread_11', icon: <Gesture className="item-icon" /> },
  '1800': {
    itemType: 'TimeSkipBooster_01',
    icon: <HourglassFull className="item-icon" />,
  },
  '7050': {
    itemType: 'TimeSkipBoosterSingle_01',
    icon: <HourglassBottom className="item-icon" />,
  },
  '7080': {
    itemType: 'LevelDownBoosterScissors_01',
    icon: <ContentCut className="item-icon" />,
  },
  '13998': {
    itemType: 'ConservatorySeedlingKitEmpty_01',
    icon: <EventBusy className="item-icon" />,
  },
  '14101': {
    itemType: 'Workbench_05',
    icon: <TableRestaurant className="item-icon" />,
  },
  '14103': {
    itemType: 'Workbench_07',
    icon: <TableRestaurant className="item-icon" />,
  },
  '14115': { itemType: 'Sewingkit_07', icon: <Drafts className="item-icon" /> },
  '14126': {
    itemType: 'MaintenanceTools_08',
    icon: <Handyman className="item-icon" />,
  },
  '14128': {
    itemType: 'MaintenanceTools_10',
    icon: <Handyman className="item-icon" />,
  },
  '14129': {
    itemType: 'MaintenanceTools_11',
    icon: <Handyman className="item-icon" />,
  },
  '14127': {
    itemType: 'MaintenanceTools_09',
    icon: <Handyman className="item-icon" />,
  },
  '14286': {
    itemType: 'MaintenanceMaterials_07',
    icon: <BuildCircle className="item-icon" />,
  },
  '49840131': {
    itemType: 'ProducerBoosterActivated_01',
    icon: <ControlPointDuplicate className="item-icon" />,
  },
  '82229624': {
    itemType: 'LDE_HolidayCarols2023_EntranceEnter_01',
    icon: <Fence className="item-icon" />,
  },
};

export default itemInfo;
