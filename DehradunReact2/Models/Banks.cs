using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DehradunReact2.Models
{
    [Table("banks", Schema = "public")]
    public class Banks
    {
        [Key]
        public int gid { get; set; }
        public string name { get; set; }
        
    }
}
