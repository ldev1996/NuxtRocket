<template>
    <div class="min-h-screen flex flex-col dark">
        <!-- Header -->
        <header class="p-4 bg-surface text-foreground">
            <h1 class="h1 text-primary mb-2">🚀 Nuxt Rocket</h1>
            <ThemeSwitcher />
        </header>

        <!-- Main Content -->
        <main class="flex-1 p-6 bg-base">
            <button
                class="btn-secondary"
                @click="isModalOpen = true"
            >
                Open Modal
            </button>
            <Modal
                v-model:open="isModalOpen"
                title="Nuxt Rocket is Amazing!"
            >
                <p>Click outside this modal to close it.</p>
            </Modal>
            <p
                _text="~ justify"
                _mb-2
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse massa quam,
                vehicula nec dignissim sit amet, accumsan eget ex. Morbi viverra feugiat lacus in
                mattis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ultrices
                sapien sit amet dolor feugiat, id viverra sem facilisis. Morbi commodo libero id
                dignissim luctus. Sed in leo at magna tincidunt congue eget et nunc. Nunc pharetra
                ac risus eu elementum. Proin id massa leo. Sed vitae vehicula ligula. Vestibulum
                ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus
                justo augue, dapibus ut volutpat et, auctor a justo. Duis gravida, est non lobortis
                maximus, lorem magna tincidunt orci, vitae ornare erat nisl vitae urna. Donec eu
                diam id libero porttitor ornare et at tellus.
            </p>
            <p
                _text="~ justify"
                _mb-4
            >
                Duis consectetur odio id ex imperdiet dictum. Mauris metus magna, convallis et risus
                a, pellentesque dapibus urna. Nam facilisis diam eget ante maximus, auctor posuere
                sem euismod. Duis condimentum lacus non tortor sodales fermentum. Ut sed ligula
                enim. Vivamus ultrices, mi at suscipit gravida, mi nisi malesuada est, ac placerat
                metus lectus sed tortor. Vestibulum eu porttitor felis. Morbi posuere fringilla
                laoreet. Vestibulum condimentum pulvinar mi at rutrum.
            </p>
            <div class="card-hover my-2">
                <h2
                    _h2
                    _text-foreground
                >
                    A Card
                </h2>
                <p _text="~ muted">
                    Integer vitae lectus est. Curabitur hendrerit ac dolor tristique facilisis. Sed
                    malesuada, nisi ut condimentum placerat, eros tortor faucibus lacus, et
                    tristique enim urna eget tellus. Suspendisse consectetur at ex vitae dignissim.
                    Vivamus commodo orci dui, vitae suscipit risus porta eget. Etiam consequat
                    mauris et lacinia dignissim.
                </p>
            </div>
            <div
                _flex="~ row"
                _gap-2
                _mt-4
            >
                <button _btn-primary>Button</button>
                <button _btn-secondary>Button</button>
                <Button _btn-success>Button</Button>
                <button _btn-warning>Button</button>
                <button _btn-danger>Button</button>
            </div>
        </main>

        <!-- Footer -->
        <footer class="p-4 text-center bg-surface text-muted border-t border-border">
            A Footer
        </footer>
    </div>
</template>

<script setup lang="ts">
    const isModalOpen = ref(false)
</script>
