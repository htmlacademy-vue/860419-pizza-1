<template>
  <main class="content">
    <form action="#" method="post">
      <div class="content__wrapper">
        <h1 class="title title--big">Конструктор пиццы</h1>

        <div class="content__dough">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите тесто</h2>

            <div class="sheet__content dough">
              <label
                v-for="dough in formattedDoughTypes"
                :key="dough.name"
                class="dough__input"
                :class="`dough__input--${dough.type}`"
              >
                <input
                  type="radio"
                  name="dough"
                  :value="dough.type"
                  class="visually-hidden"
                  :checked="dough.name === defaults.dough.name"
                />
                <b>{{ dough.name }}</b>
                <span>{{ dough.description }}</span>
              </label>
            </div>
          </div>
        </div>
        <div class="content__diameter">
          <div class="sheet">
            <h2 class="title title--small sheet__title">Выберите размер</h2>

            <div class="sheet__content diameter">
              <label
                v-for="size in formattedSizes"
                class="diameter__input"
                :class="`diameter__input--${size.type}`"
                :key="size.type"
              >
                <input
                  type="radio"
                  name="diameter"
                  :value="size.type"
                  class="visually-hidden"
                  :checked="size.name === defaults.size.name"
                />
                <span>{{ size.name }}</span>
              </label>
            </div>
          </div>
        </div>

        <div class="content__ingridients">
          <div class="sheet">
            <h2 class="title title--small sheet__title">
              Выберите ингридиенты
            </h2>

            <div class="sheet__content ingridients">
              <div class="ingridients__sauce">
                <p>Основной соус:</p>

                <label
                  v-for="sauce in formattedSauces"
                  class="radio ingridients__input"
                  :key="sauce.value"
                >
                  <input
                    type="radio"
                    name="sauce"
                    :value="sauce.value"
                    :checked="sauce.name === defaults.sauce.name"
                  />
                  <span>{{ sauce.name }}</span>
                </label>
              </div>

              <div class="ingridients__filling">
                <p>Начинка:</p>

                <ul class="ingridients__list">
                  <li
                    v-for="ingredient in formattedIngredients"
                    class="ingridients__item"
                    :key="ingredient.nameLat"
                  >
                    <span
                      class="filling"
                      :class="`filling--${ingredient.nameLat}`"
                    >
                      {{ ingredient.name }}
                    </span>

                    <div class="counter counter--orange ingridients__counter">
                      <button
                        type="button"
                        class="
                          counter__button
                          counter__button--disabled
                          counter__button--minus
                        "
                      >
                        <span class="visually-hidden">Меньше</span>
                      </button>
                      <input
                        type="text"
                        name="counter"
                        class="counter__input"
                        value="0"
                      />
                      <button
                        type="button"
                        class="counter__button counter__button--plus"
                      >
                        <span class="visually-hidden">Больше</span>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="content__pizza">
          <label class="input">
            <span class="visually-hidden">Название пиццы</span>
            <input
              type="text"
              name="pizza_name"
              placeholder="Введите название пиццы"
            />
          </label>

          <div class="content__constructor">
            <div class="pizza pizza--foundation--big-tomato">
              <div class="pizza__wrapper">
                <div class="pizza__filling pizza__filling--ananas"></div>
                <div class="pizza__filling pizza__filling--bacon"></div>
                <div class="pizza__filling pizza__filling--cheddar"></div>
              </div>
            </div>
          </div>

          <div class="content__result">
            <p>Итого: 0 ₽</p>
            <button type="button" class="button button--disabled" disabled>
              Готовьте!
            </button>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<script>
import pizza from "../static/pizza.json";
import { addDoughTypes } from "../common/helpers";
import { addSizeTypes } from "../common/helpers";
import { addIngredientLatNames } from "../common/helpers";
import { addSauceValues } from "../common/helpers";
import DefaultLayout from "../layouts/DefaultLayout";

export default {
  name: "Index",
  layout: DefaultLayout,
  data() {
    return {
      doughTypes: pizza.dough,
      sizes: pizza.sizes,
      ingredients: pizza.ingredients,
      sauces: pizza.sauces,
    };
  },
  computed: {
    formattedDoughTypes() {
      return addDoughTypes(this.doughTypes);
    },
    formattedSizes() {
      return addSizeTypes(this.sizes);
    },
    formattedIngredients() {
      return addIngredientLatNames(this.ingredients);
    },
    formattedSauces() {
      return addSauceValues(this.sauces);
    },
    defaults() {
      return {
        dough: pizza.dough[0],
        size: pizza.sizes[0],
        sauce: pizza.sauces[0],
      };
    },
  },
};
</script>

<style lang="scss">
@import "../assets/scss/layout/content";
@import "../assets/scss/layout/sheet";
@import "../assets/scss/blocks/title";
@import "../assets/scss/blocks/filling";
@import "../assets/scss/visually-hidden";
</style>
