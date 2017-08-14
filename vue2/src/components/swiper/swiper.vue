<template>
    <div class="clearfix swiper-krpano-mask">
        <div>
            <div class="krpano-back"></div>
            <div id="swiper-title" class="swiper-title">{{pageTitle}}</div>
        </div>
        <div class="krpano-mask">
            <div class="swiper-container parent-wrapper">
                <div class="swiper-wrapper" v-if="!!arrTotal.length">
                    <template v-for="(item, index) in arrTotal">
                        <div class="swiper-slide" v-for="(list,childIndex) in item.list" :key="index">
                            <a href='#' v-if="item.name=='全景图'" target="_blank"> <i class="qj-link"></i></a>
                            <a href='#' v-if="item.name=='航拍'" target="_blank"> <i class="hp-link"></i></a>
                            <a href='#' v-if="item.name=='3D建模'" target="_blank"> <i class="threeD-link"></i></a>
                            <img class="common-img" :class="[item.name=='平面图'?'':'blur-img']" :data-arrIndex="index" :data-item='(childIndex + 1) + "/" + item.list.length' :src="list.src" alt="">
                        </div>
                    </template>
                </div>
            </div>
        </div>
    
        <div class="nav-krpano-list">
            <div class="swiper-container" id="nav-swiper">
                <div class="swiper-wrapper">
                    <template v-if="!!arrTotal.length">
                        <div class="swiper-slide" :class="[index == 0?'active-nav':'']" v-for="(item,index) in arrTotal" :key="index">
                            {{item.name}}
                        </div>
                    </template>
                </div>
            </div>
        </div>
    
    </div>
</template>


<script>
import '../../assets/css/swiper.min.css'
import '../../assets/css/krpanoSwiper.css'
import Swiper from 'swiper'
export default {
    data() {
        return {
            activeIndex: 0,
            arrTotal: [],
            plainList: [
                {
                    src: require("../../assets/temp/plain1.jpg")
                },
                {
                    src: require("../../assets/temp/plain2.jpg")
                },
                {
                    src: require("../../assets/temp/plain3.jpg")
                }
            ],
            qjList: [
                {
                    src: require("../../assets/temp/quanjing.jpg")
                },
            ],
            hpList: [
                {
                    src: require("../../assets/temp/hangpai.jpg")
                },
            ],
            threeDList: [
                {
                    src: require("../../assets/temp/3d.jpg")
                },
            ],
            testList: [
                {
                    src: require("../../assets/temp/plain3.jpg")
                },
                {
                    src: require("../../assets/temp/plain2.jpg")
                }
            ]
        }
    },
    computed: {
        pageTitle() {
            if (this.arrTotal.length && this.arrTotal[0].list.length) {
                let title = $('.parent-wrapper .swiper-slide').eq(this.activeIndex).find('.common-img').attr('data-item');
                return title || ('1' + '/' + this.arrTotal[0].list.length);
            }
            return ''
        }
    },
    mounted() {
        var self = this;
        self.mergeArr();

        self.$nextTick(function () {
            var parentWrapper = new Swiper('.parent-wrapper', {
                onSlideChangeStart: function (swiper, event) {
                    self.activeIndex = swiper.activeIndex;
                    updateNavPosition();
                }
            });
            var navSwiper = new Swiper('#nav-swiper', {
                watchSlidesProgress: true,
                watchSlidesVisibility: true,
                slidesPerView: 4,
                onTap: function () {
                    alert(11);
                    let toIndex;
                    let title = '1' + '/' + self.arrTotal[navSwiper.clickedIndex].list.length;
                    let imgs = $('.parent-wrapper .common-img');
                    imgs.each(function (index, item) {
                        let dataItem = $(this).attr('data-item'),
                            dataArrindex = $(this).attr('data-arrindex');
                        if (navSwiper.clickedIndex == dataArrindex && dataItem == title) {
                            toIndex = $(this).parents('.swiper-slide').index();
                            return false;
                        }
                    });
                    parentWrapper.slideTo(toIndex);
                }
            });

            function updateNavPosition() {
                let navActiveIndex = $('.parent-wrapper .swiper-slide').eq(parentWrapper.activeIndex).find('img').attr('data-arrindex');
                if ($('#nav-swiper .swiper-slide').eq(navActiveIndex).hasClass('active-nav')) {
                    return;
                }

                $('#nav-swiper .active-nav').removeClass('active-nav');
                let activeNav = $('#nav-swiper .swiper-slide').eq(navActiveIndex).addClass('active-nav');

                if (!activeNav.hasClass('swiper-slide-visible')) {
                    if (activeNav.index() > navSwiper.activeIndex) {
                        let thumbsPerNav = Math.floor(navSwiper.width / activeNav.width()) - 1
                        navSwiper.slideTo(activeNav.index() - thumbsPerNav)
                    } else {
                        navSwiper.slideTo(activeNav.index())
                    }
                }
            }


        });

    },
    methods: {
        mergeArr() {
            let self = this
            !!self.plainList.length && self.arrTotal.push({ list: self.plainList, name: '平面图' });
            !!self.qjList.length && self.arrTotal.push({ list: self.qjList, name: '全景图' });
            !!self.hpList.length && self.arrTotal.push({ list: self.hpList, name: '航拍' });
            !!self.threeDList.length && self.arrTotal.push({ list: self.threeDList, name: '3D建模' });
            !!self.testList.length && self.arrTotal.push({ list: self.testList, name: '测试' });
        }
    }
}
</script>      