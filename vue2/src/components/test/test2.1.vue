<template>
  <div>
    <div class="section_search section_search_bor0">
      <form action="" method="" class="clearfix">
        <div class="wid">
          <span>联系人名称</span>
          <input type="text" v-model="queryParam.searchMap.providerName">
        </div>
        <div class="wid">
          <span>手机号</span>
          <input type="text" v-model="queryParam.searchMap.providerMobile">
        </div>
        <div class="wid">
          <span>品牌商状态</span>
          <div class="dropdown">
            <div class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              {{queryParam.searchMap.providerStatus | shopStatus}}
            </div>
            <div class="dropdown-menu">
              <ul>
                <li @click="queryParam.searchMap.providerStatus = null">请选择</li>
                <li @click="queryParam.searchMap.providerStatus = 0">未启用</li>
                <li @click="queryParam.searchMap.providerStatus = 1">启用</li>
                <li @click="queryParam.searchMap.providerStatus = 2">停用</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="wid">
          <span>最后修改人</span>
          <input type="text" v-model.trim='queryParam.searchMap.lastModifyName'>
        </div>
        <div class="wid w14">
          <button class="search" type="button" @click="getProviderAccountListPage">查询</button>
        </div>
      </form>
    </div>
    <div class="main_context">
      <div class="main_pad clearfix">
         <div class="table-responsive">
          <table class="table table-hover tableMenu">
            <thead>
            <tr>
              <th>品牌商姓名</th>
              <th>手机号</th>
              <th>公司名称</th>
              <th>品牌商状态</th>
              <th>绑定品牌 </th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>王晓晓</td>
                <td>1234567898</td>
                <td>上海浦海电子商务有限公司</td>
                <td>加盟商</td>
                <td style="padding: 8px 25px 0;">
                  <div class="row">
                    <div class="col-xs-4 transfer-box">
                      <p>
                        巴黎欧莱雅
                        <span class="sm-icon sm-st-icon">启用</span>
                      </p>
                      <p class="col999 f12">LOREAL</p>
                    </div>
                    <div class="col-xs-4 transfer-box">
                      <p>
                        巴黎欧莱雅
                        <span class="sm-icon sm-ds-icon">未启用</span>
                      </p>
                      <p class="col999 f12">LOREAL</p>
                    </div>
                    <div class="col-xs-4 transfer-box">
                      <p>
                        巴黎欧莱雅
                        <span class="sm-icon sm-ds-icon">停用</span>
                      </p>
                      <p class="col999 f12">LOREAL</p>
                    </div>
                    <div class="col-xs-4 transfer-box">
                      <p>
                        巴黎欧莱雅
                        <span class="sm-icon sm-st-icon">启用</span>
                      </p>
                      <p class="col999 f12">LOREAL</p>
                    </div>
                    <div class="col-xs-4 transfer-box">
                      <p>
                        巴黎欧莱雅
                        <span class="sm-icon sm-ds-icon">未启用</span>
                      </p>
                      <p class="col999 f12">LOREAL</p>
                    </div>
                    <div class="col-xs-4 transfer-box">
                      <p>
                        巴黎欧莱雅
                        <span class="sm-icon sm-ds-icon">停用</span>
                      </p>
                      <p class="col999 f12">LOREAL</p>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>




        <div class="table-responsive">
          <table class="table table-hover tableMenu">
            <thead>
            <tr>
              <th @click="sortItem('account.provider_name')">联系人名称
                <strong>
                  <i :class="{'ss': true,'on': queryParam.orderBy=='account.provider_name' && queryParam.orderDir=='ASC' }"></i>
                  <i :class="{'sx': true,'up': queryParam.orderBy=='account.provider_name' && queryParam.orderDir=='DESC'}"></i>
                </strong>
              </th>
              <th @click="sortItem('account.provider_mobile')">手机号
                <strong>
                  <i :class="{'ss': true,'on': queryParam.orderBy=='account.provider_mobile' && queryParam.orderDir=='ASC' }"></i>
                  <i :class="{'sx': true,'up': queryParam.orderBy=='account.provider_mobile' && queryParam.orderDir=='DESC'}"></i>
                </strong>
              </th>
              <th @click="sortItem('kind.kind_name')">客户类别
                <strong>
                  <i :class="{'ss': true,'on': queryParam.orderBy=='kind.kind_name' && queryParam.orderDir=='ASC' }"></i>
                  <i :class="{'sx': true,'up': queryParam.orderBy=='kind.kind_name' && queryParam.orderDir=='DESC'}"></i>
                </strong>
              </th>
              <th @click="sortItem('account.last_modify_id')">最后修改人
                <strong>
                  <i :class="{'ss': true,'on': queryParam.orderBy=='account.last_modify_id' && queryParam.orderDir=='ASC' }"></i>
                  <i :class="{'sx': true,'up': queryParam.orderBy=='account.last_modify_id' && queryParam.orderDir=='DESC'}"></i>
                </strong>
              </th>
              <th @click="sortItem('account.last_modify_time')">最后修改时间
                <strong>
                  <i :class="{'ss': true,'on': queryParam.orderBy=='account.last_modify_time' && queryParam.orderDir=='ASC' }"></i>
                  <i :class="{'sx': true,'up': queryParam.orderBy=='account.last_modify_time' && queryParam.orderDir=='DESC'}"></i>
                </strong>
              </th>
              <th @click="sortItem('account.provider_status')">账户状态
                <strong>
                  <i :class="{'ss': true,'on': queryParam.orderBy=='account.provider_status' && queryParam.orderDir=='ASC' }"></i>
                  <i :class="{'sx': true,'up': queryParam.orderBy=='account.provider_status' && queryParam.orderDir=='DESC'}"></i>
                </strong>
              </th>
              <th @click="sortItem('account.is_invoice')">发票类型
                <strong>
                  <i :class="{'ss': true,'on': queryParam.orderBy=='account.is_invoice' && queryParam.orderDir=='ASC' }"></i>
                  <i :class="{'sx': true,'up': queryParam.orderBy=='account.is_invoice' && queryParam.orderDir=='DESC'}"></i>
                </strong>
              </th>
              <th>操作&nbsp;
                <div v-if="checkPrivilege('provider_account_edit')" class="addSelect" @click="setOperationType(2,'')"></div>
              </th>
            </tr>
            </thead>
            <tbody>
            <!-- 新增 -->
            <tr class="addLine see" v-if="operationType == 2">
              <td colspan="8">
                <provider-account-add @closePage="closePage" :error="error" :kindList="kindList"></provider-account-add>
              </td>
            </tr>
            <template v-for="providerAccountInfo in providerAccountList">
              <tr>
                <td>{{providerAccountInfo.providerName}}</td>
                <td>{{providerAccountInfo.providerMobile}}</td>
                <td>{{providerAccountInfo.kindName}}</td>
                <td>{{providerAccountInfo.lastModifyName}}</td>
                <td>{{providerAccountInfo.lastModifyTime | date('yyyy-MM-dd')}}</td>
                <td>
                  <template v-if="checkPrivilege('provider_account_status') && providerAccountInfo.isMine==1">
                    <template v-if="providerAccountInfo.providerStatus == 0">
                      <div class="button sty down" @click="setProviderStatus(providerAccountInfo,1)"></div>
                    </template>
                    <template v-if="providerAccountInfo.providerStatus == 1">
                      <div class="button sty on" @click="setProviderStatus(providerAccountInfo,2)"></div>
                    </template>
                    <template v-if="providerAccountInfo.providerStatus == 2">
                      <div class="button sty off" @click="setProviderStatus(providerAccountInfo,1)"></div>
                    </template>
                  </template>
                  <template v-else>
                    <span>{{providerAccountInfo.providerStatus|status}}</span>
                  </template>
                </td>
                <td>{{providerAccountInfo.isInvoice|isInvoice}}</td>
                <td :class="{'cut':providerAccountInfo.providerStatus == 0}">
                  <template v-if="checkPrivilege('provider_account_view')">
                    <ins :class="{'ck': true,'open': providerAccountInfo.providerId== providerId && operationType == 1}"
                         @click="setOperationType(1,providerAccountInfo.providerId)"></ins>
                  </template>&nbsp;
                  <template v-if="checkPrivilege('provider_account_edit') && providerAccountInfo.isMine==1">&nbsp;
                    <ins :class="{'xg': true,'open': providerAccountInfo.providerId == providerId && operationType == 3}"
                         @click="setOperationType(3,providerAccountInfo.providerId)"></ins>&nbsp;
                    <ins class="sc" v-if="providerAccountInfo.providerStatus==0" @click="delProviderAccountInit(providerAccountInfo.providerId)"></ins>
                  </template>
                </td>
              </tr>
              <!-- 查看详情 -->
              <tr class="addLine see" v-if="operationType == 1 && providerAccountInfo.providerId == providerId">
                <td colspan="8">
                  <provider-account-view :provider-id="providerId" :error="error"></provider-account-view>
                </td>
              </tr>
              <!-- 编辑 --> 
              <tr class="addLine see" v-if="operationType == 3 && providerAccountInfo.providerId == providerId">
                <td colspan="8">
                  <provider-account-edit :provider-id="providerId" @closePage="closePage" :error="error" :kindList="kindList"> </provider-account-edit>
                </td>
              </tr>
            </template>
            </tbody>
          </table>
        </div>
        <!--v-start-->
        <!--page-->
        <page :page=page :condition="queryParam" @search="getProviderAccountList"></page>
        <!--page-->
      </div>
    </div>
    <!-- 报错信息展示 -->
    <show-tips v-if="error.errorCode > 0 || error.type > 0" :error="error" @callBack="delBack"></show-tips>
  </div>
