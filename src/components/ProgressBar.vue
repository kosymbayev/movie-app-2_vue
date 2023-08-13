<template>
    <div class="progress-bar" :style="{ background: `conic-gradient(${progressColor} ${roundedPercent}%, #323232 0)` }">
        <div class="progress-bar-number">
            {{ roundedPercent }}
            <div class="progress-bar-percent">%</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProgressBar',
    props: 
    {
        percent: Number,
    },
    computed:
    {
        roundedPercent()
        {
            return Math.round(this.percent * 10);
        },
        progressColor()
        {
            if( this.roundedPercent >= 80 ) {
                return 'green'
            }
            else if ( this.roundedPercent < 80 && this.roundedPercent >= 50 ) {
                return 'yellow'
            }
            else if ( this.roundedPercent < 50 ) {
                return 'red'
            }
        }
    }
}
</script>

<style>
.progress-bar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: relative;
    margin-top: -24px;
}
.progress-bar-number {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #181818;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #f3f3f3;
}
.progress-bar-percent {
    font-size: 12px;
    margin-top: -4px;
}
</style>