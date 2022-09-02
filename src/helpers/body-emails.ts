import { Order } from "../interfaces/order.interface";
import { User } from "../interfaces/user.interface";

export const purchaseRequest = (user: User, order: Order) => {
    const { names, lastnames } = user;
    const { orderDate, products, chosenPayment, status, total, address } = order;
    return {
        from: '"Solicitud pedido" <proyectospcudec@gmail.com>',
        subject: "¡Te acaban de solicitar un nuevo pedido agrícola 🥝🥑🥕🍉!",
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
          <head> 
          <meta charset="UTF-8"> 
          <meta content="width=device-width, initial-scale=1" name="viewport"> 
          <meta name="x-apple-disable-message-reformatting"> 
          <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
          <meta content="telephone=no" name="format-detection"> 
            <style type="text/css">
            a {text-decoration: none;}
            </style>
            <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG></o:AllowPNG>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
          <style type="text/css">
        #outlook a {
            padding:0;
        }
        .ExternalClass {
            width:100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
            line-height:100%;
        }
        .es-button {
            mso-style-priority:100!important;
            text-decoration:none!important;
        }
        a[x-apple-data-detectors] {
            color:inherit!important;
            text-decoration:none!important;
            font-size:inherit!important;
            font-family:inherit!important;
            font-weight:inherit!important;
            line-height:inherit!important;
        }
        .es-desk-hidden {
            display:none;
            float:left;
            overflow:hidden;
            width:0;
            max-height:0;
            line-height:0;
            mso-hide:all;
        }
        [data-ogsb] .es-button {
            border-width:0!important;
            padding:10px 20px 10px 20px!important;
        }
        [data-ogsb] .es-button.es-button-1660706598669 {
            padding:10px 35px!important;
        }
        @media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:30px!important; text-align:center } h2 { font-size:26px!important; text-align:center } h3 { font-size:20px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:30px!important } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:26px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:20px!important; display:block!important; border-width:10px 20px 10px 20px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } .es-desk-hidden { display:table-row!important; width:auto!important; overflow:visible!important; max-height:inherit!important } }
        </style> 
         </head> 
         <body style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:Arial, sans-serif;padding:0;Margin:0"> 
          <div class="es-wrapper-color" style="background-color:#ffffff"><!--[if gte mso 9]>
                    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                        <v:fill type="tile" color="#ffffff"></v:fill>
                    </v:background>
                <![endif]--> 
           <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
             <tr style="border-collapse:collapse"> 
              <td valign="top" style="padding:0;Margin:0"> 
               <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
                 <tr style="border-collapse:collapse"> 
                  <td align="center" style="padding:0;Margin:0"> 
                   <table class="es-header-body" cellspacing="0" cellpadding="0" align="center" bgcolor="#f8f8f8" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#f8f8f8;width:600px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="left" bgcolor="#EE731B" style="padding:15px;Margin:0;background-color:#ee731b"><!--[if mso]><table style="width:570px" cellpadding="0" cellspacing="0"><tr><td style="width:276px" valign="top"><![endif]--> 
                       <table cellpadding="0" cellspacing="0" class="es-left" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                         <tr style="border-collapse:collapse"> 
                          <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:276px"> 
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td align="left" style="padding:0;Margin:0;font-size:0px"><a target="_blank" href="https://bdproyectospc.web.app" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#A0A7AC;font-size:14px"><img class="adapt-img" src="https://wjmjag.stripocdn.email/content/guids/c684fe91-584c-4a95-b66b-d9ebf06bc753/images/logospcv1.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="63"></a></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table><!--[if mso]></td><td style="width:20px"></td><td style="width:274px" valign="top"><![endif]--> 
                       <table cellpadding="0" cellspacing="0" class="es-right" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                         <tr style="border-collapse:collapse"> 
                          <td align="left" style="padding:0;Margin:0;width:274px"> 
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td align="right" style="padding:10px;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:40px;color:#ffffff;font-size:20px"><strong>${names + " " + lastnames}</strong></p></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table><!--[if mso]></td></tr></table><![endif]--></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td align="left" style="padding:0;Margin:0"> 
                       <table cellpadding="0" cellspacing="0" width="100%" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td align="center" valign="top" style="padding:0;Margin:0;width:600px"> 
                           <table cellpadding="0" cellspacing="0" width="100%" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img" src="https://wjmjag.stripocdn.email/content/guids/c684fe91-584c-4a95-b66b-d9ebf06bc753/images/emailinfo.jpg" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="600"></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#f8f8f8" bgcolor="#f8f8f8" align="left"> 
                       <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                           <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td align="center" style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px"> 
                               <div> 
                                <h2 style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:Arial, sans-serif;font-size:30px;font-style:normal;font-weight:normal;color:#242424"><b>Has recibido una solicitud de compra</b></h2> 
                               </div></td> 
                             </tr> 
                             <tr style="border-collapse:collapse"> 
                              <td align="center" style="padding:0;Margin:0;padding-left:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;color:#242424;font-size:14px">Hola ${names}, es necesario que te dirijas a la sección de tus pedidos del Sistema de Productividad para el Campo debido a que un consumidor te acaba de solicitar un nuevo pedido agrícola!&nbsp;</p></td> 
                             </tr> 
                             <tr style="border-collapse:collapse"> 
                              <td align="center" style="Margin:0;padding-left:10px;padding-right:10px;padding-top:15px;padding-bottom:15px"><span class="es-button-border" style="border-style:solid;border-color:#2cb543;background:#058d38;border-width:0px;display:inline-block;border-radius:20px;width:auto"><a href="https://bdproyectospc.web.app/#/mis-ordenes" class="es-button es-button-1660706598669" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#ffffff;font-size:18px;border-style:solid;border-color:#058d38;border-width:10px 35px;display:inline-block;background:#058d38;border-radius:20px;font-family:'lucida sans unicode', 'lucida grande', sans-serif;font-weight:normal;font-style:normal;line-height:22px;width:auto;text-align:center">Revisar y alistar pedidos</a></span></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="Margin:0;padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:15px;background-color:#eeeeee" bgcolor="#eeeeee" align="left"> 
                       <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;width:580px"> 
                           <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td align="center" style="padding:0;Margin:0"><h2 style="Margin:0;line-height:29px;mso-line-height-rule:exactly;font-family:Arial, sans-serif;font-size:24px;font-style:normal;font-weight:normal;color:#191919">Información solicitud de compra</h2></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="Margin:0;padding-top:10px;padding-left:20px;padding-right:20px;padding-bottom:30px;background-color:#eeeeee" bgcolor="#eeeeee" align="left"><!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]--> 
                       <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                         <tr style="border-collapse:collapse"> 
                          <td class="es-m-p20b" align="left" style="padding:0;Margin:0;width:270px"> 
                           <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:Arial, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#242424">Detalles solicitud</h3></td> 
                             </tr> 
                             <tr style="border-collapse:collapse"> 
                              <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;color:#A0A7AC;font-size:14px"><strong>Fecha:</strong>&nbsp;${orderDate}<br><strong style="text-align:center">Cantidad de productos:</strong><span style="text-align:center"> ${products.length}</span></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;color:#A0A7AC;font-size:14px"><strong>Método de pago:</strong> ${chosenPayment.name}<br><strong>Estado del pedido:</strong>&nbsp;${status}</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;color:#A0A7AC;font-size:14px"><strong>TOTAL:</strong> $ ${total}</p></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table><!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]--> 
                       <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                         <tr style="border-collapse:collapse"> 
                          <td align="left" style="padding:0;Margin:0;width:270px"> 
                           <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td align="left" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><h3 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:Arial, sans-serif;font-size:20px;font-style:normal;font-weight:bold;color:#242424">Dirección consumidor</h3></td> 
                             </tr> 
                             <tr style="border-collapse:collapse"> 
                              <td align="left" style="padding:0;Margin:0"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;color:#A0A7AC;font-size:14px"><strong>Departamento: </strong>Cundinamarca<br><strong>Ciudad/Municipio:</strong>&nbsp;${address.municipality}<br><strong>Dirección:</strong>&nbsp;${address.address}</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;color:#A0A7AC;font-size:14px"><b>Teléfono: </b>${address.phone}</p></td> 
                             </tr> 
                           </table></td> 
                         </tr> 
                       </table><!--[if mso]></td></tr></table><![endif]--></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table> 
               <table cellpadding="0" cellspacing="0" class="es-footer" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top"> 
                 <tr style="border-collapse:collapse"> 

                  <td align="center" style="padding:0;Margin:0"> 
                   <table class="es-footer-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#242424;width:600px"> 
                     <tr style="border-collapse:collapse"> 
                      <td align="left" bgcolor="#058D38" style="padding:20px;Margin:0;background-color:#058d38"> 
                       <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                         <tr style="border-collapse:collapse"> 
                          <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                           <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                             <tr style="border-collapse:collapse"> 
                              <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px;font-size:0"> 
                               <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                                 <tr style="border-collapse:collapse"> 
                                  <td valign="top" align="center" style="padding:0;Margin:0;padding-right:15px"><img title="Twitter" src="https://wjmjag.stripocdn.email/content/assets/img/social-icons/rounded-colored/twitter-rounded-colored.png" alt="Tw" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td> 
                                  <td valign="top" align="center" style="padding:0;Margin:0;padding-right:15px"><img title="Facebook" src="https://wjmjag.stripocdn.email/content/assets/img/social-icons/rounded-colored/facebook-rounded-colored.png" alt="Fb" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td> 
                                  <td valign="top" align="center" style="padding:0;Margin:0"><img title="Instagram" src="https://wjmjag.stripocdn.email/content/assets/img/social-icons/rounded-colored/instagram-rounded-colored.png" alt="Ig" width="32" height="32" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"></td> 
                                 </tr> 
                               </table></td> 
                             </tr> 
                             <tr style="border-collapse:collapse"> 
                              <td align="center" style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:17px;color:#ffffff;font-size:14px"><strong>Universidad de Cundinamarca<br>Laura Tatiana Ramos Villanueva &amp; Johann Nicolás Nieto Cárdenas<br><a target="_blank" href="mailto:proyectospcudec@gmail.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#ffffff;font-size:14px;line-height:17px"></a>proyectospcudec<a target="_blank" href="mailto:proyectospcudec@gmail.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#ffffff;font-size:14px">@gmail.com</a><a target="_blank" href="mailto:proyectospcudec@gmail.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#ffffff;font-size:14px;line-height:17px"></a></strong></p></td> 
                             </tr> 
                             <tr style="border-collapse:collapse"> 
                              <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:38px;color:#999999;font-size:25px">NOS UNE EL AMOR POR EL&nbsp;<br><strong>CAMPO CUNDINAMARQUÉS</strong></p></td> 
                             </tr> 
                           </table></td> 
                         </tr>
                       </table></td> 
                     </tr> 
                   </table></td> 
                 </tr> 
               </table></td> 
             </tr> 
           </table> 
          </div>  
         </body>
        </html>`,
    };
};

export const notifyOrderPaidConsumer = (user: User) => {
    const { names, lastnames } = user;
    return {
        from: '"Solicitud pedido" <proyectospcudec@gmail.com>',
        subject: "¡Se ha confirmado el pago de tu pedido 🥝🥑🥕🍉!",
        html: `<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
  style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">

