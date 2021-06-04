using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DehradunReact2.Models
{
    [Table("signup", Schema = "public")]
    public class UserData
    {
        [Key]

        public int id { get; set; }
        public String fname { get; set; }
        public String lname { get; set; }
        public String uname { get; set; }
        public String email { get; set; }
        public String pass { get; set; }
    }
}
