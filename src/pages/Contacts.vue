<template>
    <form>
        <h1 class="text-center">Контакты волонтёров приюта Домик Надежды</h1>
        <div class="form-group">
            <label for="exampleInputEmail1">Адрес электронной почты</label>
            <input type="email" class="form-control" id="exampleInputEmail1"
                aria-describedby="Введите адрес электронной почты">
            <small id="emailHelp" class="form-text text-muted"> Мы никогда не передадим ваш адрес электронной почты
                кому-либо еще</small>
        </div>
        <div class="form-group">
            <input type="text" class="form-control" id="exampleInputEdit">
        </div>
        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Проверить</label>
        </div>
        <button type="submit" class="btn btn-primary">Отправить</button>
    </form>
</template>
<script>
export default {

}
</script>