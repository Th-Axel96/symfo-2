import axios from "axios";
import Swal from "sweetalert2";
import { URL_PRODUCT } from "../../../middleware/environment";

export const DeleteProduct = (id) => {
  Swal.fire({
    title: "Etes vous sur ?",
    text: "Opération irréversible",
    icon: "warning",
    showCancelButton: true,
    cancelButtonText: "Annuler",
    confirmButtonText: "Supprimer !",
  })
    .then((result) => {
      if (result.isConfirmed) {
        axios.delete(`${URL_PRODUCT}/${id}`).then(() => {
          Swal.fire({
            icon: "success",
            title: "projet supprimé !",
            showConfirmButton: false,
            timer: 1500,
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        });
      }
    })
    .catch((err) => {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Une erreur est survenue",
        showConfirmButton: false,
        timer: 1500,
      });
    });
};

DeleteProduct.protoTypes = {
  id: PropTypes.number,
};


