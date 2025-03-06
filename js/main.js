(function ($) {
  "use strict";

  // Dynamic Packages
  document.addEventListener("DOMContentLoaded", async () => {
    //Asegura que no se muestre habilitado el check de la promo de hotgo
    const promoDiv = document.querySelector(".check-area-hotgo");
    promoDiv.style.height = "0";
    promoDiv.style.visibility = "hidden";

    const heroContent = await listHeroItems();
    renderHeroCarousel(heroContent);

    // Function to make an API request and handle the response
    const offer = await listOffer();
    beneficts = await listBenefits();
    document.getElementById("loader").style.display = "none";

    //Paquetes + TV
    const paquetesMasTv = offer.paquetes_mas_tv.sort(
      (a, b) => a.precio - b.precio
    );
    const paquetesEsencial = paquetesMasTv.filter((m) =>
      m.nombre.includes("ESENCIAL")
    );
    const paquetesExtendido = paquetesMasTv.filter((m) =>
      m.nombre.includes("EXTENDIDO")
    );

    paquetesEsencial.forEach((item) => {
      const node = buildPackageAndTV(item);
      document.getElementById("packages-esencial").appendChild(node);
    });

    paquetesExtendido.forEach((item) => {
      const node = buildPackageAndTV(item);
      document.getElementById("packages-extendido").appendChild(node);
    });
    document.getElementById("packs-live").classList.remove("d-none");
    document.getElementById("packages-live-pack").classList.remove("d-none");

    /* Disney */
    platforms.push({
      idproducto: 27,
      nombre: "Disney+",
      descripcion: "Disney+",
      precio: 219,
      precio_obsoleto: 219,
      status: "Activo",
      fecha_registro: "2024-06-07T12:26:36",
      tipo_producto: "Adicional",
      imagen:
        "https://d31nz91qboyide.cloudfront.net/mvshub/landingmvshub/modales/disney/logoDisneyPlus.png",
      clases:
        "https://d31nz91qboyide.cloudfront.net/mvshub/modales/plataformas/img_principal/amazon_prime.jpg",
      beneficios: [
        "La membresía Amazon Prime te da acceso a series y películas sin límites",
        " envíos GRATIS y rápidos en millones de productos en amazon.com.mx",
        " 2 millones de canciones sin anuncios y mucho más.",
      ],
      productos_asociados: [
        {
          idproducto: 277,
          nombre: "Disney+ Estándar",
          descripcion: "Disney+ Estándar",
          precio: 219,
          precio_obsoleto: 219,
          status: "Activo",
          fecha_registro: "2024-09-03T19:19:19",
          tipo_producto: "Adicional",
          imagen: "",
          clases: null,
          beneficios: null,
          footer: null,
          clave_producto: "31466",
          canales: "",
          nombre_web: "Disney+ Estándar",
          id_product_cache: 26,
        },
        {
          idproducto: 288,
          nombre: "Disney+ Premium",
          descripcion: "Disney+ Premium",
          precio: 299,
          precio_obsoleto: 299,
          status: "Activo",
          fecha_registro: "2024-09-03T19:19:19",
          tipo_producto: "Adicional",
          imagen: "",
          clases: null,
          beneficios: null,
          footer: null,
          clave_producto: "31455",
          canales: "",
          nombre_web: "Disney+ Premium",
          id_product_cache: 25,
        },
      ],
      footer: null,
      clave_producto: "120210",
      canales: "",
      nombre_web: "Disney+",
      id_product_cache: 8,
    });
    /* Disney */

    offer.adicional.forEach((_package) => {
      if (_livePlatformsIds.includes(_package.idproducto)) {
        livePackages.push(_package);
      } else {
        platforms.push(_package);
      }
    });
    packages = offer.paquetes;

    const non_recommended_packages = packages.filter(
      (p) => p.idproducto !== _recommendedPackageId
    );
    const package_recommended = packages.filter(
      (p) => p.idproducto === _recommendedPackageId
    );

    const canales = await listCanales();
    const canalesCarousel = canales.filter((c) => c.carousel);

    document
      .getElementById("live-packs-section")
      .prepend(renderChannelsCarousel(canalesCarousel));

    package_recommended.forEach((item) => {
      const node = buildPackageCard(item);
      document.getElementById("packs-section").appendChild(node);

      const nodeE = buildPackageCardInLivePackage(item);
      document.getElementById("packages-live-pack").appendChild(nodeE);
    });
    livePackages.forEach((item) => {
      const node = buildLivePackageCard(item);
      document.getElementById("live-packs-container").appendChild(node);
    });

    non_recommended_packages.sort((a, b) => a.precio - b.precio);

    non_recommended_packages.push({
      idproducto: 81120,
      nombre: "Kids",
      descripcion: "",
      ses_open: "892",
      precio: 79,
      precio_obsoleto: 106,
      status: "Activo",
      fecha_registro: "2021-06-07T12:26:36",
      tipo_producto: "paquetes + tv",
      id_product_cache: 6,
      imagen:
        "https://d31nz91qboyide.cloudfront.net/mvshub/paquetes/pqt_entretenimiento_total.svg",
      clases:
        "AA_footer-pack AA_pack-total col-12 text-center d-flex justify-content-center",
      beneficios:
        "Las series que todos quieren ver;Estrenos y películas sin límites;Deportes en vivo y en directo;Diversión y contenido educativo para niños",
      footer: null,
      clave_producto: "892",
      canales: "47",
      nombre_web: "KIDS",
      productos_beneficios: [
        {
          idBeneficio: 14,
          nombreBeneficio: "Edye",
          imagenBeneficio:
            "https://d31nz91qboyide.cloudfront.net/mvshub/plataformas/img/edye.svg",
        },
        {
          idBeneficio: null,
          nombreBeneficio: "Baby First",
          imagenBeneficio:
            "https://d31nz91qboyide.cloudfront.net/mvshub/plataformas/img/babyfirts.svg",
        },
        {
          idBeneficio: 14,
          nombreBeneficio: "Cocomelon",
          imagenBeneficio:
            "https://d31nz91qboyide.cloudfront.net/mvshub/plataformas/img/cocomelon.svg",
        },
      ],
      precio_ahorro: 306,
      precio_sin_paramount: 790,
    });
    non_recommended_packages.push({
      idproducto: 81140,
      nombre: "DEPORTES +",
      idproducto_tv: "2333",
      descripcion: "",
      ses_open: "892",
      precio: 999,
      precio_obsoleto: 1196,
      status: "Activo",
      fecha_registro: "2021-06-07T12:26:36",
      tipo_producto: "paquetes + tv",
      id_product_cache: 6,
      imagen:
        "https://d31nz91qboyide.cloudfront.net/mvshub/paquetes/pqt_entretenimiento_total.svg",
      clases:
        "AA_footer-pack AA_pack-total col-12 text-center d-flex justify-content-center",
      beneficios:
        "Las series que todos quieren ver;Estrenos y películas sin límites;Deportes en vivo y en directo;Diversión y contenido educativo para niños",
      footer: null,
      clave_producto: "892",
      canales: "47",
      nombre_web: "DEPORTES +",
      productos_beneficios: [
        {
          idBeneficio: 27,
          nombreBeneficio: "Disney",
          imagenBeneficio:
            "https://d31nz91qboyide.cloudfront.net/mvshub/landingmvshub/modales/disney/logoDisneyPlus.png",
        },
        {
          idBeneficio: 9,
          nombreBeneficio: "HBO Max",
          imagenBeneficio:
            "https://d31nz91qboyide.cloudfront.net/mvshub/plataformas/img/hbomax.svg",
        },
        {
          idBeneficio: 10,
          nombreBeneficio: "Paramout Plus",
          imagenBeneficio:
            "https://d31nz91qboyide.cloudfront.net/mvshub/plataformas/img/paramountplus.svg",
        },
        {
          idBeneficio: 25,
          nombreBeneficio: "DAZN",
          imagenBeneficio:
            "https://d31nz91qboyide.cloudfront.net/mvshub/plataformas/img/DAZN.png",
        },
        {
          idBeneficio: 20,
          nombreBeneficio: "FOX SPORTS",
          imagenBeneficio:
            "https://d31nz91qboyide.cloudfront.net/mvshub/plataformas/img/fox_sports.png",
        },
      ],
      precio_ahorro: 306,
      precio_sin_paramount: 790,
    });
    non_recommended_packages.push({
      idproducto: 81130,
      nombre: "DEPORTES",
      idproducto_tv: "2333",
      descripcion: "",
      ses_open: "892",
      precio: 619,
      precio_obsoleto: 788,
      status: "Activo",
      fecha_registro: "2021-06-07T12:26:36",
      tipo_producto: "paquetes + tv",
      id_product_cache: 6,
      imagen:
        "https://d31nz91qboyide.cloudfront.net/mvshub/paquetes/pqt_entretenimiento_total.svg",
      clases:
        "AA_footer-pack AA_pack-total col-12 text-center d-flex justify-content-center",
      beneficios:
        "Las series que todos quieren ver;Estrenos y películas sin límites;Deportes en vivo y en directo;Diversión y contenido educativo para niños",
      footer: null,
      clave_producto: "892",
      canales: "47",
      nombre_web: "DEPORTES",
      productos_beneficios: [
        {
          idBeneficio: 25,
          nombreBeneficio: "DAZN",
          imagenBeneficio:
            "https://d31nz91qboyide.cloudfront.net/mvshub/plataformas/img/DAZN.png",
        },
        {
          idBeneficio: 20,
          nombreBeneficio: "FOX SPORTS",
          imagenBeneficio:
            "https://d31nz91qboyide.cloudfront.net/mvshub/plataformas/img/fox_sports.png",
        },
      ],
      precio_ahorro: 306,
      precio_sin_paramount: 790,
    });

    non_recommended_packages.forEach((item) => {
      const nodeE = buildPackageCardInLivePackage(item);
      document.getElementById("packages-live-pack").appendChild(nodeE);

      const node = buildPackageCard(item);

      document.getElementById("packs-section").appendChild(node);
    });

    /* eventos */

    const paqueteDeportes = document.getElementById(
      "subscribe-button-package-81130-in-live-package"
    );
    /* const paqueteDeportesPlus = document.getElementById("subscribe-button-package-81140-in-live-package") */

    const bloqueoExtendido = document.getElementById(
      "card-package-live-disabled-2333"
    );
    paqueteDeportes.addEventListener("click", () => {
      setTimeout(() => {
        if (document.getElementById("shopping-cart-item-81130")) {
          bloqueoExtendido.classList.toggle("d-none");
        } else {
          bloqueoExtendido.classList.toggle("d-none");
        }
      }, 1500);
    });
    /* paqueteDeportesPlus.addEventListener("click", () => {
				setTimeout(() => {
					if (document.getElementById("shopping-cart-item-81140")) {
						bloqueoExtendido.classList.toggle("d-none")
					} else {
						bloqueoExtendido.classList.toggle("d-none")
					}
				}, 1500);
			}) */

    platforms
      .filter((p) => p.clave_producto != _netflixId)
      .forEach((item) => {
        const node = buildPlatformCard(item);
        document.getElementById("platforms-section").appendChild(node);
      });

    // Verifica el parámetro 'cardParam' en la URL para determinar qué card debe mostrar
    const queryParams = new URLSearchParams(window.location.search);
    const cardParam = queryParams.get("cardParam");
    if (cardParam) {
      let sectionId;
      // Se asigna el card a mostrar según el valor del parámetro 'card'
      switch (cardParam) {
        case "2":
          sectionId = "platforms-pack-selector";
          break;
        case "3":
          sectionId = "live-selector";
          break;
        case "4":
          sectionId = "platforms-selector";
          break;
        default:
          sectionId = "platforms-section";
      }
      // Simula un clic en la pestaña correspondiente
      document.getElementById(sectionId).click();
    } else {
      // Si no hay parámetro, muestra el card por defecto
      document.getElementById("platforms-live").click();
    }
    // Se agrega evento de cambio para las cards con radios
    updatePrice(platforms);
    updatePriceDisney(platforms);
    validateClaveNfl(platforms);

    document.querySelectorAll('input[name="subscription"]').forEach((radio) => {
      radio.addEventListener("change", function () {
        updatePrice(platforms);
      });
    });

    document
      .querySelectorAll('input[name="subscription-disney"]')
      .forEach((radio) => {
        radio.addEventListener("change", function () {
          updatePriceDisney(platforms);
        });
      });

   /*  document.getElementById("modal-btn-sports").addEventListener("click", () => {
		document.getElementById("my-modal-22")
	}) */

		document.getElementsByName("modal-deportes").forEach(el => {
			el.addEventListener("click", function () {
				const modalId = `my-modal-deportes`;
				const modal = document.getElementById(modalId);
			
				// Open the modal
				if (modal) {
				  modal.style.display = "block";
			
				  // Crear y mostrar el div modal-backdrop
				  const backdrop = document.createElement("div");
				  backdrop.classList.add("modal-backdrop", "fade");
				  document.body.appendChild(backdrop);
				  setTimeout(() => backdrop.classList.add("show"), 10);
			
				  // Close modal when clicking outside of the modal content
				  window.addEventListener("click", function (event) {
					if (event.target === modal) {
					  closeModal(modalId);
					}
				  });
			
				  // Close modal when clicking the close button
				  const closeButton = modal.querySelector(".btn-close");
				  if (closeButton) {
					closeButton.addEventListener("click", function () {
					  closeModal(modalId);
					});
				  }
			
				  const newCloseButton = modal.querySelector(".modal-btn");
				  if (newCloseButton) {
					newCloseButton.addEventListener("click", function () {
					  closeModal(modalId);
					});
				  }
				}
			  });
		})
		/* document.getElementById("modal-btn-sports").addEventListener("click", function () {
			const modalId = `my-modal-22`;
			const modal = document.getElementById(modalId);
		
			// Open the modal
			if (modal) {
			  modal.style.display = "block";
		
			  // Crear y mostrar el div modal-backdrop
			  const backdrop = document.createElement("div");
			  backdrop.classList.add("modal-backdrop", "fade");
			  document.body.appendChild(backdrop);
			  setTimeout(() => backdrop.classList.add("show"), 10);
		
			  // Close modal when clicking outside of the modal content
			  window.addEventListener("click", function (event) {
				if (event.target === modal) {
				  closeModal(modalId);
				}
			  });
		
			  // Close modal when clicking the close button
			  const closeButton = modal.querySelector(".btn-close");
			  if (closeButton) {
				closeButton.addEventListener("click", function () {
				  closeModal(modalId);
				});
			  }
		
			  const newCloseButton = modal.querySelector(".modal-btn");
			  if (newCloseButton) {
				newCloseButton.addEventListener("click", function () {
				  closeModal(modalId);
				});
			  }
			}
		  }); */
  });

  document.addEventListener("scroll", function (e) {
    const elem = document.getElementById("mobile-back");
    if (elem) {
      const height = elem.height;
      const scroll = document.documentElement.scrollTop;
      const fadedScroll = scroll / 2;
      //Esto tiene que ser igual que el margin-top del elemento
      const offset = -20;
      const percentage = (height + offset - scroll) / (height + offset);

      elem.style.opacity = percentage;
      //elem.style.marginTop = offset - fadedScroll + "px";//
    }
  });
})(jQuery);

