<script setup>

</script>

<template>
    <header>
        <div class="header container-fluid">
            <div class="header-slot">
                <HeaderLogo />
            </div>
            <div class="header-slot">
                <a class="link" href="//vape-live.ping-u.com.my/dashboard">
                    <span>Return to Vape Management</span>
                    <BadgeBase 
                        type="number" 
                        :badge="20" 
                        :size="25"
                        :position="{x: 0, y: 0}"
                    />
                    <BadgeBase />
                </a>
                <HeaderMode />
            </div>
        </div>
    </header>
</template>


<style lang="scss" scoped>
    header {
        position: relative;
        height: 100%;
    }

    .header {
        @include flex(row);
        align-items: center;
        justify-content: space-between;
        height: inherit;
        border-bottom: 1px solid;
        @include border(#dadada);

        &-slot {
            @include flex(row, nowrap);
            align-items: center;
        }
    }

    .link {
        position: relative;
        padding: 10px;
        @include flex(row, nowrap);
    }
</style>