<template>
    <Page>
        <ActionBar>
            <Label text="Home"/>
        </ActionBar>

        <GridLayout>
            <Label class="info" :text="lastTimestamp" />
        </GridLayout>
    </Page>
</template>

<script>
import {
    requestAnimationFrame,
    cancelAnimationFrame,
} from '@nativescript/core/animation-frame'

export default {
    data() {
        return {
            lastTimestamp: 0,
        }
    },
    mounted() {
        requestAnimationFrame(this.updateTimestamp)
    },
    methods: {
        updateTimestamp(timestamp) {
            this.lastTimestamp = timestamp
            requestAnimationFrame(this.updateTimestamp)
        },
    },
}
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }
</style>
