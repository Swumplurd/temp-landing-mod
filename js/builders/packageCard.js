function buildPackageCard({
  idproducto,
  nombre,
  productos_beneficios,
  precio,
  precio_sin_paramount,
  precio_obsoleto,
  clave_producto,
  tipo_producto,
  canales
}, forced) {
  const parentContainer = document.createElement("div");
  parentContainer.classList.add("card-parent")
  // Create the card container
  const cardContainer = document.createElement("div");
  // const cardContent = document.createElement("div");
  // cardContent.classList.add("card-content")
  const classList = ["card", "bg-white", "py-2"]
  if (idproducto === _recommendedPackageId) {
    classList.push("cardPack-recommended");
    // if(!forced){
    //   classList.push("d-none");
    //   classList.push("d-md-block");
    // }
    const recommendedTitle = document.createElement("div");
    recommendedTitle.classList.add("title-recommended");
    const recommendedTitleText = document.createElement("p");
    recommendedTitleText.classList.add("mb-0");
    recommendedTitleText.textContent = queryParams.recommendedPackage ? "PAQUETE RECOMENDADO" : "EL MÁS VENDIDO";
    recommendedTitle.appendChild(recommendedTitleText);
    cardContainer.appendChild(recommendedTitle);
  }
  else {
      classList.push("cardPack-platforms");
    if (idproducto === 81120 || idproducto === 81130 || idproducto === 81140 ) {
      cardContainer.style = "min-height: fit-content"
    }
  }
  cardContainer.classList.add(...classList);
  cardContainer.id = idproducto;


  //se crea el anuncio de bloqueo de NFL Pass
  const anuncioBloqueoNfl = document.createElement("div")
  anuncioBloqueoNfl.classList.add("back-opacity-nfl","package-live-disabled","d-none")
  const anuncioBloqueo = document.createElement("div")
  anuncioBloqueo.classList.add("add-ur-pack","d-flex","align-items-center","text-nfl")
  anuncioIcon = document.createElement("span")
  anuncioIcon.classList.add("material-symbols-outlined","look-nfl")
  anuncioIcon.innerHTML = "lock"
  anuncio = document.createElement("p")
  anuncio.classList.add("mb-0")
  anuncio.innerHTML = "Esta oferta no está disponible con GAME PASS"

  anuncioBloqueo.appendChild(anuncioIcon)
  anuncioBloqueo.appendChild(anuncio)
  anuncioBloqueoNfl.appendChild(anuncioBloqueo)

  //Card desabilitada
  const cardDisabled = document.createElement("div");
  cardDisabled.classList.add("new-back-opacity", "package-disabled", "d-none");
  cardDisabled.id = "card-package-disabled-" + idproducto;

  const cardDisabledContent = document.createElement("div");
  cardDisabledContent.classList.add("add-ur-pack");

  const cardDisabledText = document.createElement("p");
  cardDisabledText.classList.add("mb-0");
  const disabledText = document.createTextNode("Incluido en el paquete que seleccionaste");
  cardDisabledText.appendChild(disabledText);

  cardDisabledContent.appendChild(cardDisabledText);
  cardDisabled.appendChild(cardDisabledContent);
  cardContainer.appendChild(cardDisabled);
  cardContainer.appendChild(anuncioBloqueoNfl)


  // Create the card header
  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-Header");

  // Create the title and subtitle
  const packageTitle = document.createElement("p");
  packageTitle.classList.add(
    "text-uppercase",
    "fw-light",
    "pt-3",
    "mb-0",
    "f10mob"
  );
  packageTitle.textContent = "Paquete";

  const packageSubtitle = document.createElement("h3");
  packageSubtitle.classList.add(
    "text-uppercase",
    "fw-bold",
    "f21"
  );
  packageSubtitle.textContent = nombre;

  
  //Append chanels tab
  const packageLiveChannels = document.createElement("span");
  if (idproducto === 8113) {
    packageLiveChannels.classList.add(
      "live-channelsRecom"
    );
  }else{
    packageLiveChannels.classList.add(
      "live-channels"
    );
  }  
  packageLiveChannels.textContent = `Incluye ${canales} canales en vivo`;


  // Append the input, title, and subtitle to the card header
  cardHeader.appendChild(packageTitle);
  cardHeader.appendChild(packageSubtitle);
  cardHeader.appendChild(packageLiveChannels);

  // Create the card body
  const cardBody = document.createElement("div");
  cardBody.classList.add(
    "card-Body",
    "d-flex",
    "flex-column",
    "align-items-center"
  );

  // Create platform logos
  const platformLogosContainer = document.createElement("div");
  // if(productos_beneficios.length <=6){
  platformLogosContainer.classList.add(
    "d-flex",
    "flex-wrap",
    "gap-2",
    "platformsPacks",
    "my-3",
    "px-3",
    "px-md-4",
    "justify-content-center",
    "align-content-start"
  );
  productos_beneficios.forEach(
    ({ idBeneficio, nombreBeneficio, imagenBeneficio }) => {
      const logo = document.createElement("img");
      logo.id = idBeneficio;
      logo.alt = nombreBeneficio;
      logo.src = imagenBeneficio;
      if (logo.id != 10)
        platformLogosContainer.appendChild(logo);
    }
  );
  // }
  // else{
  //   platformLogosContainer.classList.add(
  //   "d-flex",
  //   "flex-wrap",
  //   "gap-2",
  //   "platformsPacks",
  //   "mt-3",
  //   "mb-2",
  //   "px-3",
  //   "justify-content-center",
  //     "align-content-start"
  //   );
  //   productos_beneficios.forEach(
  //     ({ idBeneficio, nombreBeneficio, imagenBeneficio }) => {
  //       const logo = document.createElement("img");
  //       logo.classList.add("img-small")
  //       logo.id = idBeneficio;
  //       logo.alt = nombreBeneficio;
  //       logo.src = imagenBeneficio;
  //       platformLogosContainer.appendChild(logo);
  //     }
  //   );
  // }




  // Botón "VER DETALLE" que invoca el modal
  const viewDetailButton = document.createElement("button");
  viewDetailButton.type = "button";
  viewDetailButton.onclick = () => {
    // Aquí se abre el modal con la función openModal que debe estar definida en tu archivo JS
    openModal('packageModal', idproducto);  // Asegúrate de pasar el idproducto para cargar la información relevante
  };
  viewDetailButton.classList.add("btn-channelsModal", "my-3", "justify-content-center");
  viewDetailButton.textContent = "VER DETALLE";

  function openModal(modalId, idproducto) {
    console.log(idproducto, modalId);
    const modal = document.getElementById(modalId);

    // Lógica para cargar la información del producto en el modal
    const benefict = beneficts.paquetes.find(b => b.idproducto === idproducto);
    document.getElementById('packageModalName').innerText = benefict.nombre;
    const accordion = document.getElementById('packageModalAccordion');
    accordion.innerHTML = '';
    benefict.productos_beneficios.forEach((pb) => {
      const accordionItem = buildPackageModalAccordionItem(pb);
      accordion.appendChild(accordionItem);
    });

    // Crear y mostrar el div modal-backdrop
    const backdrop = document.createElement('div');
    backdrop.classList.add('modal-backdrop', 'fade');
    document.body.appendChild(backdrop);
    setTimeout(() => backdrop.classList.add('show'), 10);

    // Establece el estilo de display para mostrar el modal
    modal.style.display = 'block';

    // Agrega un evento para cerrar el modal cuando se hace clic fuera de él
    window.onclick = (event) => {
      if (event.target === modal) {
        closeModal(modalId);
      }
    };
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';

    // Eliminar el div modal-backdrop
    const backdrop = document.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.classList.remove('show');
      setTimeout(() => backdrop.remove(), 150); // Ajusta este tiempo según la animación
    }
  }

  // Create pricing and savings section
  const pricingSection = document.createElement("div");
  pricingSection.classList.add("d-flex", "flex-column", "align-items-center");

  const priceContainer = document.createElement("div");
  const priceContainerClassList = ["d-flex",
    "justify-content-center",
    "align-items-center",
    "gap-1"];
  // if(idproducto === _recommendedPackageId){
  //   priceContainerClassList.push("mt-xl-3");
  // }
  // else{
  //   priceContainerClassList.push("mt-xl-5");
  // }

  priceContainer.classList.add(...priceContainerClassList);

  const price = document.createElement("h3");
  price.classList.add("mb-0", "mt-3", "f58", "fw-bold");
  price.textContent = `$${precio}`;
  //price.textContent = `$${precio_sin_paramount>0?precio_sin_paramount:precio}`;  

  const priceSuffix = document.createElement("div");
  const priceSuffixParagraph1 = document.createElement("p");
  priceSuffixParagraph1.classList.add("lh-1", "mt-3", "mb-0");
  priceSuffixParagraph1.textContent = "mxn";
  const priceSuffixParagraph2 = document.createElement("p");
  priceSuffixParagraph2.classList.add("mb-0", "f10mob");
  priceSuffixParagraph2.innerHTML = "<b>al mes</b>";

  const discountContainer = document.createElement("div");
  const discountNumber = document.createElement("div");
  const discountText = document.createElement("div");

  discountContainer.classList.add("d-flex", "flex-column", "align-items-center", "justify-content-center", "discount-container");
  discountNumber.classList.add("text-white", "discount-number");
  discountText.classList.add("text-white", "discount-text");

  discountNumber.textContent = `${Math.round((precio_obsoleto - precio) / precio_obsoleto * 100)}%`;
  //discountNumber.textContent = `${Math.round((precio_obsoleto - (precio_sin_paramount>0?precio_sin_paramount:precio)) / precio_obsoleto * 100)}%`
  
  discountText.textContent = "Ahorras";

  discountContainer.appendChild(discountText);
  discountContainer.appendChild(discountNumber);


  priceSuffix.appendChild(priceSuffixParagraph1);
  priceSuffix.appendChild(priceSuffixParagraph2);

  priceContainer.appendChild(price);
  priceContainer.appendChild(priceSuffix);
  priceContainer.appendChild(discountContainer);


  const priceComparison = document.createElement("p");
  priceComparison.classList.add("f14", "my-1");
  priceComparison.textContent = `Por separado pagarías $${precio_obsoleto}/al mes`;

  const priceSavings = document.createElement("p");
  priceSavings.classList.add("f18", "mb-1", "fw-bold", "ahorroMvs");
  priceSavings.innerHTML = `Por separado pagarías <span style="text-decoration:line-through;">$${precio_obsoleto}</span>`;

  pricingSection.appendChild(priceContainer);
  //pricingSection.appendChild(priceComparison);
  pricingSection.appendChild(priceSavings);

  // Create subscription button
  const subscribeButtonContainer = document.createElement("div");
  subscribeButtonContainer.classList.add(
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "px-2",
    "mt-2",
    "mb-3"
  );

  const subscribeButton = document.createElement("div");

  subscribeButton.classList.add(
    "btn",
    "rounded-pill",
    "text-uppercase",
    "text-white",
  );

  const subscribeLink = document.createElement("button");
  subscribeLink.id = `subscribe-button-package-${idproducto}`
  subscribeLink.textContent = "Añadir al carrito";
  subscribeLink.classList.add("btn-subscribe", "pck-button-subscribe");

  subscribeButton.appendChild(subscribeLink);
  subscribeButtonContainer.appendChild(subscribeButton);

  // Append the created elements to their respective parent elements
  cardBody.appendChild(platformLogosContainer);
  // //Hack for entretenimiento más
  // if(idproducto === _entretenimientoMasId){
  //   const hack = document.createElement("img");
  //   hack.classList.add(
  //   "img-small",
  //   "mx-1",
  //   "mb-2",
  //   );
  //   hack.alt="cindie";
  //   hack.style="visibility: hidden;";
  //   hack.src="assets/plataformas/cindie.webp"
  //   cardBody.appendChild(hack);
  // }
  // //Hack for familiar
  // if(idproducto === _recomendadoId){
  //   const hackfam = document.createElement("img");
  //   hackfam.classList.add(
  //   "img-small",
  //   "mx-1",
  //   "mb-2",
  //   );
  //   hackfam.alt="cindie";
  //   hackfam.style="visibility: hidden;";
  //   hackfam.src="assets/plataformas/cindie.webp"
  //   platformLogosContainer.appendChild(hackfam);
  // }
  const reptv = document.createElement("div")
  reptv.innerHTML = `<div class="text-center mx-3"><h4>172 canales de TV</h4><div>
        <a type="button" class="btn-channelsModal my-3 justify-content-center" name="modal-deportes" style="text-decoration: none; font-size: 18px;">
          <span class="material-symbols-outlined">visibility</span>
          <span style="text-decoration:underline;">VER TODOS LOS CANALES</span>
        </a>
      </div><div class="d-flex justify-content-center">
        <img style="width: 42px; height: 42px" src="assets/grabacion/replaytv.webp" alt="Replay TV" class="features-replay-icon">
      <p>Pausa y repite tus <br> programas de TV</p></div></div>`

  cardBody.appendChild(viewDetailButton);
  if (idproducto == 81130) {
    cardBody.appendChild(reptv)
  }
  cardBody.appendChild(pricingSection);
  cardBody.appendChild(subscribeButtonContainer);

  cardContainer.appendChild(cardHeader);
  cardContainer.appendChild(cardBody);

  const cardFooter = document.createElement("div");
  cardFooter.id = `card_footer_${idproducto}`
  const cardFooterText = document.createElement("div");
  const cardFooterButton = document.createElement("button");

  cardFooter.classList.add("d-flex", "flex-column", "align-items-center", "card-footer", "d-none");
  cardFooterText.classList.add("card-footer-text");
  cardFooterButton.classList.add("card-footer-button");

  cardFooterText.innerHTML = "AÑADE EL PAQUETE ESENCIAL CON <strong>80 CANALES DE TV</strong></br> Y OBTÉN UN <strong>DESCUENTO ADICIONAL<strong>";
  cardFooterButton.innerText = "Agregar";

  cardFooter.appendChild(cardFooterText);
  cardFooter.appendChild(cardFooterButton);

  parentContainer.appendChild(cardContainer)
  parentContainer.appendChild(cardFooter);

  cardFooterButton.addEventListener("click", () => {
    document.getElementById("live-selector").click()
    document.getElementById("live-selector").scrollIntoView({ behavior: "smooth" })
  })


  if (_netflixPackages.includes(idproducto)) {
    //Only for packages that have netflix
    const netflixContainer = document.createElement("div");
    netflixContainer.id = "ntfx_cnt_" + idproducto;
    netflixContainer.classList.add("order-3",
      "col-12",
      "px-0",
      "netflixP",
      "d-none"
    );
    const netflixSeparator = document.createElement("div");
    netflixSeparator.classList.add("AA_footer-pack",
      "AA_pack-entre",
      "col-12",
      "text-center",
      "d-flex",
      "justify-content-center");
    netflixContainer.appendChild(netflixSeparator);
    const netflixPackContainer = document.createElement("div");
    netflixPackContainer.classList.add(
      "pack-container",
      "d-flex",
      "flex-wrap",
      "justify-content-between",
      "align-items-center",
      "AddNetflix"
    );
    const netflixCol = document.createElement("div");
    netflixCol.classList.add("col-12");
    const netflixP1 = document.createElement("p");
    netflixP1.classList.add("tit01", "text-right", "mb-0");
    netflixP1.innerHTML = 'Crece tu paquete con <span class="RojoNet">NETFLIX</span> PREMIUM';
    const netflixP2 = document.createElement("p");
    netflixP2.classList.add("tit03", "text-right");
    netflixP2.innerHTML = '<b>Calidad 4K</b> disponible hasta <b>4TV´s</b>';
    netflixCol.appendChild(netflixP1);
    netflixCol.appendChild(netflixP2);
    netflixPackContainer.appendChild(netflixCol)
    const netflixCol2 = document.createElement("div");
    netflixCol2.classList.add("col-12");
    const netflixPriceContainer = document.createElement("div");
    netflixPriceContainer.classList.add(
      "d-flex",
      "justify-content-center",
      "align-items-center",
      "gap-1",
      "mt-xl-3"
    );

    const netflixPriceNumber = document.createElement("h3");
    netflixPriceNumber.classList.add("mb-0", "f32", "fw-bold");
    netflixPriceNumber.style.marginLeft = "5px";
    netflixPriceNumber.innerText = "$80"

    const netflixPriceText = document.createElement("p");
    netflixPriceText.classList.add("lh-1", "mb-0");
    netflixPriceText.innerHTML = "mxn <br><b>al mes</b>";



    const netflixCheckboxContainer = document.createElement("div");
    netflixCheckboxContainer.classList.add(
      "d-flex",
      "align-items-center",
    );

    const netflixCheckbox = document.createElement("input");
    netflixCheckbox.id = "ntfx_chck_" + idproducto
    netflixCheckbox.type = "checkbox";
    netflixCheckbox.classList.add("check-netflix");
    netflixCheckboxContainer.appendChild(netflixCheckbox);

    const netflixCheckboxLabel = document.createElement("label");
    netflixCheckboxLabel.classList.add("span");
    netflixCheckboxLabel.setAttribute("for", "checkNetflix")
    netflixCheckboxContainer.appendChild(netflixCheckboxLabel);

    netflixPriceContainer.appendChild(netflixCheckboxContainer);
    netflixPriceContainer.appendChild(netflixPriceNumber);
    netflixPriceContainer.appendChild(netflixPriceText);

    netflixCol2.appendChild(netflixPriceContainer);
    netflixPackContainer.appendChild(netflixCol2);


    netflixContainer.appendChild(netflixPackContainer);

    parentContainer.append(netflixContainer);

    netflixCheckbox.addEventListener("click", async (e) => {
      e.stopPropagation()
      console.log()
      if (e.target.checked) {
        await addNetflixPremium("ntfx_chck_" + idproducto)

        const netflixPaqTV = document.querySelectorAll("[id^=ntfx_chck_][id*='" + idproducto + "']");
        netflixPaqTV.forEach(e => e.checked = true);
      } else {
        await removeNetflixPremium()
      }
    })
  }

  [subscribeButton].forEach(e => {
    e.addEventListener("click", async (e) => {
      e.stopPropagation();
      document.querySelectorAll(".netflixP").forEach(e => e.classList.add("d-none"));
      document.querySelectorAll("[id^=ntfx_chck_]").forEach(e => e.checked = false);
      await removeNetflixPremium();
      if (subscribeButton.textContent === "Añadir al carrito") {
        //enabledCardPackgesTV();
        enabledCardPackges("package-disabled", ".pck-tv-button-subscribe");
        disableCardPackagesById("card-package-disabled-" + idproducto + "-in-live-package");       
        //const precioActual = precio_sin_paramount>0?precio_sin_paramount:precio; 
        await setShoppingCartItem(type = "package", idproducto, nombre, precio, `#subscribe-button-package-${idproducto}`, productos_beneficios, clave_producto, tipo_producto, descuento = precio_obsoleto - precio)
        await setButtonText(`#subscribe-button-package-${idproducto}-in-live-package`, "Quitar del carrito");
        
        /* if (_netflixPackages.includes(idproducto)) {
          document.getElementById("ntfx_cnt_" + idproducto).classList.remove("d-none");
        } */
      } else {
        await removeShoppingCartItem(idproducto, `#subscribe-button-package-${idproducto}`, "package", clave_producto)
       // if (type === "package") removePlatformsDisabled();
        await setButtonText(`#subscribe-button-package-${idproducto}-in-live-package`, "Añadir al carrito");
        enabledCardPackgesByClass("package-disabled-in-live-package");
        unblockByPrecioNfl();
      }
    })
  })


  // parentContainer.appendChild(cardContent);

  const dummyContainer = document.createElement("div");
  dummyContainer.classList.add("dummy-space")
  parentContainer.appendChild(dummyContainer);
  // Append the card container to the document body or another parent element
  return parentContainer;
}

