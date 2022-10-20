/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    while (count) {
        let element = document.createElement(tag);
        element.innerHTML = content;
        document.body.insertAdjacentElement('beforeend', element);
        count--;
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/

export function generateTree(childrenCount, level) {
    const parent__element = (childrenCount, lvl) => {
        let child__element = document.createElement('div');
        let i = 0;
        child__element.setAttribute('class', `item_${lvl}`);
        if (lvl < level) {
            while (i < childrenCount) {
                child__element.insertAdjacentElement(
                    'beforeend',
                    parent__element(childrenCount, lvl + 1),
                );
                i++;
            }
        }
        return child__element;
    };
    return parent__element(childrenCount, 1);
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let tree = generateTree(2, 3);
    let list = tree.getElementsByClassName('item_2');
    for (let i = 0; i < list.length; i++) {
        let newChild = document.createElement('section');
        newChild.setAttribute('class', 'item_2');
        newChild.innerHTML = list[i].innerHTML;
        tree.replaceChild(newChild, list[i]);
    }
    return tree;
}
