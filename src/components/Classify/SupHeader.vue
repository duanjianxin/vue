<template>
  <div>
    <div class="section-supHeader" v-if="tabDes">
      <div id="supplierDes">
        <span>{{title}}</span>
        <i class="iconfont icon-more" @click="tabSupplierDes"></i>
      </div>
      <a href="javascript:;">
        <p>
          <img src="https://bfs.biyao.com/group1/M00/32/7B/rBACW1q8LM2AO4lCAAEW7I3_-xY073.jpg" onerror="javascript:this.src='https://static.biyao.com/m/img/master/base/trans.png'">
        </p>
      </a>
    </div>
    <div class="section-supDes" v-if="!tabDes">
      <dl>
        <dt class="title">商家概况</dt>
        <dd>
          <span>商家名称：TOM FOSSEY 男装</span>
          <a href="javascript:;" id="liveServerBtn">
            <b class="live-icon"></b>客服</a>
        </dd>
      </dl>
      <dl>
        <dt>商家详情</dt>
        <dd>
          <p class="supplier-des">Tom Fossey，是一个集高级面料研发、设计、生产销售为一体的高端男装西服品牌。其生产基地作为国内顶尖的西服制造商之一，拥有数十年与意大利百年男装品牌Ermenegildo Zegna Group（杰尼亚集团）合资生产的技术经验，同时也曾为全球诸多国际一线男装品牌 Tom Ford（汤姆·福特）、 Bvlgari（宝格丽）、Gucci（古驰）、Givenchy（纪梵希）、Dunhill（登喜路）、Versace（范思哲）等提供设计、生产等全方位服务。 欧洲一线工艺品质，更符合亚洲人身型的版型设计，工厂直达消费者的零中间商价位，Tom Fossey，让您的大牌之梦，触手可及</p>
        </dd>
      </dl>
      <i class="close" @click="tabSupplierDes"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: ["childTitle"],
  data() {
    return {
      title: this.$props.childTitle,
      tabDes: true
    };
  },
  methods: {
    tabSupplierDes() {
      this.tabDes = !this.tabDes;
    }
  }
};
</script>

<style lang="scss" scoped="" type="text/css">
.section-supHeader {
  #supplierDes {
    position: relative;
    height: 1.2rem;
    padding-left: 0.4rem;
    line-height: 1.2rem;
    box-shadow: 1px 1px 5px rgba(7, 0, 2, 0.2);
    -webkit-box-shadow: 1px 1px 5px rgba(7, 0, 2, 0.2);
    -moz-box-shadow: 1px 1px 5px rgba(7, 0, 2, 0.2);
    background: #fff;
    z-index: 2;
    span {
      color: #523568;
      font-size: 0.32rem;
      display: inline-block;
      width: 6rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    i {
      float: right;
      width: 1rem;
      height: 1rem;
      margin-top: 0.1rem;
      line-height: 1rem;
      font-size: 0.68rem;
    }
  }
  a {
    p {
      img {
        height: 3.85rem;
        width: 7.5rem;
        background: url(https://static.biyao.com/m/img/master/base/depic.png?v=biyao_00fa500)
          no-repeat center;
      }
    }
  }
}
.none {
  display: none;
}
.section-supDes {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  min-height: 100%;
  background-color: #f5f5f5;
  dl {
    padding: 0 0.24rem;
    margin-bottom: 0.3rem;
    background: #fff;
    dt {
      height: 0.9rem;
      line-height: 0.9rem;
      font-size: 0.32rem;
      color: #333;
      border-bottom: solid 0.01rem #ccc;
    }
    dd {
      padding: 0.24rem 0;
      line-height: 0.6rem;
      font-size: 0.24rem;
      color: #333;
      span {
        display: inline-block;
        height: 0.96rem;
        line-height: 0.96rem;
        width: 5.6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      a {
        float: right;
        width: 1.32rem;
        height: 0.92rem;
        border-left: 0.01rem solid #ccc;
        line-height: 0.3rem;
        text-align: center;
        .live-icon {
          display: block;
          height: 0.6rem;
          width: 1.3rem;
          background: url(https://static.biyao.com/m/img/base/im.png?v=biyao_05c279a)
            no-repeat center center;
          background-size: 0.52rem 0.52rem;
        }
      }
      p {
        padding: 0.24rem 0;
        line-height: 0.6rem;
        font-size: 0.24rem;
        color: #333;
        text-indent: 2em;
      }
    }
  }
  .close {
    cursor: pointer;
    display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    background: url(https://static.biyao.com/m/img/icon/icon_close@2x.png?=biyaob1eb272)
      no-repeat center center;
    background-size: 100% 100%;
    position: absolute;
    top: 0.2rem;
    right: 0.2rem;
  }
}
</style>