</template>
<script>
import filter from '../../utils/filters'
export default {
		components: {
			showTips: require('../../common/showTips.vue'),
			page: require('../../common/page.vue'),
			providerAccountAdd: require('./providerAccountAdd.vue'),
			providerAccountEdit: require('./providerAccountEdit.vue'),
			providerAccountView: require('./providerAccountView.vue')
		},
		mounted() {
			this.getProviderAccountList();
			this.getProviderKindList();
		},
		methods: {
			/* 查询品牌商列表,分页 ,查看第一页 */
			getProviderAccountListPage: function() {
				this.queryParam.pageNo = 1;
				this.getProviderAccountList();
			},
			/*  查询品牌商列表,分页 */
			getProviderAccountList: function() {
				this.operationType = null;
				this.api.getProviderAccountList(this.queryParam).then(response =>{
					if (response.errorCode == 1) {
						this.providerAccountList = response.data.list;
						this.page.totalCount = response.data.total;
					} else {
						this.error.errorCode = response.errorCode;
						this.error.errorContent = response.errorContent;
					}
				});
			},
			/* 查询品牌商类型列表 */
			getProviderKindList: function() {
				this.api.providerKindAllList().then(response =>{
					this.kindList = response.data;
				})
			},
			/* 排序*/
			sortItem: function(orderBy) {
				if (this.queryParam.orderBy == orderBy && this.queryParam.orderDir == 'ASC') {
					this.queryParam.orderDir = 'DESC';
				} else if (this.queryParam.orderBy == orderBy && this.queryParam.orderDir == 'DESC') {
					this.queryParam.orderBy = '';
					this.queryParam.orderDir = '';
				} else {
					this.queryParam.orderBy = orderBy;
					this.queryParam.orderDir = 'ASC';
				}
				this.getProviderAccountList();
			},
			/* 操作 */
			setOperationType: function(operationType, providerId) {
				if (this.providerId == providerId && this.operationType == operationType) {
					this.providerId = '';
					this.operationType = null;
				} else {
					this.operationType = operationType;
					this.providerId = providerId;
				}
			},

			/* 停用启用 */
			setProviderStatus: function(providerAccountInfo, providerStatus) {
				if (providerAccountInfo.providerStatus == providerStatus) {
					return;
				}
				var status = providerAccountInfo.providerStatus;
				providerAccountInfo.providerStatus = providerStatus;
				this.api.editProviderStatus(providerAccountInfo).then(response =>{
					if (response.errorCode == 1) {} else {
						providerAccountInfo.providerStatus = status;
						this.error.errorCode = response.errorCode;
						this.error.errorContent = response.errorContent;
					}
				})
			},

			/* 删除初始化 */
			delProviderAccountInit: function(providerId) {
				this.operationType = null;
				this.providerId = providerId;
				this.error.type = 1;
				this.error.errorContent = '确认删除此条记录?删除后将不能恢复';
			},

			/* 删除提交 */
			delBack: function() {
				this.api.delProviderAccount({providerId: this.providerId}).then(response =>{
					this.error.errorCode = response.errorCode;
					if (this.error.errorCode == 1) {
						this.error.errorContent = '删除成功';
						this.getProviderAccountList();
					} else {
						this.error.errorContent = response.errorContent;
					}
				})
			},

			/* 关闭新增修改页面 */
			closePage: function(flag) {
				this.operationType = null;
				if (flag){this.getProviderAccountList();}
			}
		},
		data() {
			return {
				queryParam: {
					pageNo: 1,
					pageSize: 20,
					orderBy: null,
					orderDir: null,
					searchMap: {
						providerName: null,
						providerMobile: null,
						providerStatus: null,
						lastModifyName: null
					}
				},
				page: {totalCount: null},
				providerAccountList: null,
				providerId: null,
				kindList: [],
				operationType: null,
				error: {type: 0,errorCode: 0,errorContent: '操作成功'}
			}
		}
	}
</script>
