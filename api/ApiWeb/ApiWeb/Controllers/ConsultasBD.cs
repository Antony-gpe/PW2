using Microsoft.AspNetCore.Mvc;
using ApiWeb.Models;
using System.Linq;

namespace ApiWeb.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ConsultasBD : Controller
    {
        private readonly ApplicationDbContext _context;

        public ConsultasBD(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("login")]
        public IActionResult Login(string nombreUsuario, string contrasena)
        {
            var usuario = _context.Usuario.SingleOrDefault(u => u.User == nombreUsuario && u.Password == contrasena);

            if (usuario == null)
            {
                return Unauthorized("Nombre de usuario o contraseña incorrecta");
            }

            // Autenticación exitosa, devolver el objeto Usuario
            return Ok(usuario);
        }
    }
}