<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>¡Se ha confirmado el pago de tu pedido 🥝🥑🥕🍉!</title>
  <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]-->
  <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
  <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <!--[if !mso]><!-- -->
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet">
  <!--<![endif]-->
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    .ExternalClass {
      width: 100%;
    }

    .ExternalClass,
    .ExternalClass p,
    .ExternalClass span,
    .ExternalClass font,
    .ExternalClass td,
    .ExternalClass div {
      line-height: 100%;
    }

    .es-button {
      mso-style-priority: 100 !important;
      text-decoration: none !important;
    }

    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }

    .es-desk-hidden {
      display: none;
      float: left;
      overflow: hidden;
      width: 0;
      max-height: 0;
      line-height: 0;
      mso-hide: all;
    }

    [data-ogsb] .es-button {
      border-width: 0 !important;
      padding: 10px 20px 10px 20px !important;
    }

    [data-ogsb] .es-button.es-button-1 {
      padding: 10px 35px !important;
    }

    @media only screen and (max-width:600px) {

      p,
      ul li,
      ol li,
      a {
        line-height: 150% !important
      }

      h1,
      h2,
      h3,
      h1 a,
      h2 a,
      h3 a {
        line-height: 120% !important
      }

      h1 {
        font-size: 30px !important;
        text-align: center
      }

      h2 {
        font-size: 26px !important;
        text-align: center
      }

      h3 {
        font-size: 20px !important;
        text-align: center
      }

      .es-header-body h1 a,
      .es-content-body h1 a,
      .es-footer-body h1 a {
        font-size: 30px !important
      }

      .es-header-body h2 a,
      .es-content-body h2 a,
      .es-footer-body h2 a {
        font-size: 26px !important
      }

      .es-header-body h3 a,
      .es-content-body h3 a,
      .es-footer-body h3 a {
        font-size: 20px !important
      }

      .es-header-body p,
      .es-header-body ul li,
      .es-header-body ol li,
      .es-header-body a {
        font-size: 16px !important
      }

      .es-content-body p,
      .es-content-body ul li,
      .es-content-body ol li,
      .es-content-body a {
        font-size: 16px !important
      }

      .es-footer-body p,
      .es-footer-body ul li,
      .es-footer-body ol li,
      .es-footer-body a {
        font-size: 16px !important
      }

      .es-infoblock p,
      .es-infoblock ul li,
      .es-infoblock ol li,
      .es-infoblock a {
        font-size: 12px !important
      }

      *[class="gmail-fix"] {
        display: none !important
      }

      .es-m-txt-c,
      .es-m-txt-c h1,
      .es-m-txt-c h2,
      .es-m-txt-c h3 {
        text-align: center !important
      }

      .es-m-txt-r,
      .es-m-txt-r h1,
      .es-m-txt-r h2,
      .es-m-txt-r h3 {
        text-align: right !important
      }

      .es-m-txt-l,
      .es-m-txt-l h1,
      .es-m-txt-l h2,
      .es-m-txt-l h3 {
        text-align: left !important
      }

      .es-m-txt-r img,
      .es-m-txt-c img,
      .es-m-txt-l img {
        display: inline !important
      }

      .es-button-border {
        display: block !important
      }

      a.es-button,
      button.es-button {
        font-size: 20px !important;
        display: block !important;
        border-left-width: 0px !important;
        border-right-width: 0px !important
      }

      .es-btn-fw {
        border-width: 10px 0px !important;
        text-align: center !important
      }

      .es-adaptive table,
      .es-btn-fw,
      .es-btn-fw-brdr,
      .es-left,
      .es-right {
        width: 100% !important
      }

      .es-content table,
      .es-header table,
      .es-footer table,
      .es-content,
      .es-footer,
      .es-header {
        width: 100% !important;
        max-width: 600px !important
      }

      .es-adapt-td {
        display: block !important;
        width: 100% !important
      }

      .adapt-img {
        width: 100% !important;
        height: auto !important
      }

      .es-m-p0 {
        padding: 0px !important
      }

      .es-m-p0r {
        padding-right: 0px !important
      }

      .es-m-p0l {
        padding-left: 0px !important
      }

      .es-m-p0t {
        padding-top: 0px !important
      }

      .es-m-p0b {
        padding-bottom: 0 !important
      }

      .es-m-p20b {
        padding-bottom: 20px !important
      }

      .es-mobile-hidden,
      .es-hidden {
        display: none !important
      }

      tr.es-desk-hidden,
      td.es-desk-hidden,
      table.es-desk-hidden {
        width: auto !important;
        overflow: visible !important;
        float: none !important;
        max-height: inherit !important;
        line-height: inherit !important
      }

      tr.es-desk-hidden {
        display: table-row !important
      }

      table.es-desk-hidden {
        display: table !important
      }

      td.es-desk-menu-hidden {
        display: table-cell !important
      }

      .es-menu td {
        width: 1% !important
      }

      table.es-table-not-adapt,
      .esd-block-html table {
        width: auto !important
      }

      table.es-social {
        display: inline-block !important
      }

      table.es-social td {
        display: inline-block !important
      }

      .es-desk-hidden {
        display: table-row !important;
        width: auto !important;
        overflow: visible !important;
        max-height: inherit !important
      }
    }
  </style>