//función que valida la clave de NFL Pass
function validateClaveNfl(products) {
  const res = products.filter((prod) => prod.nombre.includes("NFL"));
  _NflPassId = res[0].clave_producto;
  _NflPassProducts = res[0].productos_asociados;
}

//Función que bloquea y desbloquea toda la oferta comercial excepto NFL Pass
function blockUnblockOferta(block) {
  const containers = document.querySelectorAll(".back-opacity-nfl");
  if (block) {
    // Mostrar el div .back-opacity con .add-ur-pack en todos los contenedores
    if (containers) {
      containers.forEach((cont) => {
        cont.classList.remove("d-none");
      });
    }
  } else {
    // Oculta el div .back-opacity con .add-ur-pack en todos los contenedores
    if (containers) {
      containers.forEach((cont) => {
        cont.classList.add("d-none");
      });
    }
  }
}

//Función que bloquea y desbloquea la card de NFL Pass
function blockUnblockNfl(block) {
  const containers = document.querySelectorAll(".back-opacity-pass");
  if (block) {
    // Mostrar el div .back-opacity con .add-ur-pack en todos los contenedores
    if (containers) {
      containers.forEach((cont) => {
        cont.classList.remove("d-none");
      });
    }
  } else {
    // Oculta el div .back-opacity con .add-ur-pack en todos los contenedores
    if (containers) {
      containers.forEach((cont) => {
        cont.classList.add("d-none");
      });
    }
  }
}

