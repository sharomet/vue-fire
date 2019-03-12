<template>
  <aside id="aside">
      <ul class="user-aside list-unstyled">
          <li class="user-item">
              <div class="user-item__avatar">
                  <img src="https://via.placeholder.com/40" class="img-fluid rounded-circle" alt="">
              </div>
              <div class="user-container">
                <h2 class="user-container__name mb-0">John Smith</h2>
                <small class="user-container__quote">Lorem Ipsum is simply dummy.</small>
              </div>
          </li>
      </ul>
  </aside>
</template>

<script>
export default {};
</script>
<style lang="scss">
@import "../../assets/scss/variables";
#aside {
  background-color: $primary;
  padding: 0 15px 15px;
  grid-area: aside;
}
.user-aside {
    margin-left: -15px;
    margin-right: -15px;
}
.user-item {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 5px 10px;
    &__avatar {
        flex: 0 0 40px;
        max-width: 40px;
        padding-right: 5px;
        img {
            border: 2px solid #fff;
        }
    }
    &:hover {
        background-color: darken($primary, 5%)
    }
}
.user-container {
    flex: 0 1 100%;
    max-width: 100%;
    &__name {
        font-size: 1rem;
        color: #fff;
    }
    &__quote {
        color: $light;
    }
}
</style>