function uncheckNetflixPremium(){
  // 
  // console.log(idproducto);
  // var y = document.getElementsByClassName('check-netflix');
  // idNetflixCheck.checked = true;
  document.querySelectorAll("[id^=ntfx_chck_]").forEach(e => e.checked = false);
}

function enabledCardPackges(classNamePackage, nameButton) {
  //Habilita los paquetes previamente seleccionados verificando que no sea NFLPass si este está bloqueado
  const val = verificaNflPass('verifica',false) 
  const listPackages = document.getElementsByClassName(classNamePackage);
  listPackages.length && Array.from(listPackages).forEach(platform => platform.classList.add('d-none'));

  //Habilita los canales previamente seleccionados
  const listChannels = document.getElementsByClassName("package-live-disabled");
  listChannels.length && Array.from(listChannels).forEach(platform => platform.classList.add('d-none'));

  //Cambia texto "Añadir al carrito" de todos los paquetes+tv
  const subscribeButtonPackages = document.querySelectorAll(nameButton)
  subscribeButtonPackages.forEach(p => p.textContent = "Añadir al carrito")
  verificaNflPass('aplica',val)   
}

function enabledCardPackgesByClass(className) {
  //limpia todos los paquetes actualmente deshabilitados
  const listPackages = document.getElementsByClassName(className);
  listPackages.length && Array.from(listPackages).forEach(platform => platform.classList.add('d-none'));

  //deshabilita el paquete seleccionado
  const packageDisabled = document.getElementsByClassName(className);
  packageDisabled.classList.remove('d-none');

} 