<template>
  <div :class="{'has-logo':showLogo}">
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in menuArr" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.scss'

export default {
  data () {
    return {
        menuArr: [
        {
          id: "bd71f4c90ff44a15b6fb249761e5099d",
          pid: "0",
          type: "99",
          name: "首页",
          path: "/",
          icon: null,
          page: "false",
          sort: 1,
          children: []
        },
        {
          id: "266ea773105d4e0f8ef588cba81e26ca",
          pid: "0",
          type: "99",
          name: "信息查询",
          path: "/informationService",
          icon: null,
          page: "false",
          sort: 2,
          children: [
            {
              id: "e5c5a29a2f8b44dda15f003c30e484e8",
              pid: "266ea773105d4e0f8ef588cba81e26ca",
              type: "2",
              name: "轨迹定位查询",
              path: null,
              icon: null,
              page: "false",
              sort: 0,
              children: [
                {
                  id: "a4059543a842496fa53274bea83558a5",
                  pid: "e5c5a29a2f8b44dda15f003c30e484e8",
                  type: "1",
                  name: "巡游车",
                  path: null,
                  icon: null,
                  page: "false",
                  sort: 0,
                  children: [
                    {
                      id: "316eb8e93ea142e09db5c2073e4bc95b",
                      pid: "a4059543a842496fa53274bea83558a5",
                      type: "99",
                      name: "巡游车轨迹查询",
                      path: "/informationService/cruiserTour",
                      icon: null,
                      page: "false",
                      sort: 0,
                      children: []
                    },
                    {
                      id: "677c27a61ac94a6d9bfcd7930ad033fd",
                      pid: "a4059543a842496fa53274bea83558a5",
                      type: "99",
                      name: "巡游车定位查询",
                      path: "/informationService/cruiserPositioning",
                      icon: null,
                      page: "false",
                      sort: 0,
                      children: []
                    },
                    {
                      id: "c0cf9a6f295c4bf1998ccaa078a9d778",
                      pid: "a4059543a842496fa53274bea83558a5",
                      type: "99",
                      name: "巡游车模糊查询",
                      path: "/informationService/cruiserBlur",
                      icon: null,
                      page: "false",
                      sort: 0,
                      children: []
                    },
                    {
                      id: "c978283673a6402e945c1a32ce12a050",
                      pid: "a4059543a842496fa53274bea83558a5",
                      type: "99",
                      name: "可疑车辆分布",
                      path: "/informationService/suspiciousDistribution",
                      icon: null,
                      page: "false",
                      sort: 0,
                      children: []
                    }
                  ]
                },
                {
                  id: "211eceeab07941ed88763a88936848ab",
                  pid: "e5c5a29a2f8b44dda15f003c30e484e8",
                  type: "1",
                  name: "网约车",
                  path: null,
                  icon: null,
                  page: "false",
                  sort: 0,
                  children: [
                    {
                      id: "2fdf70b11143433e8a62fae08bf753c1",
                      pid: "211eceeab07941ed88763a88936848ab",
                      type: "99",
                      name: "网约车轨迹查询",
                      path: "/informationService/trackNetwork",
                      icon: null,
                      page: "false",
                      sort: 0,
                      children: []
                    },
                    {
                      id: "55b762f940e349079b324bb98c3af8e5",
                      pid: "211eceeab07941ed88763a88936848ab",
                      type: "99",
                      name: "网约车定位查询",
                      path: "/informationService/positioningNetwork",
                      icon: null,
                      page: "false",
                      sort: 0,
                      children: []
                    }
                  ]
                },
                {
                  id: "b7a9f2d6adff478b8b215379fb0cf872",
                  pid: "e5c5a29a2f8b44dda15f003c30e484e8",
                  type: "1",
                  name: "旅游客运",
                  path: null,
                  icon: null,
                  page: "false",
                  sort: 0,
                  children: [
                    {
                      id: "bfe1a53c2c0049d883a49f437af638ba",
                      pid: "b7a9f2d6adff478b8b215379fb0cf872",
                      type: "99",
                      name: "旅游车定位查询",
                      path: "/informationService/positioningTourist",
                      icon: null,
                      page: "false",
                      sort: 0,
                      children: []
                    },
                    {
                      id: "6e59a26198cf453489c0f7c550988460",
                      pid: "b7a9f2d6adff478b8b215379fb0cf872",
                      type: "99",
                      name: "旅游车轨迹查询",
                      path: "/informationService/trackTour",
                      icon: null,
                      page: "false",
                      sort: 0,
                      children: []
                    },
                    {
                      id: "3e1689ba6e084a75a852df51fd795774",
                      pid: "b7a9f2d6adff478b8b215379fb0cf872",
                      type: "99",
                      name: "可疑车辆分布",
                      path: "/informationService/suspiciousVehicle",
                      icon: null,
                      page: "false",
                      sort: 0,
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              id: "97fcc3b713bb4cb091584cf00a7e42fa",
              pid: "266ea773105d4e0f8ef588cba81e26ca",
              type: "0",
              name: "临时停车场信息",
              path: "/informationService/parkingTemporary",
              icon: null,
              page: "false",
              sort: 0,
              children: []
            },
            {
              id: "97fcc3b713bb4cb091584cf00a7e42fa",
              pid: "266ea773105d4e0f8ef588cba81e26ca",
              type: "0",
              name: "旅游车停车场围栏",
              path: "/informationService/parkingbusTour",
              icon: null,
              page: "false",
              sort: 0,
              children: []
            },
            {
              id: "bf71d56ede59482ebd74fd19e5bb3753",
              pid: "266ea773105d4e0f8ef588cba81e26ca",
              type: "2",
              name: "基础信息",
              path: null,
              icon: null,
              page: "false",
              sort: 0,
              children: [
                {
                  id: "14b356600bc04072a7d41e0425cfb66b",
                  pid: "bf71d56ede59482ebd74fd19e5bb3753",
                  type: "1",
                  name: "旅游客运",
                  path: null,
                  icon: null,
                  page: "false",
                  sort: 0,
                  children: [
                    {
                      id: "363a3c8a659a4d9f84d1bfab1ee27f2a",
                      pid: "14b356600bc04072a7d41e0425cfb66b",
                      type: "99",
                      name: "车辆信息",
                      path: "/informationService/informationVehicle",
                      icon: null,
                      page: "false",
                      sort: 0,
                      children: []
                    },
                    {
                      id: "78f13934cdb541e2bc46d1821e84825c",
                      pid: "14b356600bc04072a7d41e0425cfb66b",
                      type: "99",
                      name: "司机信息",
                      path: "/informationService/informationDriver",
                      icon: null,
                      page: "false",
                      sort: 0,
                      children: []
                    },
                    {
                      id: "7c063543520f474a82dbacb6f5f66d6c",
                      pid: "14b356600bc04072a7d41e0425cfb66b",
                      type: "99",
                      name: "导游信息",
                      path: "/informationService/informationGuide",
                      icon: null,
                      page: "false",
                      sort: 0,
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              id: "e51d4fa2aacf40b391eca8ebfcf2bd0a",
              pid: "266ea773105d4e0f8ef588cba81e26ca",
              type: "1",
              name: "运单信息",
              path: null,
              icon: null,
              page: "false",
              sort: 0,
              children: [
                {
                  id: "f7834a8ec69847238677ef0863c8f188",
                  pid: "e51d4fa2aacf40b391eca8ebfcf2bd0a",
                  type: "99",
                  name: "包车电子行程单",
                  path: "/informationService/charterCar",
                  icon: null,
                  page: "false",
                  sort: 0,
                  children: []
                },
                {
                  id: "ceda4e55afa6414ab0b3492113af5fcd",
                  pid: "e51d4fa2aacf40b391eca8ebfcf2bd0a",
                  type: "99",
                  name: "旅游车电子行程单",
                  path: "/informationService/itineraryCar",
                  icon: null,
                  page: "false",
                  sort: 0,
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: "597e27719b724b8299b41168b110ef2d",
          pid: "0",
          type: "99",
          name: "可疑管理",
          path: "/managementSuspicious",
          icon: null,
          page: "false",
          sort: 3,
          children: [
            {
              id: "0ef5b2a5ae0a4c02bd7c14b0281c752d",
              pid: "597e27719b724b8299b41168b110ef2d",
              type: "2",
              name: "可疑时段",
              path: null,
              icon: null,
              page: "false",
              sort: 0,
              children: [
                {
                  id: "666b10dc79dd4ba0a7417918d7cfc7f4",
                  pid: "0ef5b2a5ae0a4c02bd7c14b0281c752d",
                  type: "0",
                  name: "可疑时段",
                  path: "/managementSuspicious/periodSuspicious",
                  icon: null,
                  page: "true",
                  sort: 0,
                  children: []
                }
              ]
            },
            {
              id: "18b9f2ea6a914471842be7e493fe9764",
              pid: "597e27719b724b8299b41168b110ef2d",
              type: "2",
              name: "可疑行业",
              path: null,
              icon: null,
              page: "false",
              sort: 0,
              children: [
                {
                  id: "8ca81f234a834814a4b48159ba41e908",
                  pid: "18b9f2ea6a914471842be7e493fe9764",
                  type: "1",
                  name: "巡游车",
                  path: null,
                  icon: null,
                  page: "false",
                  sort: 0,
                  children: [
                    {
                      id: "bbf9e94c81424ac88bbe7f186de9c9d8",
                      pid: "8ca81f234a834814a4b48159ba41e908",
                      type: "0",
                      name: "出库管理",
                      path: "/managementSuspicious/managementOutbound",
                      icon: null,
                      page: "true",
                      sort: 0,
                      children: []
                    },
                    {
                      id: "aea015192679417dade18e50588ca678",
                      pid: "8ca81f234a834814a4b48159ba41e908",
                      type: "0",
                      name: "入库管理",
                      path: "/managementSuspicious/managementWarehousing",
                      icon: null,
                      page: "true",
                      sort: 0,
                      children: []
                    },
                    {
                      id: "a5c8f99647e24c528cc66c4d0d6e2f8c",
                      pid: "8ca81f234a834814a4b48159ba41e908",
                      type: "0",
                      name: "异常车辆管理",
                      path: "/managementSuspicious/managementvhAbnormal",
                      icon: null,
                      page: "true",
                      sort: 0,
                      children: []
                    }
                  ]
                },
                {
                  id: "01737301cee6450cb7e444b1c9af0f51",
                  pid: "18b9f2ea6a914471842be7e493fe9764",
                  type: "1",
                  name: "网约车",
                  path: null,
                  icon: null,
                  page: "false",
                  sort: 0,
                  children: [
                    {
                      id: "98ff49fd4b2247589034e537b4e5d940",
                      pid: "01737301cee6450cb7e444b1c9af0f51",
                      type: "0",
                      name: "出库管理",
                      path: "/managementSuspicious/wxManagementOutbound",
                      icon: null,
                      page: "true",
                      sort: 0,
                      children: []
                    },
                    {
                      id: "f647c40676a948aca0d6c9b4d36d4d3d",
                      pid: "01737301cee6450cb7e444b1c9af0f51",
                      type: "0",
                      name: "入库管理",
                      path: "/managementSuspicious/wxManagementWarehousing",
                      icon: null,
                      page: "true",
                      sort: 0,
                      children: []
                    },
                    {
                      id: "57949d1e530c4442a14081ca07424939",
                      pid: "01737301cee6450cb7e444b1c9af0f51",
                      type: "0",
                      name: "异常车辆管理",
                      path: "/managementSuspicious/wxManagementvhAbnormal",
                      icon: null,
                      page: "true",
                      sort: 0,
                      children: []
                    }
                  ]
                },
                {
                  id: "fbde91b6896e490cab1011adebbd4353",
                  pid: "18b9f2ea6a914471842be7e493fe9764",
                  type: "1",
                  name: "旅游客运",
                  path: null,
                  icon: null,
                  page: "false",
                  sort: 0,
                  children: [
                    {
                      id: "fb307159d0f44933bed3901dac93c001",
                      pid: "fbde91b6896e490cab1011adebbd4353",
                      type: "0",
                      name: "可疑公司",
                      path: "/managementSuspicious/firmsSuspect",
                      icon: null,
                      page: "true",
                      sort: 0,
                      children: []
                    },
                    {
                      id: "b45a0240003c4c95ad21e025f1df19b1",
                      pid: "fbde91b6896e490cab1011adebbd4353",
                      type: "0",
                      name: "可疑车辆",
                      path: "/managementSuspicious/vehicleSuspect",
                      icon: null,
                      page: "true",
                      sort: 0,
                      children: []
                    },
                    {
                      id: "28112a9a714940b9aa8677229fee6adf",
                      pid: "fbde91b6896e490cab1011adebbd4353",
                      type: "0",
                      name: "可疑司机",
                      path: "/managementSuspicious/driverSuspicious",
                      icon: null,
                      page: "true",
                      sort: 0,
                      children: []
                    },
                    {
                      id: "14fa0e18059441c2a7f4767175b7f26a",
                      pid: "fbde91b6896e490cab1011adebbd4353",
                      type: "0",
                      name: "可疑旅行社",
                      path: "/managementSuspicious/travelagSuspicious",
                      icon: null,
                      page: "true",
                      sort: 0,
                      children: []
                    },
                    {
                      id: "1e697592da894be8b99283515ee483cc",
                      pid: "fbde91b6896e490cab1011adebbd4353",
                      type: "0",
                      name: "可疑导游",
                      path: "/managementSuspicious/tourguSuspicious",
                      icon: null,
                      page: "true",
                      sort: 0,
                      children: []
                    },
                    {
                      id: "d37558add7c14dda9f91a7efda388d9a",
                      pid: "fbde91b6896e490cab1011adebbd4353",
                      type: "0",
                      name: "可疑游客",
                      path: "/managementSuspicious/touristsSuspicious",
                      icon: null,
                      page: "true",
                      sort: 0,
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              id: "f761aad9c0164ac2ab0864dfbc24bbee",
              pid: "597e27719b724b8299b41168b110ef2d",
              type: "2",
              name: "可疑地点",
              path: null,
              icon: null,
              page: "false",
              sort: 0,
              children: [
                {
                  id: "d3a6ec19c5984805a2013d3a7ca1172f",
                  pid: "f761aad9c0164ac2ab0864dfbc24bbee",
                  type: "0",
                  name: "可疑地点",
                  path: "/managementSuspicious/locationSuspicious",
                  icon: null,
                  page: "true",
                  sort: 0,
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: "78cf39d5ba184bee81bdb7a4629d05a6",
          pid: "0",
          type: "99",
          name: "案件管理",
          path: "/caseManagement",
          icon: null,
          page: "false",
          sort: 4,
          children: [
            {
              id: "eb280c26675d4a16af8a335052930c8d",
              pid: "78cf39d5ba184bee81bdb7a4629d05a6",
              type: "2",
              name: "在线监管案件",
              path: null,
              icon: null,
              page: "false",
              sort: 0,
              children: [
                {
                  id: "ca17ca9d74f14ab091d22654e2c89e7c",
                  pid: "eb280c26675d4a16af8a335052930c8d",
                  type: "1",
                  name: "在线抽查",
                  path: null,
                  icon: null,
                  page: "false",
                  sort: 0,
                  children: [
                    {
                      id: "f8b067c05f524f4e9db1aac98854dd74",
                      pid: "ca17ca9d74f14ab091d22654e2c89e7c",
                      type: "99",
                      name: "核查案件",
                      path: "/caseManagement/checkSystem",
                      icon: null,
                      page: "true",
                      sort: 0,
                      children: []
                    }
                  ]
                },
                {
                  id: "beca1c7457654805b7e9e15496a51313",
                  pid: "eb280c26675d4a16af8a335052930c8d",
                  type: "1",
                  name: "系统已预警",
                  path: null,
                  icon: null,
                  page: "false",
                  sort: 0,
                  children: [
                    {
                      id: "ac35efe8092a49618171f666373aa488",
                      pid: "beca1c7457654805b7e9e15496a51313",
                      type: "99",
                      name: "旅游车案件预警",
                      path: "/caseManagement/warningTourist",
                      icon: null,
                      page: "true",
                      sort: 0,
                      children: []
                    },
                    {
                      id: "3c87ca085c0b413d9fa4416e045d368e",
                      pid: "beca1c7457654805b7e9e15496a51313",
                      type: "99",
                      name: "旅游车未办理案件",
                      path: "/caseManagement/noHandledCar",
                      icon: null,
                      page: "true",
                      sort: 0,
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              id: "8d3836334d914cd2ba263a58d86e6292",
              pid: "78cf39d5ba184bee81bdb7a4629d05a6",
              type: "0",
              name: "处罚案件",
              path: "/caseManagement/casesPenalty",
              icon: null,
              page: "true",
              sort: 0,
              children: []
            },
            {
              id: "7e551d18842e48a0bf454f0c8100af19",
              pid: "78cf39d5ba184bee81bdb7a4629d05a6",
              type: "2",
              name: "提交外单位信息",
              path: null,
              icon: null,
              page: "false",
              sort: 0,
              children: [
                {
                  id: "063decdb0f904cc68ae64a5ac3f2af55",
                  pid: "7e551d18842e48a0bf454f0c8100af19",
                  type: "0",
                  name: "司法局检查记录表",
                  path: "/caseManagement/informationSubmit",
                  icon: null,
                  page: "true",
                  sort: 0,
                  children: []
                },
                {
                  id: "2c13cd68183644858760faf04c517ef1",
                  pid: "7e551d18842e48a0bf454f0c8100af19",
                  type: "0",
                  name: "互联网+监管",
                  path: "/caseManagement/regulationInternet",
                  icon: null,
                  page: "true",
                  sort: 0,
                  children: []
                }
              ]
            },{
              id: "e84791cf77d5452186f56a96590cfec0",
              pid: "fd5db1da627c411489cbe1021f40e271",
              type: "0",
              name: "投诉案件",
              path: "/caseManagement/casesComplaint",
              icon: null,
              page: "true",
              sort: 0,
            }
          ]
        },
        {
          id: "1861f5f394e14f8b8670fd82a5627813",
          pid: "0",
          type: "99",
          name: "数据统计",
          path: "/statisticsData",
          icon: null,
          page: "false",
          sort: 5,
          children: [
            {
              id: "4148dbf46ed145d285fc7dc6684b3885",
              pid: "1861f5f394e14f8b8670fd82a5627813",
              type: "1",
              name: "案件汇总统计",
              path: null,
              icon: null,
              page: "false",
              sort: 0,
              children: [
                {
                  id: "b8a9381694b2446981f9672af36771c1",
                  pid: "4148dbf46ed145d285fc7dc6684b3885",
                  type: "99",
                  name: "案件汇总组合表",
                  path: "/statisticsData/summaryCase",
                  icon: null,
                  page: "true",
                  sort: 0,
                  children: []
                },
                {
                  id: "355e231382fd4b4c80197fa0a873ea46",
                  pid: "4148dbf46ed145d285fc7dc6684b3885",
                  type: "99",
                  name: "违法行为统计",
                  path: "/statisticsData/illegalActivities",
                  icon: null,
                  page: "true",
                  sort: 0,
                  children: []
                }
              ]
            },
            {
              id: "3f0461e0b4264e39aa48f9d6bd178a3b",
              pid: "1861f5f394e14f8b8670fd82a5627813",
              type: "1",
              name: "提交外单位统计",
              path: null,
              icon: null,
              page: "false",
              sort: 0,
              children: [
                {
                  id: "7906e1b49d3844008d26f743f45220c7",
                  pid: "3f0461e0b4264e39aa48f9d6bd178a3b",
                  type: "99",
                  name: "司法局检查记录表",
                  path: "/statisticsData/sfjInspection",
                  icon: null,
                  page: "true",
                  sort: 0,
                  children: []
                },
                {
                  id: "556cf13ce64b496ca0813010061c67e7",
                  pid: "3f0461e0b4264e39aa48f9d6bd178a3b",
                  type: "99",
                  name: "互联网+监管",
                  path: "/statisticsData/statisticsDataInternet",
                  icon: null,
                  page: "true",
                  sort: 0,
                  children: []
                }
              ]
            },
            {
              id: "700e710c4be24461ac8a7153c6edfc07",
              pid: "1861f5f394e14f8b8670fd82a5627813",
              type: "2",
              name: "运单数据统计",
              path: null,
              icon: null,
              page: "false",
              sort: 0,
              children: [
                {
                  id: "f1a10b7c37e846378c37c3c91dcf1664",
                  pid: "700e710c4be24461ac8a7153c6edfc07",
                  type: "1",
                  name: "旅游客运",
                  path: null,
                  icon: null,
                  page: "false",
                  sort: 0,
                  children: [
                    {
                      id: "8f03d9c3cfb947d8936c984721982215",
                      pid: "f1a10b7c37e846378c37c3c91dcf1664",
                      type: "99",
                      name: "旅游车电子行程单",
                      path: "/statisticsData/statisticsTourist",
                      icon: null,
                      page: "true",
                      sort: 0,
                      children: []
                    },
                    {
                      id: "e10ab85b51e443dab2449bc946e461d0",
                      pid: "f1a10b7c37e846378c37c3c91dcf1664",
                      type: "99",
                      name: "包车电子行程单统计",
                      path: "/statisticsData/statisticsitInerary",
                      icon: null,
                      page: "true",
                      sort: 0,
                      children: []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "95d23dad12de4f72a7762c18f367d2cc",
          pid: "0",
          type: "99",
          name: "执法一张图",
          path: "/fenceElectronic",
          icon: null,
          page: "false",
          sort: 6,
          children: [
            {
              id: "620c9a1909c84fc5931f1431fca491a7",
              pid: "95d23dad12de4f72a7762c18f367d2cc",
              type: "0",
              name: "电子围栏一张图",
              path: "/fenceElectronic/fenceElectronicAPicture",
              icon: null,
              page: "false",
              sort: 0,
              children: []
            }
          ]
        },
        {
          id: "ca45a798bab84911b95cd363b0319b23",
          pid: "0",
          type: "99",
          name: "模版管理",
          path: "/managementTemplate",
          icon: null,
          page: "false",
          sort: 7,
          children: [
            {
              id: "128718c2e0c946d1bc3a0f2eddf6c6f5",
              pid: "ca45a798bab84911b95cd363b0319b23",
              type: "1",
              name: "文书模板管理",
              path: null,
              icon: null,
              page: "false",
              sort: 0,
              children: [
                {
                  id: "08bfffa293654c88810ebd3a5429677e",
                  pid: "128718c2e0c946d1bc3a0f2eddf6c6f5",
                  type: "99",
                  name: "文书模板管理",
                  path: "/managementTemplate/managDocument",
                  icon: null,
                  page: "true",
                  sort: 0,
                  children: []
                }
              ]
            },
            {
              id: "d7a62a7aa8d54dfd9008983986aa2efa",
              pid: "ca45a798bab84911b95cd363b0319b23",
              type: "1",
              name: "询问笔录管理",
              path: null,
              icon: null,
              page: "false",
              sort: 0,
              children: [
                {
                  id: "1ba6bbac17254777bdfe3ab36f432efb",
                  pid: "d7a62a7aa8d54dfd9008983986aa2efa",
                  type: "99",
                  name: "询问笔录管理",
                  path: "/managementTemplate/inquiryRecordManagement",
                  icon: null,
                  page: "true",
                  sort: 0,
                  children: []
                }
              ]
            },
            {
              id: "aeecbddaa0e743e0a523fc7b895d5ed9",
              pid: "ca45a798bab84911b95cd363b0319b23",
              type: "1",
              name: "图表模板",
              path: null,
              icon: null,
              page: "false",
              sort: 0,
              children: [
                {
                  id: "4e629e3f8fc14b84808abbe1bbbbf119",
                  pid: "aeecbddaa0e743e0a523fc7b895d5ed9",
                  type: "99",
                  name: "图表模板",
                  path: "/2",
                  icon: null,
                  page: "false",
                  sort: 0,
                  children: []
                }
              ]
            }
          ]
        },
        {
          id: "ec86f28055374ef48792d71b6b00e5e3",
          pid: "0",
          type: "99",
          name: "系统管理",
          path: "/management",
          icon: null,
          page: "false",
          sort: 8,
          children: [
            {
              id: "1939897dc3ec4ddbbaea62f0eda014fh",
              pid: "ec86f28055374ef48792d71b6b00e5e3",
              type: "0",
              name: "一张图围栏管理",
              path: "/management/fencepicture",
              icon: null,
              page: "true",
              sort: 0,
              children: []
            },
            {
              id: "1939897dc3ec4ddbbaea62f0eda014ff",
              pid: "ec86f28055374ef48792d71b6b00e5e3",
              type: "0",
              name: "临时停靠区电子围栏管理",
              path: "/management/manEnclosure",
              icon: null,
              page: "true",
              sort: 0,
              children: []
            },
            {
              id: "cd8c951ef6964ef0b031d8f4ead52485",
              pid: "ec86f28055374ef48792d71b6b00e5e3",
              type: "1",
              name: "电子围栏管理",
              path: null,
              icon: null,
              page: "false",
              sort: 0,
              children: [
                {
                  id: "078c3608aa974d9b8286db217ea62672",
                  pid: "cd8c951ef6964ef0b031d8f4ead52485",
                  type: "99",
                  name: "重点景区执法电子围栏管理",
                  path: "/management/manElectronics",
                  icon: null,
                  page: "false",
                  sort: 0,
                  children: []
                },
                {
                  id: "26f4f05da87f4525a407636babfb1ebd",
                  pid: "cd8c951ef6964ef0b031d8f4ead52485",
                  type: "99",
                  name: "城区电子围栏管理",
                  path: "/management/cityEnclosure",
                  icon: null,
                  page: "false",
                  sort: 0,
                  children: []
                }
              ]
            },
            {
              id: "20d00da5c3304e55a5f63eba989178a1",
              pid: "ec86f28055374ef48792d71b6b00e5e3",
              type: "0",
              name: "旅游客运停车场管理",
              path: "/management/parkingTravel",
              icon: null,
              page: "true",
              sort: 0,
              children: []
            },
            {
              id: "ca14764205bb404788039aae56e38591",
              pid: "ec86f28055374ef48792d71b6b00e5e3",
              type: "1",
              name: "数据字典管理",
              path: null,
              icon: null,
              page: "false",
              sort: 0,
              children: [
                {
                  id: "9fd4052b31ce40118270c9bc897a410d",
                  pid: "ca14764205bb404788039aae56e38591",
                  type: "99",
                  name: "信息资源基本信息",
                  path: "/management/dictionaryData",
                  icon: null,
                  page: "false",
                  sort: 0,
                  children: []
                }
              ]
            },
            {
              id: "f135ad56503b40af980a1a140e7e1d77",
              pid: "ec86f28055374ef48792d71b6b00e5e3",
              type: "0",
              name: "用户管理",
              path: "/management/userManagement",
              icon: null,
              page: "true",
              sort: 0,
              children: []
            },
            {
              id: "6b1833ab692848afb1c8d0f598ef1351",
              pid: "ec86f28055374ef48792d71b6b00e5e3",
              type: "0",
              name: "角色管理",
              path: "/management/manRole",
              icon: null,
              page: "true",
              sort: 0,
              children: []
            },
            {
              id: "864158d2e2bc417ab1f73de0dd90ca40",
              pid: "ec86f28055374ef48792d71b6b00e5e3",
              type: "0",
              name: "移动端功能管理",
              path: "/management/mobileFunction",
              icon: null,
              page: "true",
              sort: 0,
              children: []
            },
            {
              id: "95fd2e87b1c64bb686d0fce776e36344",
              pid: "ec86f28055374ef48792d71b6b00e5e3",
              type: "0",
              name: "APP维护通告",
              path: "/management/noticeApp",
              icon: null,
              page: "true",
              sort: 0,
              children: []
            },
            {
              id: "776e3ed8017e46e0a847d1074a8aa3d4",
              pid: "ec86f28055374ef48792d71b6b00e5e3",
              type: "0",
              name: "移动摄像头维护",
              path: "/management/cameraApp",
              icon: null,
              page: "true",
              sort: 0,
              children: []
            },
            {
              id: "106f3c41778e4e7ea25050b7e646d463",
              pid: "ec86f28055374ef48792d71b6b00e5e3",
              type: "0",
              name: "检查项维护",
              path: "/management/inspectionMaintenance",
              icon: null,
              page: "false",
              sort: 0,
              children: []
            },
            {
              id: "0008ac8355534c00bd9e5b3c9537a5e7",
              pid: "ec86f28055374ef48792d71b6b00e5e3",
              type: "0",
              name: "SIM卡管理",
              path: "/management/SLMCard",
              icon: null,
              page: "true",
              sort: 0,
              children: []
            },
            {
              id: "da27e3c105234147a774a1f0deeb6c30",
              pid: "ec86f28055374ef48792d71b6b00e5e3",
              type: "1",
              name: "审计日志",
              path: null,
              icon: null,
              page: "false",
              sort: 0,
              children: [
                {
                  id: "6dc53f9354d94c568d547bf67b812d8f",
                  pid: "da27e3c105234147a774a1f0deeb6c30",
                  type: "99",
                  name: "操作日志",
                  path: "/management/logOperation",
                  icon: null,
                  page: "false",
                  sort: 0,
                  children: []
                },
                {
                  id: "9ac9d98e575a4359872357dd94330bef",
                  pid: "da27e3c105234147a774a1f0deeb6c30",
                  type: "99",
                  name: "登录日志",
                  path: "/management/logJournal",
                  icon: null,
                  page: "false",
                  sort: 0,
                  children: []
                },
                {
                  id: "8ada0ab4895d4e9aa8ed2a15e3fd9dd2",
                  pid: "da27e3c105234147a774a1f0deeb6c30",
                  type: "99",
                  name: "登录统计",
                  path: "/management/logStatistics",
                  icon: null,
                  page: "false",
                  sort: 0,
                  children: []
                }
              ]
            }
          ]
        },
        
      ]
    }
  },
  components: { SidebarItem, Logo },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
