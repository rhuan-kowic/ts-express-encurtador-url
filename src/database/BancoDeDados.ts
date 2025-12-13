export class BancoDeDados<T extends { id: string }> {
  private dados: T[] = [];

  salvar(item: T): void {
    this.dados.push(item);
    console.log("💾 Item salvo:", item);
  }

  buscarPorId(id: string): T | undefined {
    return this.dados.find((item) => item.id === id);
  }

  listar(): T[] {
    return this.dados;
  }
}