//Función que actualiza los precios por radio seleccionado y detecta si es mensual, anual o semanal
function updatePrice(items) {
  const selectedOption = document.querySelector(
    'input[name="subscription"]:checked'
  );
  const value = selectedOption.value;
  var price = "";
  var id = "";
  var objectNewPrice = "";
  if (selectedOption) {
    items.forEach((product) => {
      if (product.productos_asociados != undefined) {
        objectNewPrice = product.nombre;
        product.productos_asociados.forEach((prodAs) => {
          if (prodAs.nombre == value) {
            price = prodAs.precio;
            id = prodAs.clave_producto;
          }
        });
      }
    });
    const newPrice = document.getElementById("precio-" + objectNewPrice);
    newPrice.innerHTML = `<span>$</span>${price}`;
    if (String(value).includes("Anual")) {
      const newPostfijo = document.getElementById(
        "pricePost-" + objectNewPrice
      );
      newPostfijo.textContent = "anual";
    } else if (String(value).includes("Semanal")) {
      const newPostfijo = document.getElementById(
        "pricePost-" + objectNewPrice
      );
      newPostfijo.textContent = "semanal";
    }
    validateNflPassBuy("changeRadios", id, "");
  }
}
/* Disney */
function updatePriceDisney(items) {
  const selectedOption = document.querySelector(
    'input[name="subscription-disney"]:checked'
  );
  const value = selectedOption.value;
  var price = "";
  var id = "";
  var objectNewPrice = "";
  if (selectedOption) {
    items.forEach((product) => {
      if (product.productos_asociados != undefined) {
        objectNewPrice = product.nombre;
        product.productos_asociados.forEach((prodAs) => {
          if (value === "Disney+ Premium") {
            document.getElementById("disney-current-offer").innerHTML =
              "Disney+ Premium";
            document.getElementById("disney-current-offer-detail").innerHTML =
              "Sin anuncios";
            document
              .getElementById("disney-current-offer-detail")
              .classList.remove("d-none");
            document.getElementById("disney-devices").innerHTML = "4";
            document
              .querySelectorAll(".disney-toggle")
              .forEach((el) => el.classList.remove("d-none"));
          }
          if (value === "Disney+ Estándar") {
            document.getElementById("disney-current-offer").innerHTML =
              "Disney+ Esándar";
            document.getElementById("disney-current-offer-detail").innerHTML =
              "Con anuncios";
            document
              .getElementById("disney-current-offer-detail")
              .classList.add("d-none");
            document.getElementById("disney-devices").innerHTML = "2";
            document
              .querySelectorAll(".disney-toggle")
              .forEach((el) => el.classList.add("d-none"));
          }
          if (prodAs.nombre == value) {
            price = prodAs.precio;
            id = prodAs.clave_producto;
          }
        });
      }
    });
    const newPrice = document.getElementById("precio-Disney+");
    newPrice.innerHTML = `<span>$</span>${price}`;
    const newPostfijo = document.getElementById("pricePost-" + objectNewPrice);
    newPostfijo.textContent = "al mes";
  }
}

