using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DehradunReact2.Models
{
    [Table("admin", Schema = "public")]
    public class AdminLogin
    {
        [Key]

        public int id { get; set; }
        public String role { get; set; }
        public String aname { get; set; }
        public String password { get; set; }
    }
}