</head>

<body
  style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:Arial, sans-serif;padding:0;Margin:0">
  <div class="es-wrapper-color" style="background-color:#ffffff">
    <!--[if gte mso 9]>
\t\t\t<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
\t\t\t\t<v:fill type="tile" color="#555555"></v:fill>
\t\t\t</v:background>
\t\t<![endif]-->
    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top">
      <tr style="border-collapse:collapse">
        <td valign="top" style="padding:0;Margin:0">
          <table class="es-header" cellspacing="0" cellpadding="0" align="center"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
            <tr style="border-collapse:collapse">
              <td align="center" style="padding:0;Margin:0">
                <table class="es-header-body" cellspacing="0" cellpadding="0" align="center" bgcolor="#f8f8f8"
                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#f8f8f8;width:600px">
                  <tr style="border-collapse:collapse">
                    <td align="left" bgcolor="#058d38" style="padding:15px;Margin:0;background-color:#058d38">
                      <!--[if mso]><table style="width:570px" cellpadding="0" cellspacing="0"><tr><td style="width:276px" valign="top"><![endif]-->
                      <table cellpadding="0" cellspacing="0" class="es-left" align="left"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
                        <tr style="border-collapse:collapse">
                          <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:276px">
                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr style="border-collapse:collapse">
                                <td align="left" style="padding:0;Margin:0;font-size:0px"><a target="_blank"
                                    href="https://bdproyectospc.web.app"
                                    style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#A0A7AC;font-size:14px"><img
                                      class="adapt-img"
                                      src="https://wjmjag.stripocdn.email/content/guids/c684fe91-584c-4a95-b66b-d9ebf06bc753/images/logospcv1.png"
                                      alt
                                      style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                      width="63"></a></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if mso]></td><td style="width:25px"></td><td style="width:269px" valign="top"><![endif]-->
                      <table cellpadding="0" cellspacing="0" class="es-right" align="right"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
                        <tr style="border-collapse:collapse">
                          <td align="left" style="padding:0;Margin:0;width:269px">
                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr style="border-collapse:collapse">
                                <td align="right" style="padding:10px;Margin:0">
                                  <p
                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:40px;color:#ffffff;font-size:20px">
                                    <strong>${names + ' ' + lastnames}</strong></p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                      <!--[if mso]></td></tr></table><![endif]-->
                    </td>
                  </tr>
                  <tr style="border-collapse:collapse">
                    <td style="padding:0;Margin:0;background-color:#ffffff" bgcolor="#ffffff" align="left">
                      <table width="100%" cellspacing="0" cellpadding="0"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr style="border-collapse:collapse">
                          <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                            <table width="100%" cellspacing="0" cellpadding="0"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:3px"
                              role="presentation">
                              <tr style="border-collapse:collapse">
                                <td align="center" style="padding:0;Margin:0;padding-bottom:15px;padding-top:30px">
                                  <div>
                                    <h2
                                      style="Margin:0;line-height:31px;mso-line-height-rule:exactly;font-family:Arial, sans-serif;font-size:26px;font-style:normal;font-weight:normal;color:#242424">
                                      <b>¡TU PEDIDO ACABA DE SER CONFIRMADO!</b></h2>
                                  </div>
                                </td>
                              </tr>
                              <tr style="border-collapse:collapse">
                                <td align="center" style="padding:0;Margin:0;padding-left:20px;padding-right:20px">
                                  <p
                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:21px;color:#242424;font-size:14px">
                                    Hola ${names.toLocaleUpperCase()}, el productor ha validado exitosamente el pago que
                                    realizaste, no te pierdas ningún detalle. ¡Allá te esperamos!</p>
                                </td>
                              </tr>
                              <tr style="border-collapse:collapse">
                                <td align="center"
                                  style="Margin:0;padding-left:10px;padding-right:10px;padding-top:15px;padding-bottom:15px">
                                  <span class="es-button-border"
                                    style="border-style:solid;border-color:#2cb543;background:#058d38;border-width:0px;display:inline-block;border-radius:20px;width:auto"><a
                                      href="https://bdproyectospc.web.app/#/mis-ordenes" class="es-button es-button-1"
                                      target="_blank"
                                      style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#ffffff;font-size:16px;border-style:solid;border-color:#058d38;border-width:10px 35px;display:inline-block;background:#058d38;border-radius:20px;font-family:'lucida sans unicode', 'lucida grande', sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center">Revisar
                                      mi pedido</a></span></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr style="border-collapse:collapse">
                    <td align="left" style="padding:0;Margin:0">
                      <table cellpadding="0" cellspacing="0" width="100%"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr style="border-collapse:collapse">
                          <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr style="border-collapse:collapse">
                                <td align="center" style="padding:0;Margin:0;font-size:0px"><img class="adapt-img"
                                    src="https://wjmjag.stripocdn.email/content/guids/CABINET_fde525ab6be806b713f171f6a80a21bb/images/a.png"
                                    alt
                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                    width="600"></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0" class="es-footer" align="center"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
            <tr style="border-collapse:collapse">
              <td align="center" style="padding:0;Margin:0">
                <table class="es-footer-body" cellspacing="0" cellpadding="0" align="center"
                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#242424;width:600px">
                  <tr style="border-collapse:collapse">
                    <td align="left" bgcolor="#058D38" style="padding:20px;Margin:0;background-color:#058d38">
                      <table width="100%" cellspacing="0" cellpadding="0"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr style="border-collapse:collapse">
                          <td valign="top" align="center" style="padding:0;Margin:0;width:560px">
                            <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr style="border-collapse:collapse">
                                <td align="center"
                                  style="padding:0;Margin:0;padding-top:10px;padding-bottom:20px;font-size:0">
                                  <table class="es-table-not-adapt es-social" cellspacing="0" cellpadding="0"
                                    role="presentation"
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                                    <tr style="border-collapse:collapse">
                                      <td valign="top" align="center" style="padding:0;Margin:0;padding-right:15px"><img
                                          title="Twitter"
                                          src="https://wjmjag.stripocdn.email/content/assets/img/social-icons/rounded-colored/twitter-rounded-colored.png"
                                          alt="Tw" width="32" height="32"
                                          style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
                                      </td>
                                      <td valign="top" align="center" style="padding:0;Margin:0;padding-right:15px"><img
                                          title="Facebook"
                                          src="https://wjmjag.stripocdn.email/content/assets/img/social-icons/rounded-colored/facebook-rounded-colored.png"
                                          alt="Fb" width="32" height="32"
                                          style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
                                      </td>
                                      <td valign="top" align="center" style="padding:0;Margin:0"><img title="Instagram"
                                          src="https://wjmjag.stripocdn.email/content/assets/img/social-icons/rounded-colored/instagram-rounded-colored.png"
                                          alt="Ig" width="32" height="32"
                                          style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic">
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              <tr style="border-collapse:collapse">
                                <td align="center"
                                  style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px;color:#ffffff">
                                  <p
                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:17px;color:#ffffff;font-size:14px">
                                    <strong>Universidad de Cundinamarca<br>Laura Tatiana Ramos Villanueva &amp; Johann
                                      Nicolás Nieto Cárdenas<br><a target="_blank"
                                        href="mailto:proyectospcudec@gmail.com"
                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#AAAAAA;font-size:14px;line-height:17px">proyectospcudec@gmail.com</a></strong>
                                  </p>
                                </td>
                              </tr>
                              <tr style="border-collapse:collapse">
                                <td align="center" style="padding:0;Margin:0;padding-top:10px;padding-bottom:10px">
                                  <p
                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:Arial, sans-serif;line-height:38px;color:#999999;font-size:25px">
                                    NOS UNE EL AMOR POR EL&nbsp;<br><strong>CAMPO CUNDINAMARQUÉS</strong></p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</body>

</html>`
    };
}
