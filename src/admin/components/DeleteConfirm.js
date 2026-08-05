import Swal from "sweetalert2";

export async function confirmDelete() {
  const result = await Swal.fire({
    title: "Delete Project?",
    text: "This action cannot be undone.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#dc2626",
    cancelButtonColor: "#6b7280",
    confirmButtonText: "Delete",
    cancelButtonText: "Cancel",
  });

  return result.isConfirmed;
}