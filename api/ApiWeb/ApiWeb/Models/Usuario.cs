using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApiWeb.Models
{
    public class Usuario
    {
        [Key]
        public int Id_Usuario { get; set; }

        [Required]
        [StringLength(50)]
        public string User { get; set; }

        [Required]
        [StringLength(50)]
        public string Password { get; set; }

        [Required]
        [StringLength(100)]
        public string Nombre { get; set; }

        [Required]
        [StringLength(100)]
        public string Apellido_P { get; set; }

        [Required]
        [StringLength(100)]
        public string Apellido_M { get; set; }

        [Required]
        [StringLength(100)]
        [EmailAddress]
        public string Correo { get; set; }

        [Required]
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:yyyy-MM-dd}", ApplyFormatInEditMode = true)]
        public DateTime Fecha_N { get; set; }

        [Column(TypeName = "mediumblob")]
        public byte[] Foto { get; set; }
    }
}
