from django.urls import path

from quiz.views import GenerateQuestionnaireView

urlpatterns = [
    path("", GenerateQuestionnaireView.as_view())
]