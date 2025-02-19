<template>
    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li class="page-item">
                <a class="page-link" href="#">Previous</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" href="#">Next</a></li>
        </ul>
    </nav>
</template>

<script setup>


    const onPageChange = (event) => {
        console.log('Page changed:', event.page);
    };
</script>

<style scoped>
    .pagination-container {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }
</style>
