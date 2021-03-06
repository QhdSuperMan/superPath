<template>
	<el-scrollbar>
		<el-menu :default-active="activeMenu" :router='true' text-color='white' background-color='#1F2D3D' :collapse-transition="false" mode="vertical">
			<sidebar-item v-for="route in menuArr" :key="route.path" :item="route" :base-path="route.path" />
		</el-menu>
	</el-scrollbar>
</template>

<script>
	import { mapGetters } from "vuex";
	import SidebarItem from "./SidebarItem";

	export default {
		data() {
			return {
				menuArr: [
					{
						id: "a29b8d009f3140a893ad1fae2181f34e",
						pid: "0",
						type: "99",
						name: "信息查询",
						path: "/informationService",
						icon: null,
						page: "true",
						sort: 2,
						children: [
							{
								id: "9f360f9a680c4e1ca2946cd2b1932af1",
								pid: "a29b8d009f3140a893ad1fae2181f34e",
								type: "2",
								name: "轨迹定位查询",
								path: "null",
								icon: "/InformationService/queryTrack.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "38e7b4a9c78f4d44872bb1dbf552e0b7",
										pid: "9f360f9a680c4e1ca2946cd2b1932af1",
										type: "1",
										name: "巡游车",
										path: "null",
										icon: null,
										page: "true",
										sort: 0,
										children: [
											{
												id: "544327bed6e24720ba18f67d9e13d4a3",
												pid: "38e7b4a9c78f4d44872bb1dbf552e0b7",
												type: "99",
												name: "巡游车轨迹查询",
												path: "/informationService/cruiserTour",
												icon: null,
												page: "true",
												sort: 0,
												children: [
													{
														id: "49e9c5893ddf4e7cbbe1cce0f04b66e2",
														pid: "544327bed6e24720ba18f67d9e13d4a3",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 0,
														children: []
													}
												]
											},
											{
												id: "7557952910a14447990e65ed594e83c7",
												pid: "38e7b4a9c78f4d44872bb1dbf552e0b7",
												type: "99",
												name: "巡游车定位查询",
												path: "/informationService/cruiserPositioning",
												icon: null,
												page: "true",
												sort: 0,
												children: [
													{
														id: "6f0f3a63980d4f0abe9573fca0b322df",
														pid: "7557952910a14447990e65ed594e83c7",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 0,
														children: []
													}
												]
											},
											{
												id: "95b457cabee644e482a3b8fa6c180f67",
												pid: "38e7b4a9c78f4d44872bb1dbf552e0b7",
												type: "99",
												name: "巡游车模糊查询",
												path: "/informationService/cruiserBlur",
												icon: null,
												page: "true",
												sort: 0,
												children: [
													{
														id: "7868da2f93374c468d5de8f1b8e4ce70",
														pid: "95b457cabee644e482a3b8fa6c180f67",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 0,
														children: []
													}
												]
											},
											{
												id: "82f5905d9706488bb93cc63c20f89312",
												pid: "38e7b4a9c78f4d44872bb1dbf552e0b7",
												type: "99",
												name: "可疑车辆分布",
												path: "/informationService/suspiciousDistribution",
												icon: null,
												page: "true",
												sort: 0,
												children: [
													{
														id: "3fb0aa1fc8be4e5389be9fab14d57a81",
														pid: "82f5905d9706488bb93cc63c20f89312",
														type: "99",
														name: "查询",
														path: "false",
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
										id: "1a601a77673948b0a00b732532123ec0",
										pid: "9f360f9a680c4e1ca2946cd2b1932af1",
										type: "1",
										name: "旅游客运",
										path: "null",
										icon: null,
										page: "true",
										sort: 0,
										children: [
											{
												id: "10ad1960b50843859207a8ad66a997c4",
												pid: "1a601a77673948b0a00b732532123ec0",
												type: "99",
												name: "旅游车定位查询",
												path: "/informationService/positioningTourist",
												icon: null,
												page: "true",
												sort: 0,
												children: [
													{
														id: "62e31135e51a4b378eb11878182711c9",
														pid: "10ad1960b50843859207a8ad66a997c4",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 0,
														children: []
													}
												]
											},
											{
												id: "8ca3ea5576294126b8015b5ac70b9068",
												pid: "1a601a77673948b0a00b732532123ec0",
												type: "99",
												name: "旅游车轨迹查询",
												path: "/informationService/trackTour",
												icon: null,
												page: "true",
												sort: 0,
												children: [
													{
														id: "1ff8d343b0ea4b37896995c977f04aef",
														pid: "8ca3ea5576294126b8015b5ac70b9068",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 0,
														children: []
													}
												]
											},
											{
												id: "83d4603ec2594a01a570519d0e2cc686",
												pid: "1a601a77673948b0a00b732532123ec0",
												type: "99",
												name: "可疑车辆分布",
												path: "/informationService/suspiciousVehicle",
												icon: null,
												page: "true",
												sort: 0,
												children: [
													{
														id: "ec6eac53409a4014bf9b676facae9987",
														pid: "83d4603ec2594a01a570519d0e2cc686",
														type: "99",
														name: "查询",
														path: "false",
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
										id: "e466e11ee78d493cb4eeb0ec16929024",
										pid: "9f360f9a680c4e1ca2946cd2b1932af1",
										type: "1",
										name: "网约车",
										path: "null",
										icon: null,
										page: "true",
										sort: 0,
										children: [
											{
												id: "391c3476638343839ae324cba9332aec",
												pid: "e466e11ee78d493cb4eeb0ec16929024",
												type: "99",
												name: "网约车定位查询",
												path: "/informationService/positioningNetwork",
												icon: null,
												page: "true",
												sort: 0,
												children: [
													{
														id: "8c399ef3d95d4140a111a551eac2376b",
														pid: "391c3476638343839ae324cba9332aec",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 0,
														children: []
													}
												]
											},
											{
												id: "a4bbdcecb0754a97b3112cd10c57aa08",
												pid: "e466e11ee78d493cb4eeb0ec16929024",
												type: "99",
												name: "网约车轨迹查询",
												path: "/informationService/trackNetwork",
												icon: null,
												page: "true",
												sort: 0,
												children: [
													{
														id: "8333945d79124397ac9794898cf2dfe7",
														pid: "a4bbdcecb0754a97b3112cd10c57aa08",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
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
								id: "2311fb5b6b31402ebfbc82958e5bf795",
								pid: "a29b8d009f3140a893ad1fae2181f34e",
								type: "99",
								name: "基础信息",
								path: "null",
								icon: "/InformationService/basicIcon.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "7a578b89b81e42a28517d6a2914dcec2",
										pid: "2311fb5b6b31402ebfbc82958e5bf795",
										type: "1",
										name: "旅游车",
										path: "null",
										icon: null,
										page: "true",
										sort: 0,
										children: [
											{
												id: "8b2a6771643e4c07bf1ff9d4c00545ce",
												pid: "7a578b89b81e42a28517d6a2914dcec2",
												type: "99",
												name: "司机信息",
												path: "/informationService/informationDriver",
												icon: null,
												page: "true",
												sort: 0,
												children: [
													{
														id: "df5d0c2e926c41b4add761aba4a791cc",
														pid: "8b2a6771643e4c07bf1ff9d4c00545ce",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 0,
														children: []
													},
													{
														id: "4e41322529b54d0abc0af7d824284d39",
														pid: "8b2a6771643e4c07bf1ff9d4c00545ce",
														type: "99",
														name: "导出",
														path: "false",
														icon: null,
														page: "false",
														sort: 0,
														children: []
													},
													{
														id: "58e7724da18547ee9e4cd17f245f60ac",
														pid: "8b2a6771643e4c07bf1ff9d4c00545ce",
														type: "99",
														name: "司机详情",
														path: "false",
														icon: null,
														page: "false",
														sort: 0,
														children: []
													}
												]
											},
											{
												id: "5b3469a1d5f84cdabb31c204188b1b18",
												pid: "7a578b89b81e42a28517d6a2914dcec2",
												type: "99",
												name: "车辆信息",
												path: "/informationService/informationVehicle",
												icon: null,
												page: "true",
												sort: 0,
												children: [
													{
														id: "d64045d66c19491191462f9d0d207886",
														pid: "5b3469a1d5f84cdabb31c204188b1b18",
														type: "99",
														name: "车辆详情",
														path: "false",
														icon: null,
														page: "false",
														sort: 0,
														children: []
													},
													{
														id: "66eb9d26b40143789d547695329dcff0",
														pid: "5b3469a1d5f84cdabb31c204188b1b18",
														type: "99",
														name: "车辆轨迹",
														path: "false",
														icon: null,
														page: "false",
														sort: 0,
														children: []
													},
													{
														id: "4984298c5f4d45edb14283e899a0ed1c",
														pid: "5b3469a1d5f84cdabb31c204188b1b18",
														type: "99",
														name: "车辆所属公司",
														path: "false",
														icon: null,
														page: "false",
														sort: 0,
														children: []
													},
													{
														id: "95065b9becd84234853d5133b77ff5d8",
														pid: "5b3469a1d5f84cdabb31c204188b1b18",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 0,
														children: []
													},
													{
														id: "54a024c8c5db4ddbbbadab7044fe66f7",
														pid: "5b3469a1d5f84cdabb31c204188b1b18",
														type: "99",
														name: "导出",
														path: "false",
														icon: null,
														page: "false",
														sort: 0,
														children: []
													}
												]
											},
											{
												id: "dc21ba8cc2e74fa69c2a111f821c7a06",
												pid: "7a578b89b81e42a28517d6a2914dcec2",
												type: "99",
												name: "导游信息",
												path: "/informationService/informationGuide",
												icon: null,
												page: "true",
												sort: 0,
												children: [
													{
														id: "59d13029649f495496453a1f7653c908",
														pid: "dc21ba8cc2e74fa69c2a111f821c7a06",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "d244fb4a7b7b4f2bb06b270f1934139c",
														pid: "dc21ba8cc2e74fa69c2a111f821c7a06",
														type: "99",
														name: "导出",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "751efbafbc6c408482bf4a88eaa24e70",
														pid: "dc21ba8cc2e74fa69c2a111f821c7a06",
														type: "99",
														name: "查看",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													}
												]
											},
											{
												id: "5bebfda2805e4900acd411cb5df8630d",
												pid: "7a578b89b81e42a28517d6a2914dcec2",
												type: "99",
												name: "企业信息",
												path: "/informationService/informationEnterprise",
												icon: null,
												page: "true",
												sort: 0,
												children: [
													{
														id: "038190495a4d4336ae742659e1bc109d",
														pid: "5bebfda2805e4900acd411cb5df8630d",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "978a3041340d4f04bbc54911000a3b0d",
														pid: "5bebfda2805e4900acd411cb5df8630d",
														type: "99",
														name: "导出",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "785af4a3aa344ce9825fd46046f15ebf",
														pid: "5bebfda2805e4900acd411cb5df8630d",
														type: "99",
														name: "车辆所属公司",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													}
												]
											}
										]
									}
								]
							},
							{
								id: "82ae8c8343fc4979b19a2bfcbc6e2df8",
								pid: "a29b8d009f3140a893ad1fae2181f34e",
								type: "1",
								name: "运单信息",
								path: "null",
								icon: "/InformationService/InformationIcon.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "ab4c1a34bdd14e7cb8d880f4c30f7aff",
										pid: "82ae8c8343fc4979b19a2bfcbc6e2df8",
										type: "99",
										name: "旅游车电子行程单",
										path: "/informationService/itineraryCar",
										icon: null,
										page: "true",
										sort: 0,
										children: [
											{
												id: "395f9013011a4ab198d9c143d682b698",
												pid: "ab4c1a34bdd14e7cb8d880f4c30f7aff",
												type: "99",
												name: "查询",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "f292151e24164450a1a9131d46459c50",
												pid: "ab4c1a34bdd14e7cb8d880f4c30f7aff",
												type: "99",
												name: "导出",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "e82ca2858d434311a4bf83b8247121bc",
												pid: "ab4c1a34bdd14e7cb8d880f4c30f7aff",
												type: "99",
												name: "电子行程单",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											}
										]
									},
									{
										id: "e1fc82f6893644cdbeb805693df2fad1",
										pid: "82ae8c8343fc4979b19a2bfcbc6e2df8",
										type: "0",
										name: "包车电子行程单",
										path: "/informationService/itineraryCarCharter",
										icon: null,
										page: "true",
										sort: 0,
										children: [
											{
												id: "bb52a6dc3c8f48d8b1c8f5cbd9c14ef5",
												pid: "e1fc82f6893644cdbeb805693df2fad1",
												type: "0",
												name: "查询",
												path: "false",
												icon: null,
												page: "false",
												sort: 0,
												children: []
											},
											{
												id: "11598318acc043599a4981f88a8b4301",
												pid: "e1fc82f6893644cdbeb805693df2fad1",
												type: "99",
												name: "导出",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "e187ff56c44c4a0e994ada80d74e8c56",
												pid: "e1fc82f6893644cdbeb805693df2fad1",
												type: "99",
												name: "查看详情",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											}
										]
									}
								]
							},
							{
								id: "582a169977c349bc96f9be7834e17996",
								pid: "a29b8d009f3140a893ad1fae2181f34e",
								type: "0",
								name: "旅游车停车场围栏",
								path: "/informationService/parkingbusTour",
								icon: "/InformationService/coachFenceIcon.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "e07647c3e0484b66aea3baa8bb5a19c1",
										pid: "582a169977c349bc96f9be7834e17996",
										type: "99",
										name: "查询",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									},
									{
										id: "d7caa80fab7c4122b94f2a1bebde936d",
										pid: "582a169977c349bc96f9be7834e17996",
										type: "99",
										name: "导出",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									},
									{
										id: "ffcdaa4de55d41c1bad24a2fdc10ccb9",
										pid: "582a169977c349bc96f9be7834e17996",
										type: "99",
										name: "地图展示",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									}
								]
							},
							{
								id: "1cdea077da974327a87f361c00ab876e",
								pid: "a29b8d009f3140a893ad1fae2181f34e",
								type: "0",
								name: "临时停靠区围栏",
								path: "/informationService/parkingTemporary",
								icon: "/InformationService/coachFencePaeking.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "f62186ccd03f417a8078a44c1a595f31",
										pid: "1cdea077da974327a87f361c00ab876e",
										type: "99",
										name: "地图展示",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									},
									{
										id: "c68b8ce5f51e43eb926c0758fcd90551",
										pid: "1cdea077da974327a87f361c00ab876e",
										type: "99",
										name: "查询",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									},
									{
										id: "82c7e1846889424b8328aac5706c071a",
										pid: "1cdea077da974327a87f361c00ab876e",
										type: "99",
										name: "导出",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									}
								]
							}
						]
					},
					{
						id: "960babf0b87b4e4dbe56765f3d2a3faf",
						pid: "0",
						type: "99",
						name: "线上监管",
						path: "/inquiryCase",
						icon: null,
						page: "true",
						sort: 2,
						children: [
							{
								id: "150bd1b2ad254512b66cceaa883ca21e",
								pid: "960babf0b87b4e4dbe56765f3d2a3faf",
								type: "2",
								name: "系统预警",
								path: "false",
								icon: "/supervisionIcon/warningSystem.png",
								page: "true",
								sort: 99,
								children: [
									{
										id: "7b42280a826a44a6830c918fb694a74f",
										pid: "150bd1b2ad254512b66cceaa883ca21e",
										type: "1",
										name: "旅游车预警",
										path: "false",
										icon: null,
										page: "true",
										sort: 99,
										children: [
											{
												id: "f1cf55c35f33404bb3dca2a0b4120398",
												pid: "7b42280a826a44a6830c918fb694a74f",
												type: "0",
												name: "无行程单预警",
												path: "/inquiryCase/warningTouristPage/noTripSystem",
												icon: null,
												page: "true",
												sort: 99,
												children: [
													{
														id: "c555daa737bb465c9f9648393f060b58",
														pid: "f1cf55c35f33404bb3dca2a0b4120398",
														type: "99",
														name: "详情对比",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "85b51a5422154f6dad776eacb6561594",
														pid: "f1cf55c35f33404bb3dca2a0b4120398",
														type: "99",
														name: "查看路线",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "85dd20a89639489782a5d458ad47ee13",
														pid: "f1cf55c35f33404bb3dca2a0b4120398",
														type: "99",
														name: "无法确认库",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "89c20ab1a1b54b92b53b33dd1995322f",
														pid: "f1cf55c35f33404bb3dca2a0b4120398",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "b2c57089a8d64518af6adfb909c4b3b6",
														pid: "f1cf55c35f33404bb3dca2a0b4120398",
														type: "99",
														name: "导出",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "4412d9e5fc684ab5b354b9623b89f1aa",
														pid: "f1cf55c35f33404bb3dca2a0b4120398",
														type: "99",
														name: "调查通知书",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "1fe642d88cdd4627b5e55c371ec8fd96",
														pid: "f1cf55c35f33404bb3dca2a0b4120398",
														type: "99",
														name: "预警景点名称查看",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "d7bb4448b49c4d508a2e73ad22441749",
														pid: "f1cf55c35f33404bb3dca2a0b4120398",
														type: "99",
														name: "查看详情",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													}
												]
											},
											{
												id: "61cb885b1c9244f2823760131d38751c",
												pid: "7b42280a826a44a6830c918fb694a74f",
												type: "0",
												name: "未按线路运营预警",
												path: "/inquiryCase/warningTouristPage/noLineWarning",
												icon: null,
												page: "true",
												sort: 99,
												children: [
													{
														id: "07c15652890e4c088fc8f638ac36d9ec",
														pid: "61cb885b1c9244f2823760131d38751c",
														type: "99",
														name: "详情对比",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "4794ded975d04a6198d7dc87a3cf6872",
														pid: "61cb885b1c9244f2823760131d38751c",
														type: "99",
														name: "查看详情",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "3fdea71797074396a9f5c820579a5f34",
														pid: "61cb885b1c9244f2823760131d38751c",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "70971c1cafb341bf8416c7cc90e511dc",
														pid: "61cb885b1c9244f2823760131d38751c",
														type: "99",
														name: "查看调查通知书",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "4826f0751ea7481e84803323daecdc56",
														pid: "61cb885b1c9244f2823760131d38751c",
														type: "99",
														name: "查看路线",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "a129ededc7ca4e9d9d97312f2165342d",
														pid: "61cb885b1c9244f2823760131d38751c",
														type: "99",
														name: "导出",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "7b9d6b9385f241c9afc7081316e3a5cd",
														pid: "61cb885b1c9244f2823760131d38751c",
														type: "99",
														name: "异常景点名称",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "e257a0cc0bee40998e4691eb68fef9b0",
														pid: "61cb885b1c9244f2823760131d38751c",
														type: "99",
														name: "景点名称",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "2d6b1f12d8fd4e569cb5830b9ef3495d",
														pid: "61cb885b1c9244f2823760131d38751c",
														type: "99",
														name: "团号",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "67cc824a4b274efbbb4569c2a386ff17",
														pid: "61cb885b1c9244f2823760131d38751c",
														type: "99",
														name: "无法确认库",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													}
												]
											},
											{
												id: "1ab86c9976ef45b486ca0fef506617a9",
												pid: "7b42280a826a44a6830c918fb694a74f",
												type: "0",
												name: "游客异常预警",
												path: "/inquiryCase/warningTouristPage/warningAnomaly",
												icon: null,
												page: "true",
												sort: 99,
												children: [
													{
														id: "c19e4f9fa8a64057bf84de29d3270f53",
														pid: "1ab86c9976ef45b486ca0fef506617a9",
														type: "99",
														name: "调查通知书",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "a87bd41dcfe649f2b1b1e5ae00e9290c",
														pid: "1ab86c9976ef45b486ca0fef506617a9",
														type: "99",
														name: "详情对比",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "bbbece13bb31446fb7bc852192350142",
														pid: "1ab86c9976ef45b486ca0fef506617a9",
														type: "99",
														name: "查看路线",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "4688578555fe48d1ac9273ed2548e676",
														pid: "1ab86c9976ef45b486ca0fef506617a9",
														type: "99",
														name: "查看详情",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "27df25d887694071b1d79d1910419a5c",
														pid: "1ab86c9976ef45b486ca0fef506617a9",
														type: "99",
														name: "团号",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "c3e3a83043264c63b3d1feeae18ff7fb",
														pid: "1ab86c9976ef45b486ca0fef506617a9",
														type: "99",
														name: "无法确认库",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "1c26e0ae3d5f4585a71843ad2236989a",
														pid: "1ab86c9976ef45b486ca0fef506617a9",
														type: "99",
														name: "导出",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "af2adafcf57c433087a44dfea7a72ea2",
														pid: "1ab86c9976ef45b486ca0fef506617a9",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													}
												]
											},
											{
												id: "313b18b390454fa3a31905b7345e73ea",
												pid: "7b42280a826a44a6830c918fb694a74f",
												type: "0",
												name: "车辆异常预警",
												path:
													"/inquiryCase/warningTouristPage/qualificationVehicle",
												icon: null,
												page: "true",
												sort: 99,
												children: [
													{
														id: "10b2bf1f3929488a8cf1c855c44e8e31",
														pid: "313b18b390454fa3a31905b7345e73ea",
														type: "99",
														name: "详情对比",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "086bf6ff2d294da48a1dac29e031df2c",
														pid: "313b18b390454fa3a31905b7345e73ea",
														type: "99",
														name: "调查通知书",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "5fe240d3040b4e9298360ce6279aab90",
														pid: "313b18b390454fa3a31905b7345e73ea",
														type: "99",
														name: "查看路线",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "e26418fc749e4c73bcc5e8d5d2169917",
														pid: "313b18b390454fa3a31905b7345e73ea",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "facc39f724cd4835969afa78aaf48cc0",
														pid: "313b18b390454fa3a31905b7345e73ea",
														type: "99",
														name: "导出",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "45864f1d074e43c283edac23ee7d7242",
														pid: "313b18b390454fa3a31905b7345e73ea",
														type: "99",
														name: "无法确认库",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "fb1aa03774d644e197cf26448247b89d",
														pid: "313b18b390454fa3a31905b7345e73ea",
														type: "99",
														name: "团号",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "f3949395be5e45e196a24f11c49b9cfe",
														pid: "313b18b390454fa3a31905b7345e73ea",
														type: "99",
														name: "查看详情",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													}
												]
											},
											{
												id: "ebdd9afaf3f6488c8181d5ccfaa3e627",
												pid: "7b42280a826a44a6830c918fb694a74f",
												type: "0",
												name: "司机异常预警",
												path: "/inquiryCase/warningTouristPage/driverVehicle",
												icon: null,
												page: "true",
												sort: 99,
												children: [
													{
														id: "04cc04b1885f401e91a93c0bd84b7cb3",
														pid: "ebdd9afaf3f6488c8181d5ccfaa3e627",
														type: "99",
														name: "调查通知书",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "57a9125b9bd84ec9be84575f382729e2",
														pid: "ebdd9afaf3f6488c8181d5ccfaa3e627",
														type: "99",
														name: "团号",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "96a44e1d377a4362a3eeadfb33552d52",
														pid: "ebdd9afaf3f6488c8181d5ccfaa3e627",
														type: "99",
														name: "无法确认库",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "75eaf71dfb0b45ec8042a5cbcfb2da81",
														pid: "ebdd9afaf3f6488c8181d5ccfaa3e627",
														type: "99",
														name: "导出",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "2f289752fe3f40a9a2e06a23dc7dcbe1",
														pid: "ebdd9afaf3f6488c8181d5ccfaa3e627",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "ad3b7c4e45084788be2f0dd38e1d9f7a",
														pid: "ebdd9afaf3f6488c8181d5ccfaa3e627",
														type: "99",
														name: "查看路线",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "0f620e537cb648c68d62fc8b779f93bc",
														pid: "ebdd9afaf3f6488c8181d5ccfaa3e627",
														type: "99",
														name: "查看详情",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "914ca9207a4e4791a2b363e641e2fd83",
														pid: "ebdd9afaf3f6488c8181d5ccfaa3e627",
														type: "99",
														name: "详情对比",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													}
												]
											},
											{
												id: "6fc8c749c52642fdbb5fab75358f064f",
												pid: "7b42280a826a44a6830c918fb694a74f",
												type: "0",
												name: "卫星定位异常预警",
												path: "/inquiryCase/warningTouristPage/GPSPositioning",
												icon: null,
												page: "true",
												sort: 99,
												children: [
													{
														id: "cd66687371ba464dbcc97c0a86bd9b80",
														pid: "6fc8c749c52642fdbb5fab75358f064f",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "45786dc9c8614596bd037ed9589c9ac2",
														pid: "6fc8c749c52642fdbb5fab75358f064f",
														type: "99",
														name: "导出",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "df310cffbf0444a0b395e380461375ac",
														pid: "6fc8c749c52642fdbb5fab75358f064f",
														type: "99",
														name: "无法确认库",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "38ca7aa3279f4a009b3a64e916861658",
														pid: "6fc8c749c52642fdbb5fab75358f064f",
														type: "99",
														name: "团号",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "f857eae3c5984abf86b1c644953a4080",
														pid: "6fc8c749c52642fdbb5fab75358f064f",
														type: "99",
														name: "详情对比",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "12efa19a27db44a4a5cfc7bca6e565df",
														pid: "6fc8c749c52642fdbb5fab75358f064f",
														type: "99",
														name: "查看详情",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "075f94bef04c464e9fc42347b5b39d29",
														pid: "6fc8c749c52642fdbb5fab75358f064f",
														type: "99",
														name: "查看路线",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "1d0f6bf1a24542278774875d7b6d412d",
														pid: "6fc8c749c52642fdbb5fab75358f064f",
														type: "99",
														name: "调查通知书",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													}
												]
											},
											{
												id: "ff2c7d256a244225b4a446aee207c7cd",
												pid: "7b42280a826a44a6830c918fb694a74f",
												type: "0",
												name: "驶入核心区预警",
												path: "/inquiryCase/warningTouristPage/coreArea",
												icon: null,
												page: "true",
												sort: 99,
												children: [
													{
														id: "8af51f6f02664494aa68caacf7d4f9e9",
														pid: "ff2c7d256a244225b4a446aee207c7cd",
														type: "99",
														name: "查看路线",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "d510bac1f27d4ea79d142de560f454ea",
														pid: "ff2c7d256a244225b4a446aee207c7cd",
														type: "99",
														name: "导出",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "491cc51e5d184c8bb14724ae5aec8d5e",
														pid: "ff2c7d256a244225b4a446aee207c7cd",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "8ef2d23f3fc348bfb76a8d31e332b29d",
														pid: "ff2c7d256a244225b4a446aee207c7cd",
														type: "99",
														name: "预警类型",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													}
												]
											},
											{
												id: "92e1fd04350c45f286f4dc78782a6096",
												pid: "7b42280a826a44a6830c918fb694a74f",
												type: "0",
												name: "复合型预警",
												path: "/inquiryCase/cannotTouristPage/warningCompound",
												icon: null,
												page: "true",
												sort: 99,
												children: [
													{
														id: "7a27906d367a4c6d8f62970db573283f",
														pid: "92e1fd04350c45f286f4dc78782a6096",
														type: "99",
														name: "调查通知书",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "6d61325a64b84a3fb4230ce80c27a276",
														pid: "92e1fd04350c45f286f4dc78782a6096",
														type: "99",
														name: "团号",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "92ca25bf1d4f402ba23d6b710b11a561",
														pid: "92e1fd04350c45f286f4dc78782a6096",
														type: "99",
														name: "详情对比",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "cafe2b34c5a343358afed1d4dba4a782",
														pid: "92e1fd04350c45f286f4dc78782a6096",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "bd325d8edbac41ca8ce676395f24feb6",
														pid: "92e1fd04350c45f286f4dc78782a6096",
														type: "99",
														name: "导出",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													}
												]
											},
											{
												id: "ae57f1839fd74397b5e86e1ea7690d5a",
												pid: "7b42280a826a44a6830c918fb694a74f",
												type: "0",
												name: "调查通知书查询",
												path: "/inquiryCase/investigationInquiry",
												icon: null,
												page: "true",
												sort: 99,
												children: [
													{
														id: "202b2d0cd24644d3be3678863cb94780",
														pid: "ae57f1839fd74397b5e86e1ea7690d5a",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "0c1f5785bafe481fa4092a3c37e1fea3",
														pid: "ae57f1839fd74397b5e86e1ea7690d5a",
														type: "99",
														name: "查看",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "9e1926b6609d406c92e032c7701d5344",
														pid: "ae57f1839fd74397b5e86e1ea7690d5a",
														type: "99",
														name: "导出",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													}
												]
											}
										]
									}
								]
							},
							{
								id: "e177dfa36b184cb493b2281bbe0876f1",
								pid: "960babf0b87b4e4dbe56765f3d2a3faf",
								type: "0",
								name: "在线抽查",
								path: "/inquiryCase/systemNotWarning",
								icon: "/supervisionIcon/checkOnline.png",
								page: "true",
								sort: 99,
								children: [
									{
										id: "361f7a7542f74d14bdf4f2d66e2f2120",
										pid: "e177dfa36b184cb493b2281bbe0876f1",
										type: "99",
										name: "导出",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									},
									{
										id: "262532f1163d4b17a51548b7141f3f15",
										pid: "e177dfa36b184cb493b2281bbe0876f1",
										type: "99",
										name: "团号",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									},
									{
										id: "90487056f12f4a9995e3383ffdeb4c3b",
										pid: "e177dfa36b184cb493b2281bbe0876f1",
										type: "99",
										name: "查询",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									}
								]
							},
							{
								id: "785d0237e4804cb6b36b934aac41e8b3",
								pid: "960babf0b87b4e4dbe56765f3d2a3faf",
								type: "1",
								name: "无法确认案件",
								path: "false",
								icon: "/supervisionIcon/confirmedCase.png",
								page: "true",
								sort: 99,
								children: [
									{
										id: "b8c50ea0134d4c9bab217308d4079971",
										pid: "785d0237e4804cb6b36b934aac41e8b3",
										type: "0",
										name: "司机异常预警",
										path: "/inquiryCase/cannotTouristPage/driverVehicle",
										icon: null,
										page: "true",
										sort: 99,
										children: [
											{
												id: "5ab33849b2f3457e8597be821342ba53",
												pid: "b8c50ea0134d4c9bab217308d4079971",
												type: "99",
												name: "团号",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "1dd3a036069d40b59dfd16ee32bd5f0f",
												pid: "b8c50ea0134d4c9bab217308d4079971",
												type: "99",
												name: "查询",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "38f1b2b6358c4ae897aef55d589ddcc3",
												pid: "b8c50ea0134d4c9bab217308d4079971",
												type: "99",
												name: "导出",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											}
										]
									},
									{
										id: "ca5c650a4d3340ab913ec9e1f4ff5d9f",
										pid: "785d0237e4804cb6b36b934aac41e8b3",
										type: "0",
										name: "卫星定位异常预警",
										path: "/inquiryCase/cannotTouristPage/GPSPositioning",
										icon: null,
										page: "true",
										sort: 99,
										children: [
											{
												id: "802788a9cfa248cfa896c4cadf769566",
												pid: "ca5c650a4d3340ab913ec9e1f4ff5d9f",
												type: "99",
												name: "团号",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "62408127c0fb40f3a5bfba94e60f5f9a",
												pid: "ca5c650a4d3340ab913ec9e1f4ff5d9f",
												type: "99",
												name: "查询",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "941679f0718e4f99ab66ac0fa7e24371",
												pid: "ca5c650a4d3340ab913ec9e1f4ff5d9f",
												type: "99",
												name: "导出",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											}
										]
									},
									{
										id: "7fa3188432444f27ba1f73538d1ba6e1",
										pid: "785d0237e4804cb6b36b934aac41e8b3",
										type: "0",
										name: "车辆异常预警",
										path: "/inquiryCase/cannotTouristPage/qualificationVehicle",
										icon: null,
										page: "true",
										sort: 99,
										children: [
											{
												id: "26c614592153411a96a1a07305efdee3",
												pid: "7fa3188432444f27ba1f73538d1ba6e1",
												type: "99",
												name: "导出",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "b659653a04c7463a865010a0439dea6a",
												pid: "7fa3188432444f27ba1f73538d1ba6e1",
												type: "99",
												name: "查询",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "04190e5552be486998a1ddba391420fe",
												pid: "7fa3188432444f27ba1f73538d1ba6e1",
												type: "99",
												name: "团号",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											}
										]
									},
									{
										id: "8e2c1270bd70472784bec8b9dbadb6ba",
										pid: "785d0237e4804cb6b36b934aac41e8b3",
										type: "0",
										name: "游客异常预警",
										path: "/inquiryCase/cannotTouristPage/warningAnomaly",
										icon: null,
										page: "true",
										sort: 99,
										children: [
											{
												id: "0536aa188a0f42f3b2ea0f4d1e63d116",
												pid: "8e2c1270bd70472784bec8b9dbadb6ba",
												type: "99",
												name: "导出",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "83de8b0488574c7c8879ddfaeb68a24c",
												pid: "8e2c1270bd70472784bec8b9dbadb6ba",
												type: "99",
												name: "查询",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "580c9927af2a423bb75e4ae5bd8f460e",
												pid: "8e2c1270bd70472784bec8b9dbadb6ba",
												type: "99",
												name: "团号",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											}
										]
									},
									{
										id: "bf02f7c7e65b40569360778c6b5e07b0",
										pid: "785d0237e4804cb6b36b934aac41e8b3",
										type: "0",
										name: "未按线路运营预警",
										path: "/inquiryCase/cannotTouristPage/noLineWarning",
										icon: null,
										page: "true",
										sort: 99,
										children: [
											{
												id: "8585132803cf482b8fd65720920fe0b8",
												pid: "bf02f7c7e65b40569360778c6b5e07b0",
												type: "99",
												name: "查询",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "da1dad4873094aa2a2d784d195ad6b72",
												pid: "bf02f7c7e65b40569360778c6b5e07b0",
												type: "99",
												name: "团号",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "8ad65078fe354029b6a703937b7f7334",
												pid: "bf02f7c7e65b40569360778c6b5e07b0",
												type: "99",
												name: "景点名称",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "5e08d8206af044d7b4cf6ff87eee6f94",
												pid: "bf02f7c7e65b40569360778c6b5e07b0",
												type: "99",
												name: "异常景点名称",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "cdedae69d72a4d7cbb32fe2898134d0f",
												pid: "bf02f7c7e65b40569360778c6b5e07b0",
												type: "99",
												name: "导出",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											}
										]
									},
									{
										id: "30978ae019bf402081546a86106a7c7b",
										pid: "785d0237e4804cb6b36b934aac41e8b3",
										type: "0",
										name: "无行程单预警",
										path: "/inquiryCase/cannotTouristPage/noTripSystem",
										icon: null,
										page: "true",
										sort: 99,
										children: [
											{
												id: "c5dba59e55ec4d9189e82dd75cf1ce4c",
												pid: "30978ae019bf402081546a86106a7c7b",
												type: "99",
												name: "查询",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "9aac6285bd4b471ebc8bf09b561211e7",
												pid: "30978ae019bf402081546a86106a7c7b",
												type: "99",
												name: "预警景点查看",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "d7bbeecdb9e2474d9c459fcf11f0aa94",
												pid: "30978ae019bf402081546a86106a7c7b",
												type: "99",
												name: "导出",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											}
										]
									}
								]
							}
						]
					},
					{
						id: "593410eab4ac4c3e916c2a4a5c8e5e67",
						pid: "0",
						type: "99",
						name: "案件查询",
						path: "/caseManagement",
						icon: null,
						page: "true",
						sort: 3,
						children: [
							{
								id: "42900a6a73aa4bc3ad46983c3bd0b286",
								pid: "593410eab4ac4c3e916c2a4a5c8e5e67",
								type: "2",
								name: "稽查记录信息",
								path: "false",
								icon: "/inquiryCase/information.png",
								page: "true",
								sort: 99,
								children: [
									{
										id: "6207d21aa7ee475d92404723ca7e395b",
										pid: "42900a6a73aa4bc3ad46983c3bd0b286",
										type: "0",
										name: "非现场稽查记录",
										path: "/caseManagement/offSiteInspection",
										icon: null,
										page: "true",
										sort: 99,
										children: [
											{
												id: "997695e7f9874248a58a58b9306234b0",
												pid: "6207d21aa7ee475d92404723ca7e395b",
												type: "99",
												name: "查询",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "1868687091de49a0ac98f32207596cb4",
												pid: "6207d21aa7ee475d92404723ca7e395b",
												type: "99",
												name: "查看路线",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "18ded9865a0a49258100471a57adf173",
												pid: "6207d21aa7ee475d92404723ca7e395b",
												type: "99",
												name: "详情",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "7db9040911cb47e3b40220df6864ff5a",
												pid: "6207d21aa7ee475d92404723ca7e395b",
												type: "99",
												name: "导出",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											}
										]
									},
									{
										id: "fc8aae67dfe74934817e5a10a5692b4c",
										pid: "42900a6a73aa4bc3ad46983c3bd0b286",
										type: "0",
										name: "现场稽查记录",
										path: "/caseManagement/siteInspection",
										icon: null,
										page: "true",
										sort: 99,
										children: [
											{
												id: "c5b3220b1dc34a3c8ecd6e3020b82db4",
												pid: "fc8aae67dfe74934817e5a10a5692b4c",
												type: "99",
												name: "查看路线",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "bcc0fae9966c40a99146b726ac789693",
												pid: "fc8aae67dfe74934817e5a10a5692b4c",
												type: "99",
												name: "详情",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "5862ff0bfc5c4843921cbc90c40e77ac",
												pid: "fc8aae67dfe74934817e5a10a5692b4c",
												type: "99",
												name: "查询",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "71208bb283c94eeea36b87ede75fbef2",
												pid: "fc8aae67dfe74934817e5a10a5692b4c",
												type: "99",
												name: "导出",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											}
										]
									}
								]
							},
							{
								id: "e998c0cf8a394c398417584ec0c18b5d",
								pid: "593410eab4ac4c3e916c2a4a5c8e5e67",
								type: "2",
								name: "提交外单位信息",
								path: "false",
								icon: "/inquiryCase/informationSubmit.png",
								page: "true",
								sort: 99,
								children: [
									{
										id: "e30edd77ca8143e7839ca8148734d900",
										pid: "e998c0cf8a394c398417584ec0c18b5d",
										type: "0",
										name: "司法局检查记录表",
										path: "/caseManagement/inspectSFJ",
										icon: null,
										page: "true",
										sort: 99,
										children: [
											{
												id: "40784a187ef149b3b704c063d371f551",
												pid: "e30edd77ca8143e7839ca8148734d900",
												type: "99",
												name: "导出",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "1efd4011169c4ba0af67963634e204bc",
												pid: "e30edd77ca8143e7839ca8148734d900",
												type: "99",
												name: "查询",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "22e8b295dcdb4b61be733fd5b4fb82e8",
												pid: "e30edd77ca8143e7839ca8148734d900",
												type: "99",
												name: "详情",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "08627ef89b834cb7a14a46327896671f",
												pid: "e30edd77ca8143e7839ca8148734d900",
												type: "99",
												name: "查看路线",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											}
										]
									}
								]
							},
							{
								id: "c00a31c89945463b956472964b9071c1",
								pid: "593410eab4ac4c3e916c2a4a5c8e5e67",
								type: "0",
								name: "投诉案件",
								path: "/caseManagement/casesComplaint",
								icon: "/inquiryCase/casesComplaint.png",
								page: "true",
								sort: 99,
								children: [
									{
										id: "641016a9d93c4a86b9671753ba25777f",
										pid: "c00a31c89945463b956472964b9071c1",
										type: "99",
										name: "详情",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									},
									{
										id: "215396beeeb546dd92eec1dce95fd648",
										pid: "c00a31c89945463b956472964b9071c1",
										type: "99",
										name: "查询",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									},
									{
										id: "bc76c8729e3d41ec90f284b7acc8278f",
										pid: "c00a31c89945463b956472964b9071c1",
										type: "99",
										name: "导出",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									}
								]
							}
						]
					},
					{
						id: "abeb3276d28242199b0a3156c1665e96",
						pid: "0",
						type: "99",
						name: "可疑管理",
						path: "/managementSuspicious",
						icon: null,
						page: "true",
						sort: 6,
						children: [
							{
								id: "5ec0a903259d4bed84c764c8f21a0b45",
								pid: "abeb3276d28242199b0a3156c1665e96",
								type: "99",
								name: "可疑行业",
								path: "null",
								icon: "/management/industrySuspicious.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "2dee9dbf3a7a475bb40b8a6bca348667",
										pid: "5ec0a903259d4bed84c764c8f21a0b45",
										type: "1",
										name: "巡游车",
										path: "null",
										icon: null,
										page: "true",
										sort: 0,
										children: [
											{
												id: "760a00d845bb4b3f9c018d3ac2310242",
												pid: "2dee9dbf3a7a475bb40b8a6bca348667",
												type: "0",
												name: "入库管理",
												path: "/managementSuspicious/managementWarehousing",
												icon: null,
												page: "true",
												sort: 0,
												children: [
													{
														id: "465a08d730f349bf870211a8fbf0dc89",
														pid: "760a00d845bb4b3f9c018d3ac2310242",
														type: "99",
														name: "导出",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "322a96c6936e4a46a3ca9f2716c719c8",
														pid: "760a00d845bb4b3f9c018d3ac2310242",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "550a5d320bc94ddf8e7cb2d7234047a4",
														pid: "760a00d845bb4b3f9c018d3ac2310242",
														type: "99",
														name: "入库",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													}
												]
											},
											{
												id: "2c3dd34d40ec47298d6039e9e637cf7e",
												pid: "2dee9dbf3a7a475bb40b8a6bca348667",
												type: "0",
												name: "出库管理",
												path: "/managementSuspicious/managementOutbound",
												icon: null,
												page: "true",
												sort: 0,
												children: [
													{
														id: "5c25fd7c9d8b4aefbdc569ef2291b3a4",
														pid: "2c3dd34d40ec47298d6039e9e637cf7e",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "5cd32827582a479d97ece249915e43b5",
														pid: "2c3dd34d40ec47298d6039e9e637cf7e",
														type: "99",
														name: "导出",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													}
												]
											},
											{
												id: "5a12b2f324ea4caa9e66915b51e4cfa5",
												pid: "2dee9dbf3a7a475bb40b8a6bca348667",
												type: "0",
												name: "异常车辆管理",
												path: "/managementSuspicious/managementvhAbnormal",
												icon: null,
												page: "true",
												sort: 0,
												children: [
													{
														id: "047c3a5eb18147dc8cbd19a146aa6178",
														pid: "5a12b2f324ea4caa9e66915b51e4cfa5",
														type: "99",
														name: "导出",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "75ef51c7e62f4d6fa20fdaf813378c9b",
														pid: "5a12b2f324ea4caa9e66915b51e4cfa5",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "4cf6f9e840c54339bd53b53a1df5f1fe",
														pid: "5a12b2f324ea4caa9e66915b51e4cfa5",
														type: "99",
														name: "出库",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													}
												]
											}
										]
									}
								]
							}
						]
					},
					{
						id: "c4887ac8b8f347d88e3ba7a582c72d0e",
						pid: "0",
						type: "99",
						name: "数据统计",
						path: "/statisticsData",
						icon: null,
						page: "true",
						sort: 9,
						children: [
							{
								id: "a8f2279fc52c4290b6ae8ad56019b18f",
								pid: "c4887ac8b8f347d88e3ba7a582c72d0e",
								type: "0",
								name: "案件汇总组合表",
								path: "/statisticsData/summaryCase",
								icon: "/statistics/summary.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "42b8a12f009b44fa84ecadd8129baab0",
										pid: "a8f2279fc52c4290b6ae8ad56019b18f",
										type: "99",
										name: "查询",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "d1ec2f6aee5742709d02586debb51339",
										pid: "a8f2279fc52c4290b6ae8ad56019b18f",
										type: "99",
										name: "导出",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									}
								]
							},
							{
								id: "6f5c1db1d55b4ee881512e4ab04a4d2e",
								pid: "c4887ac8b8f347d88e3ba7a582c72d0e",
								type: "2",
								name: "预警案件统计",
								path: "null",
								icon: "/statistics/warningEarly.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "bc15ee15bbd949d99f59ed42b58b5ca4",
										pid: "6f5c1db1d55b4ee881512e4ab04a4d2e",
										type: "0",
										name: "预警案件汇总",
										path: "/statisticsData/warningSummary",
										icon: null,
										page: "true",
										sort: 0,
										children: [
											{
												id: "964784843b6c4bbcba5165f34289e642",
												pid: "bc15ee15bbd949d99f59ed42b58b5ca4",
												type: "99",
												name: "导出",
												path: "false",
												icon: null,
												page: "false",
												sort: 0,
												children: []
											},
											{
												id: "813ff94da0934504b6407b584877e3b8",
												pid: "bc15ee15bbd949d99f59ed42b58b5ca4",
												type: "99",
												name: "查询",
												path: "false",
												icon: null,
												page: "false",
												sort: 0,
												children: []
											}
										]
									},
									{
										id: "544ccd9ee40140d98b2dd6f7fe25eeb0",
										pid: "6f5c1db1d55b4ee881512e4ab04a4d2e",
										type: "0",
										name: "预警案件详情",
										path: "/statisticsData/warningDetails",
										icon: null,
										page: "true",
										sort: 0,
										children: [
											{
												id: "fb3991033d2e4bdc8371aeb4817798ae",
												pid: "544ccd9ee40140d98b2dd6f7fe25eeb0",
												type: "99",
												name: "查询",
												path: "false",
												icon: null,
												page: "false",
												sort: 0,
												children: []
											},
											{
												id: "4cb6874a212344f19727f05125a2aeff",
												pid: "544ccd9ee40140d98b2dd6f7fe25eeb0",
												type: "99",
												name: "导出",
												path: "false",
												icon: null,
												page: "false",
												sort: 0,
												children: []
											}
										]
									},
									{
										id: "ad2635aafdc34310ac65a84cc1c49388",
										pid: "6f5c1db1d55b4ee881512e4ab04a4d2e",
										type: "0",
										name: "吻合度",
										path: "/statisticsData/degreeCoincidence",
										icon: null,
										page: "true",
										sort: 0,
										children: [
											{
												id: "63fd04cdf56241849bd950acc03ae02e",
												pid: "ad2635aafdc34310ac65a84cc1c49388",
												type: "99",
												name: "导出",
												path: "false",
												icon: null,
												page: "false",
												sort: 0,
												children: []
											},
											{
												id: "3136487155b746a19691b6bc952bbf2a",
												pid: "ad2635aafdc34310ac65a84cc1c49388",
												type: "99",
												name: "查询",
												path: "false",
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
								id: "77e3270179324cb1b780d8fdddd0afd2",
								pid: "c4887ac8b8f347d88e3ba7a582c72d0e",
								type: "0",
								name: "投诉案件统计",
								path: "/statisticsData/complaintsStatistics",
								icon: "/statistics/statisticsComplaint.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "b5ff078371fb4611ba00c82edb447de1",
										pid: "77e3270179324cb1b780d8fdddd0afd2",
										type: "0",
										name: "投诉案件统计查询",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "daa85e0f64c04806b1cec81c010c19b5",
										pid: "77e3270179324cb1b780d8fdddd0afd2",
										type: "0",
										name: "投诉案件统计导出",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									}
								]
							},
							{
								id: "c5d9dc1537c44d25866ada2cd76985e7",
								pid: "c4887ac8b8f347d88e3ba7a582c72d0e",
								type: "2",
								name: "运单统计",
								path: "false",
								icon: "/statistics/statisticsWaybill.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "325b0954f2d248b8972777d498737de2",
										pid: "c5d9dc1537c44d25866ada2cd76985e7",
										type: "1",
										name: "旅游客运",
										path: "false",
										icon: null,
										page: "true",
										sort: 0,
										children: [
											{
												id: "91e5a83a266e4599a6975680ab4851b2",
												pid: "325b0954f2d248b8972777d498737de2",
												type: "1",
												name: "旅游电子行程单统计",
												path: "/statisticsData/itineraryTravelTour",
												icon: null,
												page: "true",
												sort: 0,
												children: [
													{
														id: "306176020b5d424db7e8fdd8aab7128b",
														pid: "91e5a83a266e4599a6975680ab4851b2",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 0,
														children: []
													},
													{
														id: "da06021859cd497db644a84a1a916246",
														pid: "91e5a83a266e4599a6975680ab4851b2",
														type: "99",
														name: "导出",
														path: "false",
														icon: null,
														page: "false",
														sort: 9,
														children: []
													}
												]
											},
											{
												id: "6a8d446882644d898cf3b0828c8efaf7",
												pid: "325b0954f2d248b8972777d498737de2",
												type: "0",
												name: "包车电子行程单统计",
												path: "/statisticsData/statisticsitInerary",
												icon: null,
												page: "true",
												sort: 99,
												children: [
													{
														id: "0c0c971dc07e4499b3af92f485cc579b",
														pid: "6a8d446882644d898cf3b0828c8efaf7",
														type: "99",
														name: "查看",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "84c74401901843de82e680ec42ddedb3",
														pid: "6a8d446882644d898cf3b0828c8efaf7",
														type: "99",
														name: "查询",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													},
													{
														id: "c256f06e707f4b94b6a4470a1966a33a",
														pid: "6a8d446882644d898cf3b0828c8efaf7",
														type: "99",
														name: "导出",
														path: "false",
														icon: null,
														page: "false",
														sort: 99,
														children: []
													}
												]
											}
										]
									}
								]
							},
							{
								id: "f544bb6c27f24642a3e39b63753847c4",
								pid: "c4887ac8b8f347d88e3ba7a582c72d0e",
								type: "2",
								name: "提交外单位统计",
								path: "false",
								icon: "/statistics/ordersSubmit.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "556d328b5f324e25b8411f6960588c1b",
										pid: "f544bb6c27f24642a3e39b63753847c4",
										type: "0",
										name: "司法局检查记录表",
										path: "/statisticsData/sfjInspection",
										icon: null,
										page: "true",
										sort: 0,
										children: [
											{
												id: "9cb0dc4e369744e296bb4f7a7998d1ac",
												pid: "556d328b5f324e25b8411f6960588c1b",
												type: "99",
												name: "查询",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											},
											{
												id: "527e56ab8f98438cb1109192afb06a24",
												pid: "556d328b5f324e25b8411f6960588c1b",
												type: "99",
												name: "导出",
												path: "false",
												icon: null,
												page: "false",
												sort: 99,
												children: []
											}
										]
									}
								]
							}
						]
					},
					{
						id: "b9b3fb9e6c1548a58d05c605a13f9ba2",
						pid: "0",
						type: "99",
						name: "执法一张图",
						path: "/fenceElectronic",
						icon: null,
						page: "true",
						sort: 12,
						children: [
							{
								id: "ffbb1e987b40428daeadd90cc40a9215",
								pid: "b9b3fb9e6c1548a58d05c605a13f9ba2",
								type: "0",
								name: "电子围栏一张图",
								path: "/fenceElectronic/fenceElectronicAPicture",
								icon: "/enforcement/enforcementLaw.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "bd78534506a748c78ab3033a02629e0a",
										pid: "ffbb1e987b40428daeadd90cc40a9215",
										type: "99",
										name: "查询",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									}
								]
							}
						]
					},
					{
						id: "19529023cecd4f57b35f2f91ced21abd",
						pid: "0",
						type: "99",
						name: "系统管理",
						path: "/management",
						icon: null,
						page: "true",
						sort: 16,
						children: [
							{
								id: "cf4c25997d3a40bdbe0a2885a220f505",
								pid: "19529023cecd4f57b35f2f91ced21abd",
								type: "0",
								name: "移动摄像头维护",
								path: "/management/cameraApp",
								icon: "/systemMt/maintenanceMobile.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "7fadc42988024fafb1001f0e552d1f3f",
										pid: "cf4c25997d3a40bdbe0a2885a220f505",
										type: "99",
										name: "批量删除",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "502d00cfeee0424490c37cb566b79b85",
										pid: "cf4c25997d3a40bdbe0a2885a220f505",
										type: "99",
										name: "编辑",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "279e866c64b44e5fac3d304f0c356d10",
										pid: "cf4c25997d3a40bdbe0a2885a220f505",
										type: "99",
										name: "删除",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "d312cedc2e874259be6f440ab5108589",
										pid: "cf4c25997d3a40bdbe0a2885a220f505",
										type: "99",
										name: "查询",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									},
									{
										id: "a332688a7e6e4903b62795d2bda8cd14",
										pid: "cf4c25997d3a40bdbe0a2885a220f505",
										type: "99",
										name: "导出",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									}
								]
							},
							{
								id: "2e47ddad1369443fa4d7d78990ef314d",
								pid: "19529023cecd4f57b35f2f91ced21abd",
								type: "0",
								name: "临时停靠区电子围栏管理",
								path: "/management/manEnclosure",
								icon: "/systemMt/fenceManagement.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "a0192472910b47bcbbcf8d2d28e71a82",
										pid: "2e47ddad1369443fa4d7d78990ef314d",
										type: "99",
										name: "删除",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "f2945011d7d142f3b5d6be82f27d134a",
										pid: "2e47ddad1369443fa4d7d78990ef314d",
										type: "99",
										name: "编辑",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "d4488dce380d4f45be1184d3b6548834",
										pid: "2e47ddad1369443fa4d7d78990ef314d",
										type: "99",
										name: "新增",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "9f80f87f1dc7410b9c178a336f04da5a",
										pid: "2e47ddad1369443fa4d7d78990ef314d",
										type: "99",
										name: "导出",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									},
									{
										id: "49b0e36afee343d9b82ceff879bc1ddb",
										pid: "2e47ddad1369443fa4d7d78990ef314d",
										type: "99",
										name: "查看",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									},
									{
										id: "4da230a2c7374bac8a97a0a8a9c3766b",
										pid: "2e47ddad1369443fa4d7d78990ef314d",
										type: "99",
										name: "查询",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									}
								]
							},
							{
								id: "569196d6fe954f4eb400ed501aa99c45",
								pid: "19529023cecd4f57b35f2f91ced21abd",
								type: "0",
								name: "旅游客运停车场管理",
								path: "/management/parkingTravel",
								icon: "/systemMt/parkingBus.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "5338ce7065194e939e3e3113f7258d38",
										pid: "569196d6fe954f4eb400ed501aa99c45",
										type: "99",
										name: "新增",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									},
									{
										id: "3be0115a88df443fb6511ae9e3c4094b",
										pid: "569196d6fe954f4eb400ed501aa99c45",
										type: "99",
										name: "编辑",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									},
									{
										id: "56502caa64c54875b51464d4d92558f2",
										pid: "569196d6fe954f4eb400ed501aa99c45",
										type: "99",
										name: "删除",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									},
									{
										id: "7af45251156548ceb3db766177d3e136",
										pid: "569196d6fe954f4eb400ed501aa99c45",
										type: "99",
										name: "查询",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									},
									{
										id: "778733c83c1546038803a66fb3906f4a",
										pid: "569196d6fe954f4eb400ed501aa99c45",
										type: "99",
										name: "导出",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									},
									{
										id: "bb36d29b23ac49dc84b21e33fd532674",
										pid: "569196d6fe954f4eb400ed501aa99c45",
										type: "99",
										name: "状态修改",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									}
								]
							},
							{
								id: "53336b0d411349de91881e5c2a66d094",
								pid: "19529023cecd4f57b35f2f91ced21abd",
								type: "1",
								name: "数据字典管理",
								path: "null",
								icon: "/systemMt/dictionaryDataIcon.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "9625cac6b9f94ef2b7402e9dc4c25058",
										pid: "53336b0d411349de91881e5c2a66d094",
										type: "99",
										name: "信息资源基本信息",
										path: "/management/dictionaryData",
										icon: null,
										page: "true",
										sort: 0,
										children: [
											{
												id: "956fdee2cdac480f8d79610b088f5e16",
												pid: "9625cac6b9f94ef2b7402e9dc4c25058",
												type: "99",
												name: "查询",
												path: "false",
												icon: null,
												page: "false",
												sort: 0,
												children: []
											},
											{
												id: "a21680ded54047dd8181df93dfaa6e8d",
												pid: "9625cac6b9f94ef2b7402e9dc4c25058",
												type: "99",
												name: "导出",
												path: "false",
												icon: null,
												page: "false",
												sort: 0,
												children: []
											},
											{
												id: "de734b54e3a948b985217e8430793870",
												pid: "9625cac6b9f94ef2b7402e9dc4c25058",
												type: "99",
												name: "信息资源名称",
												path: "false",
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
								id: "0e63ec5e5cc34e9b956bc8ba46bfc289",
								pid: "19529023cecd4f57b35f2f91ced21abd",
								type: "0",
								name: "用户管理",
								path: "/management/userManagement",
								icon: "/systemMt/managementUser.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "e3bd7b7e16944f8794314328863c2f19",
										pid: "0e63ec5e5cc34e9b956bc8ba46bfc289",
										type: "99",
										name: "重置密码",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "23dad75bcc9940468b9246923ca0edff",
										pid: "0e63ec5e5cc34e9b956bc8ba46bfc289",
										type: "99",
										name: "绑定角色",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "faa6da25f9064a50b893e6438fc75a15",
										pid: "0e63ec5e5cc34e9b956bc8ba46bfc289",
										type: "99",
										name: "添加",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "e57d7639a6cc413886e6940d9e909169",
										pid: "0e63ec5e5cc34e9b956bc8ba46bfc289",
										type: "99",
										name: "详情",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "911086c24cb64095b4065393185fe090",
										pid: "0e63ec5e5cc34e9b956bc8ba46bfc289",
										type: "99",
										name: "查询",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "f5169b1b49324ff198d2fed4c114eaef",
										pid: "0e63ec5e5cc34e9b956bc8ba46bfc289",
										type: "99",
										name: "导出",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "891a02423ec04bcea601fc4c8052ad0a",
										pid: "0e63ec5e5cc34e9b956bc8ba46bfc289",
										type: "99",
										name: "删除",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									}
								]
							},
							{
								id: "b8fe853d2bbd4635a118f0b67a830b64",
								pid: "19529023cecd4f57b35f2f91ced21abd",
								type: "0",
								name: "角色管理",
								path: "/management/manRole",
								icon: "/systemMt/managementRole.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "3cd8104992104a23ad617d7f91514882",
										pid: "b8fe853d2bbd4635a118f0b67a830b64",
										type: "99",
										name: "功能权限",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "7d460cb15aed44f79fd0d9240f1fb7c2",
										pid: "b8fe853d2bbd4635a118f0b67a830b64",
										type: "99",
										name: "添加",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "6df50447beea41dfa9b809070ba41e8f",
										pid: "b8fe853d2bbd4635a118f0b67a830b64",
										type: "99",
										name: "删除",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "e807834372bd410f91dc3348a945b811",
										pid: "b8fe853d2bbd4635a118f0b67a830b64",
										type: "99",
										name: "详情",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "1142928136b74ddab4afba972e99292e",
										pid: "b8fe853d2bbd4635a118f0b67a830b64",
										type: "99",
										name: "导出",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "0cb2901fe01a4879930ce324b7f2dce7",
										pid: "b8fe853d2bbd4635a118f0b67a830b64",
										type: "99",
										name: "查询",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									}
								]
							},
							{
								id: "ad34db28cf644cc2b8fec0fdce848b7a",
								pid: "19529023cecd4f57b35f2f91ced21abd",
								type: "0",
								name: "移动端功能管理",
								path: "/management/mobileFunction",
								icon: "/systemMt/terminalMobile.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "d0852adf52d846da93d1bd46d5f6b881",
										pid: "ad34db28cf644cc2b8fec0fdce848b7a",
										type: "99",
										name: "新增",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "f47dc297bace4967bd3b7c0cd9ccedc3",
										pid: "ad34db28cf644cc2b8fec0fdce848b7a",
										type: "99",
										name: "修改",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									}
								]
							},
							{
								id: "0e186dcec22149aba294059beef817fa",
								pid: "19529023cecd4f57b35f2f91ced21abd",
								type: "0",
								name: "APP维护通告",
								path: "/management/noticeApp",
								icon: "/systemMt/publicApp.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "e88ae0f1445a4b9499180f751cbc1488",
										pid: "0e186dcec22149aba294059beef817fa",
										type: "99",
										name: "批量删除",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "0df091483a2b472bb3fe86f53f81f0b1",
										pid: "0e186dcec22149aba294059beef817fa",
										type: "99",
										name: "新增",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "6c59431610344e87894810824af961f2",
										pid: "0e186dcec22149aba294059beef817fa",
										type: "99",
										name: "删除",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "903ee49c2edf4338b74dd1f91833a828",
										pid: "0e186dcec22149aba294059beef817fa",
										type: "99",
										name: "编辑",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "d9264f7ea3a2472598ec35ef4d02dd58",
										pid: "0e186dcec22149aba294059beef817fa",
										type: "99",
										name: "查询",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "fe0ccaa2557f4869812705590623d203",
										pid: "0e186dcec22149aba294059beef817fa",
										type: "99",
										name: "导出",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									}
								]
							},
							{
								id: "a0f48218f5dc46afaf3666779eec4f82",
								pid: "19529023cecd4f57b35f2f91ced21abd",
								type: "0",
								name: "检查项维护",
								path: "/management/inspectionMaintenance",
								icon: "/systemMt/maintenanceCheck.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "c056a0678e4145c09243b2cd177f8de9",
										pid: "a0f48218f5dc46afaf3666779eec4f82",
										type: "99",
										name: "查询",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									}
								]
							},
							{
								id: "c1f1570952d14b81bf90119d0bfe15d2",
								pid: "19529023cecd4f57b35f2f91ced21abd",
								type: "0",
								name: "SIM卡管理",
								path: "/management/SLMCard",
								icon: "/systemMt/SIMIcon.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "354e41e9eb3049298f5c81cea5c962a5",
										pid: "c1f1570952d14b81bf90119d0bfe15d2",
										type: "99",
										name: "编辑",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "e0dcf32c8e0343d4bf96931c00da391c",
										pid: "c1f1570952d14b81bf90119d0bfe15d2",
										type: "99",
										name: "查询",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "8384ebca4c7b4e228c052d450bad096f",
										pid: "c1f1570952d14b81bf90119d0bfe15d2",
										type: "99",
										name: "查看",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									}
								]
							},
							{
								id: "1a046412fb7c43edaadf2dc8a236f289",
								pid: "19529023cecd4f57b35f2f91ced21abd",
								type: "0",
								name: "审计日志",
								path: "/management/logOperation",
								icon: "/systemMt/AuditLog.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "d7dbc4bd6c904147b5b8be744438b617",
										pid: "1a046412fb7c43edaadf2dc8a236f289",
										type: "99",
										name: "查询",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									}
								]
							},
							{
								id: "19cd3e735cb142958be7abc5e6b55df1",
								pid: "19529023cecd4f57b35f2f91ced21abd",
								type: "0",
								name: "执法围栏一张图管理",
								path: "/management/fencepicture",
								icon: "/systemMt/pictureLaw.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "8dbe245afcde4805becb982e6b86e41a",
										pid: "19cd3e735cb142958be7abc5e6b55df1",
										type: "99",
										name: "新增围栏",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "682b49dfb08243bc87f422d4fc057ba4",
										pid: "19cd3e735cb142958be7abc5e6b55df1",
										type: "99",
										name: "查询",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "74e8eec062f84b10af27a7d70d0ab8ab",
										pid: "19cd3e735cb142958be7abc5e6b55df1",
										type: "99",
										name: "导出",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "7b6e0b3f41394a4ab9c0d9e15f2dccee",
										pid: "19cd3e735cb142958be7abc5e6b55df1",
										type: "99",
										name: "编辑",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "21f133bb309841349b2435194224336b",
										pid: "19cd3e735cb142958be7abc5e6b55df1",
										type: "99",
										name: "删除",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									}
								]
							},
							{
								id: "fccec0a4a61a4adca86587ccde8f78a6",
								pid: "19529023cecd4f57b35f2f91ced21abd",
								type: "0",
								name: "重点景区围栏管理",
								path: "/management/manElectronics",
								icon: "/systemMt/fenceKey.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "aaed203e2c164e278144291db122658c",
										pid: "fccec0a4a61a4adca86587ccde8f78a6",
										type: "99",
										name: "查询",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									},
									{
										id: "777cb2fed3e4494688bd4d9b83f046f9",
										pid: "fccec0a4a61a4adca86587ccde8f78a6",
										type: "99",
										name: "导出",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									},
									{
										id: "8db29f9a787b4fc19bf3f13d2fa6e182",
										pid: "fccec0a4a61a4adca86587ccde8f78a6",
										type: "99",
										name: "地图展示",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									},
									{
										id: "3b765f9401e5456fa2d6ee3157cffae8",
										pid: "fccec0a4a61a4adca86587ccde8f78a6",
										type: "99",
										name: "状态",
										path: "false",
										icon: null,
										page: "false",
										sort: 99,
										children: []
									}
								]
							}
						]
					},
					{
						id: "4a3d94b9ad7544ac901e1f9d8c99b174",
						pid: "0",
						type: "99",
						name: "设置",
						path: "/setUp",
						icon: null,
						page: "true",
						sort: 18,
						children: [
							{
								id: "7473dd888d814e818a2b88e759e66454",
								pid: "4a3d94b9ad7544ac901e1f9d8c99b174",
								type: "0",
								name: "修改密码",
								path: "/setUp/changePassword",
								icon: "/setUp/passwordChange.png",
								page: "true",
								sort: 0,
								children: [
									{
										id: "4ee1f1f60b7548d7b540895e0239de77",
										pid: "7473dd888d814e818a2b88e759e66454",
										type: "99",
										name: "提交",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "9fb8fa1cb70c4a1289143bbf8e200cad",
										pid: "7473dd888d814e818a2b88e759e66454",
										type: "99",
										name: "取消",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									},
									{
										id: "008a4bdfdb1f475b84d3f6cd73a46f1d",
										pid: "7473dd888d814e818a2b88e759e66454",
										type: "99",
										name: "编辑",
										path: "false",
										icon: null,
										page: "false",
										sort: 0,
										children: []
									}
								]
							},
							{
								id: "55ec2f66177f4e6cb683e0c94220e55a",
								pid: "4a3d94b9ad7544ac901e1f9d8c99b174",
								type: "0",
								name: "版本号",
								path: "/setUp/versionNo",
								icon: "/setUp/numberVersion.png",
								page: "true",
								sort: 0,
								children: []
							}
						]
					}
				]
			};
		},
		components: { SidebarItem },
		computed: {
			...mapGetters(["getRouterBoxs"]),
			activeMenu() {
				const route = this.$route;
				const { meta, path } = route;
				// if set path, the sidebar will highlight the path you set
				if (meta.activeMenu) {
					return meta.activeMenu;
				}
				return path;
			}
		}
	};
</script>


<style lang="less" scoped>
</style>