function selectView(event) {
  for (const elem of document.getElementsByClassName("tab-packs")) {
    elem.classList.remove("active");
  }
  event.target.classList.add("active");

  document.getElementById("packs-live").classList.add("d-none");
  document.getElementById("packs-section").classList.add("d-none");
  document.getElementById("live-packs-section").classList.add("d-none");
  document.getElementById("platforms").classList.add("d-none");
  document.getElementById("packages-live-pack").classList.add("d-none");
  document.getElementById("disney-bundle-section").classList.add("d-none");
  console.log(document.getElementById("disney-bundle-section"));
  switch (event.target.id) {
    case "platforms-live":
      document.getElementById("packs-live").classList.remove("d-none");
      document.getElementById("packages-live-pack").classList.remove("d-none");
      break;
    case "platforms-pack-selector":
      document.getElementById("packs-section").classList.remove("d-none");
      break;
    case "live-selector":
      document.getElementById("live-packs-section").classList.remove("d-none");
      break;
    case "disney-selector":
      document.getElementById("disney-bundle-section").classList.remove("d-none");
      break;
    default:
      document.getElementById("platforms").classList.remove("d-none");
  }
  _selectedView = event.target.id;
}

function adjustMarginTop() {
  const mobileBack = document.getElementById("mobile-back");
  const dynamicContainer = document.getElementById("dynamic-container");

  const { top, height } = mobileBack.getBoundingClientRect();
  const marginTopAdjustment = top + height;

  dynamicContainer.style.marginTop = `${marginTopAdjustment}px`;
}

document.addEventListener("DOMContentLoaded", adjustMarginTop);
window.addEventListener("resize", adjustMarginTop);

/* Esta función es para cerrar el banner de NFL */
document.addEventListener("DOMContentLoaded", (event) => {
  const closeButton = document.getElementById("close-btn-nfl");
  closeButton.addEventListener("click", function () {
    const promoDiv = document.querySelector(".container-nfl");
    promoDiv.style.display = "none";
  });
});
