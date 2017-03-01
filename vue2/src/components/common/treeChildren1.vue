<template>
    <li>
        <div
            :class="{bold: isFolder}"
            @click="toggle"
            @dblclick="changeType">
            {{model.name}}
            <span v-if="isFolder">[{{open ? '-' : '+'}}]</span>
        </div>
        <ul v-show="open" v-if="isFolder">
        <item
            class="item"
            v-for="model in model.children"
            :model="model">
        </item>
        <li class="add" @click="addChild">+</li>
        </ul>
  </li>
</template>

<script>
    export default {
        name: 'item',
        props: {
            model: Object
        },
        data() {
            return {
                open: false
            }
        },
        computed: {
            isFolder: function () {
            return this.model.children &&
                this.model.children.length
            }
        },
        methods: {
            toggle: function () {
                if (this.isFolder) {
                    this.open = !this.open
                }
            },
            changeType: function () {
                if (!this.isFolder) {
                    this.set(this.model, 'children', [])
                    this.addChild()
                    this.open = true
                }
            },
            addChild: function () {
                this.model.children.push({
                    name: 'new stuff'
                })
            }
        }

    }
</script>