/* eslint-disable */
/**
 * 该文件是为了按需加载，剔除掉了一些不需要的框架组件。
 * 减少了编译支持库包大小
 *
 * 当需要更多组件依赖时，在该文件加入即可
 */
import Vue from 'vue'
import {
  Button,
  Cell,
  CellGroup,
  Icon,
  Image,
  Row,
  Col,
  Popup,
  Calendar,
  Checkbox,
  CheckboxGroup,
  DatetimePicker,
  Field,
  NumberKeyboard,
  PasswordInput,
  RadioGroup,
  Radio,
  Rate,
  Search,
  Stepper,
  Switch,
  SwitchCell,
  Uploader,
  ActionSheet,
  DropdownMenu,
  DropdownItem,
  Loading,
  Notify,
  Overlay,
  PullRefresh,
  SwipeCell,
  Toast,
  Dialog,
  Slider,
  Picker,
  Circle,
  Collapse,
  CollapseItem,
  CountDown,
  Divider,
  ImagePreview,
  Lazyload,
  List,
  NoticeBar,
  Panel,
  Progress,
  Skeleton,
  Step,
  Steps,
  Sticky,
  Swipe,
  SwipeItem,
  Tag,
  Grid,
  GridItem,
  IndexBar,
  IndexAnchor,
  NavBar,
  Pagination,
  Sidebar,
  SidebarItem,
  Tab,
  Tabs,
  Tabbar,
  TabbarItem,
  TreeSelect,
  AddressEdit,
  AddressList,
  Area,
  Card,
  ContactCard,
  ContactList,
  ContactEdit,
  CouponCell,
  CouponList,
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  SubmitBar,
  Sku,
  Form,
} from 'vant'
// import VueCropper from 'vue-cropper'
Vue.use(Form);
Vue.use(Sku);
Vue.use(SubmitBar);
Vue.use(GoodsAction)
Vue.use(GoodsActionIcon)
Vue.use(GoodsActionButton);
Vue.use(CouponCell)
Vue.use(CouponList);
Vue.use(ContactCard)
Vue.use(ContactList)
Vue.use(ContactEdit);
Vue.use(Card);
Vue.use(Area);
Vue.use(AddressList);
Vue.use(AddressEdit);
Vue.use(TreeSelect);
Vue.use(Tabbar)
Vue.use(TabbarItem);
Vue.use(Tab)
Vue.use(Tabs);
Vue.use(Sidebar);
Vue.use(SidebarItem);
Vue.use(Pagination);
Vue.use(NavBar);
Vue.use(IndexBar)
Vue.use(IndexAnchor);
Vue.use(Grid)
Vue.use(GridItem);
Vue.use(Tag);
Vue.use(Swipe)
Vue.use(SwipeItem);
Vue.use(Sticky);
Vue.use(Step)
Vue.use(Steps);
Vue.use(Skeleton);
Vue.use(Progress);
Vue.use(Panel);
Vue.use(NoticeBar);
Vue.use(List);
// options 为可选参数，无则不传,将需要懒加载的组件放在lazy-component标签中，即可实现组件懒加载。
Vue.use(Lazyload, {
  lazyComponent: true
});
Vue.use(ImagePreview);
Vue.use(Divider);
Vue.use(CountDown);
Vue.use(Collapse)
Vue.use(CollapseItem);
Vue.use(Circle);
Vue.use(Toast);
Vue.use(SwipeCell);
Vue.use(PullRefresh);
Vue.use(Overlay);
Vue.use(Notify);
Vue.use(Loading);
Vue.use(DropdownMenu)
Vue.use(DropdownItem);
Vue.use(Dialog);
Vue.use(ActionSheet);
Vue.use(Uploader);
Vue.use(SwitchCell);
Vue.use(Switch);
Vue.use(Stepper);
Vue.use(Slider);
Vue.use(Search)
Vue.use(Rate);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Picker);
Vue.use(PasswordInput)
Vue.use(NumberKeyboard);
Vue.use(NumberKeyboard);
Vue.use(Field);
Vue.use(DatetimePicker);
Vue.use(Calendar)
Vue.use(Checkbox)
Vue.use(CheckboxGroup);
Vue.use(Popup);
Vue.use(Row)
Vue.use(Col);
Vue.use(Image);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Cell)
Vue.use(CellGroup);

Vue.prototype.$toast = Toast