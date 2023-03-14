using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Database.Entities;

[Table("blobs", Schema = "master")]
public partial class Blob
{
    [Key]
    [Column("id")]
    public Guid Id { get; set; }

    [Column("path")]
    public string? Path { get; set; }

    [Column("base_64")]
    public string? Base64 { get; set; }

    [Column("content_type")]
    public string ContentType { get; set; } = null!;

    [Column("created")]
    public DateTime Created { get; set; }

    [Column("modified")]
    public DateTime Modified { get; set; }

    [InverseProperty("Blob")]
    public virtual ICollection<User> Users { get; } = new List<User>();
}
