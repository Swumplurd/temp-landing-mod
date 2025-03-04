function buildShoppingCartItem(id, packageTitle, packagePrice, currencyText = "MXN") {
    // Nodes
    const containerNode = document.createElement("div");
    const titleContainerNode = document.createElement("div");
    const titleNode = document.createElement("p");
    const bodyNode = document.createElement("div")
    const priceNode = document.createElement("p");
    const currencyNode = document.createElement("span");
    const deleteNode = document.createElement("span");

    // Styles
    containerNode.classList.add("d-flex", "align-items-baseline");
    containerNode.id = id;

    titleContainerNode.classList.add("col-6");

    titleNode.classList.add("m-0");
    titleNode.style = "font-size: 14px;font-weight: 500;";
    titleNode.textContent = packageTitle;

    bodyNode.classList.add("col-6", "d-flex", "justify-content-end", "align-items-end", "gap-3");

    currencyNode.style = "font-size: 12px;";
    currencyNode.textContent = currencyText;

    priceNode.classList.add("m-0");
    priceNode.style = "font-size: 14px;font-weight: 500;";
    priceNode.textContent = packagePrice;

    deleteNode.classList.add("material-symbols-outlined");
    deleteNode.textContent = "delete";
    
    priceNode.appendChild(currencyNode);
    bodyNode.appendChild(priceNode);
    bodyNode.appendChild(deleteNode);
    titleContainerNode.appendChild(titleNode);
    containerNode.appendChild(titleContainerNode);
    containerNode.appendChild(bodyNode);

    return containerNode;
}

/**
 * <div class="d-flex align-items-baseline">
                          <div class="col-6">
                            <p class="m-0" style="font-size: 12px;">Familiar Más</p>
                          </div>
                          <div class="col-6 d-flex justify-content-end align-items-end gap-3">
                            <p class="m-0" style="font-size: 14px;font-weight: 500;">
                              $329 <span style="font-size: 12px;">MXN</span></p>
                            <span class="material-symbols-outlined">
                              delete
                            </span>
                          </div>
                        </div>
 */